import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { TextProps } from "./constants";
import styles from "./ButtonBack.module.css";

const ButtonBack = ({ content }: TextProps) => {
  let navigate = useNavigate();
  return (
    <Button
      variant="outlined"
      startIcon={<ArrowBack />}
      className={styles.btn}
      onClick={() => navigate(-1)}
    >
      {content}
    </Button>
  );
};

export default ButtonBack;
