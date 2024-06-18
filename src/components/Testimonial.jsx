import { Container } from "react-bootstrap";
import TestimonialCard from "./TestimonialCard";
import OwlCarousel from "react-owl-carousel";
import "../styles/owl_carousel.css"; //custom owl carousel style
import styles from "../styles/Testimonial.module.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Testimonial() {
  return (
    <>
      <Container id="testimonial" className={styles.testimonial}>
        <h1>Testimonial</h1>
        <p>Berbagai review positif dari para pelanggan kami</p>
      </Container>
      <OwlCarousel
        className="owl-theme"
        margin={32}
        stagePadding={16}
        loop
        dots={false}
        center
        autoPlay
        autoplayHoverPause
        nav
        navText={[
          "<img src='./images/Left_button.svg' class=carousel-item--btn>",
          "<img src='./images/Right_button.svg' class=carousel-item--btn>",
        ]}
        responsive={{
          0: {
            items: 1,
          },
          600: {
            items: 3,
          },
          1000: {
            items: 2,
          },
        }}
      >
        <TestimonialCard image="./images/testimonial_1.svg" />
        <TestimonialCard image="./images/testimonial_1.svg" />
        <TestimonialCard image="./images/testimonial_2.svg" />
      </OwlCarousel>
    </>
  );
}
