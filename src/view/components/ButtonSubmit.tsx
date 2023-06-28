import React from "react";
import { Button } from "@mui/material";
import { BUTTONTEXT } from "./constants";
import styles from "./ButtonSubmit.module.css";

const ButtonSubmit = ({ onClick }: any) => {
  return (
    <Button variant="contained" className={styles.btn_add} onClick={onClick}>
      {BUTTONTEXT}
    </Button>
  );
};

export default ButtonSubmit;
