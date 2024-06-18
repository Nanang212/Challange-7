import Buttons from "../components/Buttons";
import { Container, Col, Image, Row } from "react-bootstrap";
import styles from "../styles/NotFoundPage.module.css";

export default function NotFound() {
  return (
    <Container>
      <Row style={{ height: "100vh" }} className="justify-content-center align-items-center">
        <Col className="d-flex flex-column align-items-center gap-4 gap-lg-0">
          <Image src="./images/404pages.gif" className={styles.img} />
          <a href="/">
            <Buttons>Back to Home</Buttons>
          </a>
        </Col>
      </Row>
    </Container>
  );
}
