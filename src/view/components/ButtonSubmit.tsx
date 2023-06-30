import { Button } from "@mui/material";
import styles from "./ButtonSubmit.module.css";

const ButtonSubmit = ({ onClick, content }: any) => {
  return (
    <Button variant="contained" className={styles.btn_add} onClick={onClick}>
      {content}
    </Button>
  );
};

export default ButtonSubmit;
