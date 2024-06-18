import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CarCard from "./CarCard";
import { fetchCars, getfilteredCars, getAllCar, getCarStatus, getCarError, getSearchStatus } from "../slices/carSlice";
import { themeSlice } from "../slices/themeSlice";
import { Row, Col, Container, Image, Pagination } from "react-bootstrap";
import styles from "../styles/ListCar.module.css";
import Swal from "sweetalert2";

const ITEMS_PER_PAGE = 6;
const CARDS_PER_ROW = 3;

export default function ListCar() {
  const dispatch = useDispatch();
  const cars = useSelector(getAllCar);
  const filteredCars = useSelector(getfilteredCars);
  const loading = useSelector(getCarStatus);
  const error = useSelector(getCarError);
  const searchStatus = useSelector(getSearchStatus);
  const { searchMode } = themeSlice.actions;
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  useEffect(() => {
    setData(cars);
  }, [cars]);

  useEffect(() => {
    if (searchStatus === "failed") {
      setData([]);
      dispatch(searchMode(false));
      Swal.fire({
        icon: "error",
        scrollbarPadding: false,
        title: "Data tidak ditemukan!",
        text: "Silahkan mencari jadwal yang lain.",
        timer: 1500,
      });
      return;
    }
    if (searchStatus === "success") {
      setData(filteredCars);
      dispatch(searchMode(false));
      Swal.fire({
        icon: "success",
        scrollbarPadding: false,
        title: "Data ditemukan!",
        text: "Silahkan pilih mobil Anda.",
        timer: 1500,
      });
      return;
    }
  }, [filteredCars, searchStatus, dispatch, searchMode]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  switch (loading) {
    case "failed":
      return (
        <Container className="pt-5">
          <p>{error}</p>
        </Container>
      );
    case "loading":
      return (
        <Container className="pt-5">
          <div className={styles.loader__container}>
            <div className={styles.spinner}></div>
          </div>
        </Container>
      );
    default:
      return (
        <Container className="pt-5">
          <Row className={styles.card__container}>
            {currentData.length > 0 ? (
              currentData.map((car, index) => (
                <Col key={index} sm={12 / CARDS_PER_ROW} className="d-flex justify-content-center mb-4">
                  <CarCard
                    available={car.available}
                    capacity={car.capacity}
                    description={car.description}
                    image={car.image.startsWith("./images/") ? car.image : `/images/${car.image}`}
                    manufacture={car.manufacture}
                    model={car.model}
                    rentPerDay={Number(car.rentPerDay)}
                    transmission={car.transmission}
                    year={car.year}
                  />
                </Col>
              ))
            ) : (
              <Container className="py-5">
                <Row className="justify-content-center align-items-center ">
                  <Col className="d-flex flex-column align-items-center gap-4 gap-lg-3">
                    <Image
                      src="/images/img-BeepBeep.svg"
                      className={styles.img__not_found}
                      width={260}
                      alt="Car not found"
                    />
                    <h3 className={styles.text__not_found}>Car not found!</h3>
                  </Col>
                </Row>
              </Container>
            )}
          </Row>
          <div className="d-flex justify-content-center mt-4">
            <Pagination>
              {Array.from({ length: Math.ceil(data.length / ITEMS_PER_PAGE) }, (_, i) => (
                <Pagination.Item key={i + 1} active={i + 1 === currentPage} onClick={() => handlePageChange(i + 1)}>
                  {i + 1}
                </Pagination.Item>
              ))}
            </Pagination>
          </div>
        </Container>
      );
  }
}
