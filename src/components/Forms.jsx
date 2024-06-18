import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Swal from "sweetalert2";
import { FiClock, FiChevronDown } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { fetchCars, getCarStatus, carSlice } from "../slices/carSlice";
import { themeSlice, getIsSearch } from "../slices/themeSlice";
import SelectInput from "./SelectInput";
import DateInput from "./DateInput";
import TextInput from "./TextInput";
import Buttons from "./Buttons";
import styles from "../styles/Forms.module.css";

export default function Forms() {
  const dispatch = useDispatch();
  const { filteredCars } = carSlice.actions;
  const { searchMode } = themeSlice.actions;
  const loading = useSelector(getCarStatus);
  const isSearch = useSelector(getIsSearch);
  const [driver, setDriver] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState(null);
  const [capacity, setCapacity] = useState("");
  const optionsTime = ["08:00", "09:00", "10:00", "11:00", "12:00"];
  const optionsDriver = ["Dengan Sopir", "Tanpa Sopir (Lepas Kunci)"];

  useEffect(() => {
    if (loading === "idle") {
      dispatch(fetchCars());
    }
  }, [loading, dispatch]);

  const handleSubmit = () => {
    const dateTime = new Date(`${date} ${time}`);
    if (!date || !time || !driver) {
      Swal.fire({
        icon: "error",
        scrollbarPadding: false,
        timer: 1500,
        title: "Form belum lengkap!",
        text: "Silahkan input semua form.",
      });
      return;
    }

    //implement filter
    dispatch(
      filteredCars({
        dateTime,
        capacity: Number(capacity),
      })
    );
  };

  return (
    <Container>
      <div className={styles.cars__form}>
        <form
          id="form-container"
          style={{ zIndex: isSearch ? 100 : 2 }}
          className={styles.form__container}
          onClick={() => dispatch(searchMode(true))}
        >
          <div className={styles.form__box}>
            <label htmlFor="driver">Tipe Driver</label>
            <SelectInput
              value={driver}
              setValue={setDriver}
              title={"Pilih Tipe Driver"}
              options={optionsDriver}
              width={200}
              icon={<FiChevronDown style={{ width: "16px", height: "16px" }} />}
            />
          </div>

          <div className={styles.form__box}>
            <label htmlFor="date">Tanggal</label>
            <DateInput value={date} setValue={setDate} />
          </div>

          <div className={styles.form__box}>
            <label htmlFor="time">Waktu Jemput/Ambil</label>
            <SelectInput
              value={time}
              setValue={setTime}
              title={"Pilih Waktu"}
              options={optionsTime}
              width={200}
              suffix={"WIB"}
              icon={<FiClock style={{ width: "16px", height: "16px" }} />}
            />
          </div>
          <div className={styles.form__box}>
            <label htmlFor="capacity">Jumlah Penumpang (Optional)</label>
            <TextInput value={capacity} setValue={setCapacity} />
          </div>
          <div className={styles.form__box}>
            <label htmlFor="btn-search-car" className={styles.btn__search__car}>
              .
            </label>
            <Buttons id="btn-search-bar" name="btn-search-bar" onClick={handleSubmit}>
              Cari Mobil
            </Buttons>
          </div>
        </form>
      </div>
    </Container>
  );
}
