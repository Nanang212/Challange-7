import styles from "../styles/DateInput.module.css";
import PropTypes from "prop-types";

export default function DateInput({ value, setValue }) {
  return (
    <div className={styles.date__container}>
      <div className={styles.date__header}>
        <input
          value={value}
          onChange={(event) => setValue(event.target.value)}
          type="date"
          name=""
          id=""
          className={styles.date}
        />
      </div>
    </div>
  );
}

DateInput.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
};
