import { Button } from "@mui/material";

import styles from "./ButtonSubmit.module.css";
import { ButtonSubmitProps } from "./constants";

const ButtonSubmit = ({
  onClick,
  content,
  disabledButton,
}: ButtonSubmitProps) => {
  return (
    <Button
      variant="contained"
      disabled={disabledButton}
      className={styles.btn_add}
      onClick={onClick}
    >
      {content}
    </Button>
  );
};

export default ButtonSubmit;
