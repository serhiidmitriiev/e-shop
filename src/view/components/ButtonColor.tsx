import { Button, Box } from "@mui/material";
import { COLORS } from "./constants";
import { ButtonColorProps } from "./constants";
import styles from "./ButtonColor.module.css";

const ButtonColor = ({ handleButtonColor, color }: ButtonColorProps) => {
  return (
    <Box className={styles.color_btn_container}>
      {COLORS.map((item) => (
        <Button
          variant="contained"
          className={color !== item.id ? "" : styles.color_btn_active}
          onClick={() => {
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
