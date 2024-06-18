import { Image } from "react-bootstrap";
import styles from "../styles/TestimonialCard.module.css";
import PropTypes from "prop-types";

export default function TestimonialCard({ image }) {
  return (
    <div
      className={`d-flex align-items-sm-center justify-content-sm-center flex-column flex-sm-row ${styles.testimonial__box} ${styles.testimonial__gap}`}
    >
      <div className={styles.testimonial__images}>
        <div className={styles.testimonial__images__size}>
          <Image src={image} alt="" srcSet="" className="img-fluid" />
        </div>
      </div>
      <div className={styles.testimonial__content}>
        <div className={`d-flex justify-content-center justify-content-sm-start ${styles.testimonial__content__pad}`}>
          <div className="d-flex mb-2">
            <Image src="./images/star.svg" className="img-fluid" />
            <Image src="./images/star.svg" className="img-fluid" />
            <Image src="./images/star.svg" className="img-fluid" />
            <Image src="./images/star.svg" className="img-fluid" />
            <Image src="./images/star.svg" className="img-fluid" />
          </div>
        </div>
        <p className={styles.testimonial__content__text}>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          <br className="d-none d-sm-block" />
          eiusmod lorem <br className="d-block d-sm-none" />
          ipsum dolor sit amet, consectetur
          <br className="d-block d-sm-none" />
          adipiscing elit,
          <br className="d-none d-sm-block" />
          sed do eiusmod lorem
          <br className="d-block d-sm-none" />
          ipsum dolor sit amet, consectetur
          <br />
          adipiscing elit, sed do eiusmod”
        </p>
        <p className={styles.testimonial__content__label}>John Dee 32, Bromo</p>
      </div>
    </div>
  );
}

TestimonialCard.propTypes = {
  image: PropTypes.string,
};
