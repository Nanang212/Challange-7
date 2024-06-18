import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { Nav, Navbar, Container, Image, Offcanvas } from "react-bootstrap";
import styles from "../styles/Navbars.module.css";
import Buttons from "./Buttons";

export default function Navbars() {
  const [show, setShow] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleColorNav = () => {
    if (window.scrollY >= 200 || document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    handleColorNav();
    window.addEventListener("scroll", handleColorNav);
    return () => {
      window.removeEventListener("scroll", handleColorNav);
    };
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar
      id="navbar"
      style={{
        padding: "10px 0",
        zIndex: 3,
      }}
      expand="lg"
      className={`fixed-top ${isScrolled ? styles.nav__colored : styles.nav__transparent}`}
    >
      <Container className={styles.nav__space}>
        <Navbar.Brand href="/">
          <Image src="./images/brand.svg" />
        </Navbar.Brand>
        <Nav className={`ms-auto ${styles.nav}`}>
          <Nav.Link href="#services" className={styles.nav__link}>
            Our Services
          </Nav.Link>
          <Nav.Link href="#whyus" className={styles.nav__link}>
            Why Us
          </Nav.Link>
          <Nav.Link href="#testimonial" className={styles.nav__link}>
            Testimonial
          </Nav.Link>
          <Nav.Link href="#faq" className={styles.nav__link}>
            FAQ
          </Nav.Link>
          <Buttons type="submit">Register</Buttons>
        </Nav>
        <Navbar.Toggle
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar2"
          aria-controls="offcanvasNavbar2"
          onClick={handleShow}
          className={`navbar-toggler ${styles.navbar__toggler}`}
        >
          <FiMenu className={`navbar-toggler-icon ${styles.nav__icon}`} />
        </Navbar.Toggle>

        <Offcanvas
          show={show}
          id="offcanvasNavbar2"
          aria-labelledby="offcanvasNavbar2Label"
          onHide={handleClose}
          style={{ width: "50%" }}
          placement="end"
        >
          <Offcanvas.Header closeButton className={styles.offCanvas__header}>
            <Offcanvas.Title className={styles.offCanvas__header__title}>BCR</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className={styles.nav__offCanvas}>
              <Nav.Link href="#home" className={styles.nav__link}>
                Our Services
              </Nav.Link>
              <Nav.Link href="#home" className={styles.nav__link}>
                Why Us
              </Nav.Link>
              <Nav.Link href="#link" className={styles.nav__link}>
                Testimonial
              </Nav.Link>
              <Nav.Link href="#link" className={styles.nav__link}>
                FAQ
              </Nav.Link>
              <Buttons style={{ width: "max-content" }} type="submit">
                Register
              </Buttons>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
}
