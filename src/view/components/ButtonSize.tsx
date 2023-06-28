import { useState } from "react";
import { Button, Box } from "@mui/material";
import { SIZES } from "./constants";
import styles from "./ButtonSize.module.css";

const ButtonSize = ({ handleButtonSize }: any) => {
  const [activeButton, setActiveButton] = useState("");
  return (
    <Box className={styles.size_btn}>
      {SIZES.map((item) => (
        <Button
          variant="outlined"
          key={item}
          className={activeButton !== item ? "" : styles.size_btn_active}
          onClick={() => {
            setActiveButton(item);
            handleButtonSize(item);
          }}
        >
          {item}
        </Button>
      ))}
    </Box>
  );
};

export default ButtonSize;
