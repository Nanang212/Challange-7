import { useState } from "react";
import { FiChevronUp } from "react-icons/fi";
import PropTypes from "prop-types";
import styles from "../styles/SelectInput.module.css";

export default function SelectInput({ value, setValue, title, width, options, icon, suffix = "" }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSelect = () => setIsOpen(!isOpen);

  const optionClicked = (value) => {
    setValue(value);
    toggleSelect();
  };

  const Display = () => {
    return (
      <>
        {value ? (
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ margin: 0 }}>{value}</p>
            <p style={{ margin: 0 }}>{isOpen ? <FiChevronUp className={styles.option__icon} /> : suffix}</p>
          </div>
        ) : (
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ margin: 0 }}>{title}</p>
            {isOpen ? <FiChevronUp className={styles.option__icon} /> : icon}
          </div>
        )}
      </>
    );
  };
  return (
    <div className={styles.option__container}>
      <div
        style={{
          width: `${width}px`,
          border: isOpen ? "1px solid #5cb85f" : "1px solid #d0d0d0",
        }}
        className={styles.option__header}
        onClick={toggleSelect}
      >
        {<Display />}
      </div>
      {isOpen && (
        <div style={{ width: `${width}px` }} className={styles.option__list__container}>
          <div className={styles.option__list}>
            {options &&
              options.map((option, index) => (
                <div className={styles.option__item} onClick={() => optionClicked(option)} key={index}>
                  <p>{option}</p> <p>{suffix}</p>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

SelectInput.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
  width: PropTypes.number,
  suffix: PropTypes.string,
  icon: PropTypes.node,
  options: PropTypes.array,
  title: PropTypes.string,
};
