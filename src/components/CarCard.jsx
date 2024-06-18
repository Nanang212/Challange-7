import { Card, Button, Image } from "react-bootstrap";
import PropTypes from "prop-types";
import styles from "../styles/CarCard.module.css";
import { rupiahFormat } from "../utils/rupiahFormat";

export default function CarCard({
  image,
  manufacture,
  model,
  rentPerDay,
  description,
  available,
  transmission,
  year,
  capacity,
}) {
  return (
    <Card className={styles.card}>
      <Card.Img variant="top" src={image} alt={manufacture} className={styles.card__image} />
      <Card.Body className={styles.card__body}>
        <p className={styles.card__body__model}>
          {manufacture} {model}
        </p>
        <p className={`my-3 ${styles.card__body__price}`}>Rp {rupiahFormat(rentPerDay)} / hari</p>
        <p className={`mb-4 ${styles.card__body__desc}`}>{description}</p>
        <div className="d-flex gap-3">
          <Image src="./images/users.svg" alt="" width="20" />
          <p className={styles.card__body_utils}>{capacity} Orang</p>
        </div>
        <div className="d-flex gap-3 my-3">
          <Image src="/images/settings.svg" alt="" width="20" />
          <p className={styles.card__body_utils}>{transmission}</p>
        </div>
        <div className="d-flex gap-3 mb-5">
          <Image src="/images/calendar.svg" alt="" width="20" />
          <p className={styles.card__body_utils}>Tahun {year}</p>
        </div>
        {available ? (
          <Button className={styles.card__btn}>Pilih Mobil</Button>
        ) : (
          <Button disabled className={styles.card__btn}>
            Unavailable
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

CarCard.propTypes = {
  image: PropTypes.string.isRequired,
  manufacture: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  rentPerDay: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  available: PropTypes.bool.isRequired,
  transmission: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  capacity: PropTypes.number.isRequired,
};
