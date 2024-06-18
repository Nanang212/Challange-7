import { Row, Col, Container, Image } from "react-bootstrap";
import styles from "../styles/Service.module.css";

export default function Service() {
  return (
    <Container id="services" className={styles.service}>
      <Row className="w-100 align-items-sm-center">
        <Col lg={6} className={styles.service__image}>
          <div className={styles.service__image__box}>
            <Image src="./images/service.svg" alt="" srcSet="" className="img-fluid" />
          </div>
        </Col>
        <Col lg={6} className={`d-flex align-items-end  mt-sm-0 mt-3`}>
          <div className={styles.service__text}>
            <h1>
              Best Car Rental for any kind <br className="d-sm-none d-block" />
              of trip in <br className="d-none d-sm-block" /> (Lokasimu)!
            </h1>
            <p>
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih
              <br className="d-none d-sm-block" />
              murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
              <br className="d-none d-sm-block" />
              pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
            </p>
            <ul className={styles.service__text__link}>
              <li className={styles.service__text__check}>
                <Image src="./images/ic_blue_check.svg" alt="" srcSet="" />
                <span>Sewa Mobil Dengan Supir di Bali 12 Jam</span>
              </li>
              <li className={styles.service__text__check}>
                <Image src="./images/ic_blue_check.svg" alt="" srcSet="" />
                Sewa Mobil Lepas Kunci di Bali 24 Jam
              </li>
              <li className={styles.service__text__check}>
                <Image src="./images/ic_blue_check.svg" alt="" srcSet="" />
                Sewa Mobil Jangka Panjang Bulanan
              </li>
              <li className={styles.service__text__check}>
                <Image src="./images/ic_blue_check.svg" alt="" srcSet="" />
                Gratis Antar - Jemput Mobil di Bandara
              </li>
              <li className={styles.service__text__check}>
                <Image src="./images/ic_blue_check.svg" alt="" srcSet="" />
                Layanan Airport Transfer / Drop In Out
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
