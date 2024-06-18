import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRandomInt } from "../utils/randomInt";
import axios from "axios";

const URL = "http://localhost:8000/cars";

export const fetchCars = createAsyncThunk("cars/fetchCars", async () => {
  try {
    const response = await axios.get(URL);
    // Important!
    // To get all data please filter with days before now (yesteday)
    // Because we updated days with specifically (hour, minute)
    // So, it can be changed depends on updated data
    const modifyData = response.data.map((car) => {
      const isPositive = getRandomInt(0, 1) === 1;
      const timeAt = new Date();
      const mutator = getRandomInt(1000000, 100000000);
      const availableAt = new Date(timeAt.getTime() + (isPositive ? mutator : -1 * mutator));
      return {
        ...car,
        availableAt,
      };
    });
    return modifyData;
  } catch (error) {
    return error.message;
  }
});

const initialState = {
  cars: [],
  filteredCars: [],
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  statusGetData: "idle", //'idle' | 'failed' | 'success'
  error: null,
};

export const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    filteredCars: (state, action) => {
      const searchCar = state.cars.filter((car) => {
        if (!action.payload.capacity) {
          return car.available && new Date(car.availableAt).getTime() >= new Date(action.payload.dateTime).getTime();
        }

        return (
          car.available &&
          car.capacity >= action.payload.capacity &&
          new Date(car.availableAt).getTime() >= new Date(action.payload.dateTime).getTime()
        );
      });
      searchCar.length === 0 ? (state.statusGetData = "failed") : (state.statusGetData = "success");
      state.filteredCars = searchCar;
    },
  },
  extraReducers: (builder) => {
    // eslint-disable-next-line no-unused-vars
    builder.addCase(fetchCars.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchCars.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.cars = [...state.cars, ...action.payload];
    });
    builder.addCase(fetchCars.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export const getAllCar = (state) => state.cars.cars;
export const getCarStatus = (state) => state.cars.status;
export const getSearchStatus = (state) => state.cars.statusGetData;
export const getfilteredCars = (state) => state.cars.filteredCars;
export const getCarError = (state) => state.cars.error;

export default carSlice.reducer;
