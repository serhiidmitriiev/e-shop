import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";

import styles from "./ButtonBack.module.css";
import { TextProps } from "./constants";

const ButtonBack = ({ content }: TextProps) => {
  const navigate = useNavigate();
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
