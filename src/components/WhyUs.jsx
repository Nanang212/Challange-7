import { Row, Col, Card, Image, Container } from "react-bootstrap";
import styles from "../styles/WhyUs.module.css";

export default function WhyUs() {
  return (
    <Container id="whyus" className={styles.whyus}>
      <h2>Why Us?</h2>
      <p>Mengapa harus pilih Binar Car Rental?</p>
      <Row className="gy-5 gy-lg-0 gx-lg-5 gx-0">
        <Col sm={3}>
          <Card className={styles.whyus__card}>
            <Image src="./images/ic_check.svg" alt="Check Icon" srcSet="" width="32" />
            <h5 className="my-sm-4">Mobil Lengkap</h5>
            <p>
              Tersedia banyak pilihan mobil,
              <br className="d-none d-sm-block" /> kondisi masih baru, bersih dan
              <br className="d-none d-sm-block" />
              terawat
            </p>
          </Card>
        </Col>

        <Col sm={3}>
          <Card className={styles.whyus__card}>
            <Image src="./images/ic_tag.svg" alt="Tag Icon" srcSet="" width="32" />
            <h5 className="my-sm-4">Harga Murah</h5>
            <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
          </Card>
        </Col>
        <Col sm={3}>
          <Card className={styles.whyus__card}>
            <Image src="./images/ic_blue_check.svg" alt="Blue Check Icon" srcSet="" width="32" />
            <h5 className="my-sm-4">Layanan 24 Jam</h5>
            <p>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
          </Card>
        </Col>

        <Col sm={3}>
          <Card className={styles.whyus__card}>
            <Image src="./images/ic_medal.svg" alt="Medal icon" srcSet="" width="32" />
            <h5 className="my-sm-4">Sopir Profesional</h5>
            <p>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
