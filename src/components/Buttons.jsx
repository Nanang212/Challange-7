import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import styles from "../styles/Buttons.module.css";

export default function Buttons({ children, ...rest }) {
  return (
    <Button {...rest} className={`btn btn-success ${styles.btn}`}>
      {children}
    </Button>
  );
}

Buttons.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
};
