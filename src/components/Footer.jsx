import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <Container className={styles.footer}>
      <Row className="gy-5 gy-lg-0">
        <Col lg={3} className={`d-flex flex-column gap-4 ${styles.footer__alamat}`}>
          <p>
            Jalan Suroyo No. 161 Mayangan Kota
            <br className="d-block d-sm-none" />
            Probolonggo 672000
          </p>
          <p>binarcarrental@gmail.com</p>
          <p>081-233-334-808</p>
        </Col>
        <Col lg={3} className=" d-flex justify-content-sm-center footer__menu">
          <div className={`d-flex flex-column gap-4 ${styles.footer__menu__p}`}>
            <p className={styles.footer__onhover}>Our services</p>
            <p className={styles.footer__onhover}>Why Us</p>
            <p className={styles.footer__onhover}>Testimonial</p>
            <p className={styles.footer__onhover}>FAQ</p>
          </div>
        </Col>
        <Col lg={3} className={`d-flex flex-column gap-4 ${styles.footer__sosmed}`}>
          <p>Connect with us</p>
          <div className={`d-flex gap-3 my-2 ${styles.footer__icon}`}>
            <img src="./images/facebook_icon.svg" alt="" srcSet="" />
            <img src="./images/instagram_icon.svg" alt="" srcSet="" />
            <img src="./images/twitter_icon.svg" alt="" srcSet="" />
            <img src="./images/mail_icon.svg" alt="" srcSet="" />
            <img src="./images/twitch_icon.svg" alt="" srcSet="" />
          </div>
        </Col>
        <Col lg={3} className={`d-flex flex-column gap-4 ${styles.footer__copy}`}>
          <p>Copyright Binar 2022</p>
          <div>
            <a href="/">
              <img src="./images/brand.svg" alt="" srcSet="" className="img-fluid" />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
