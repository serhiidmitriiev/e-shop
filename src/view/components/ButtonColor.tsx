import { useState } from "react";
import { Button, Box } from "@mui/material";
import { COLORS } from "./constants";
import styles from "./ButtonColor.module.css";

const ButtonColor = ({ handleButtonColor }: any) => {
  const [activeButton, setActiveButton] = useState("");

  return (
    <Box className={styles.color_btn_container}>
      {COLORS.map((item) => (
        <Button
          variant="contained"
          className={activeButton !== item.id ? "" : styles.color_btn_active}
          onClick={() => {
            setActiveButton(item.id);
            handleButtonColor(item.id);
          }}
          sx={{
            background: item.background,
            width: item.width,
            height: item.height,
          }}
          key={item.id}
        />
      ))}
    </Box>
  );
};

export default ButtonColor;
