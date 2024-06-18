import { Row, Col, Container, Image } from "react-bootstrap";
import Buttons from "./Buttons";
import PropTypes from "prop-types";
import styles from "../styles/Hero.module.css";

export default function Hero({ isLandingPage }) {
  return (
    <Container className={styles.hero}>
      <Row>
        <Col lg={6} className={`d-flex align-item-center px-3 px-sm-0  ${styles.hero__reset}`}>
          <div className={styles.hero__text}>
            <h1>
              Sewa & Rental <br className="d-block d-sm-none" />
              Mobil Terbaik di kawasan (Lokasimu)
            </h1>
            <p>
              Selamat datang di Binar Car Rental.
              <br className="d-block d-sm-none" />
              Kami menyediakan mobil kualitas <br className="d-sm-block d-none" />
              terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu <br className="d-sm-block d-none" />
              untuk sewa mobil selama 24 jam.
            </p>
            {isLandingPage && (
              <a href="/cars">
                <Buttons>Mulai Sewa Mobil</Buttons>
              </a>
            )}
          </div>
        </Col>
        <Col lg={6} className={styles.hero__reset}>
          <div className={styles.hero__image}>
            <Image src="./images/car.svg" alt="" srcSet="" className="img-fluid" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

Hero.propTypes = {
  isLandingPage: PropTypes.bool,
};
