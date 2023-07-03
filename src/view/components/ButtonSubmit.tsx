import { Button } from "@mui/material";
import styles from "./ButtonSubmit.module.css";

const ButtonSubmit = ({ onClick, content, disabledButton }: any) => {
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
