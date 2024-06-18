import styles from "../styles/TextInput.module.css";
import { FiUsers } from "react-icons/fi";
import Proptypes from "prop-types";

export default function TextInput({ value, setValue }) {
  return (
    <div className={styles.text__container}>
      <div className={styles.text__header}>
        <FiUsers className={styles.text__icon} />
        <input
          value={value}
          onChange={(event) => setValue(event.target.value)}
          type="number"
          name=""
          id=""
          className={styles.text}
          placeholder="Jumlah Penumpang"
        />
      </div>
    </div>
  );
}

TextInput.propTypes = {
  value: Proptypes.string,
  setValue: Proptypes.func,
};
