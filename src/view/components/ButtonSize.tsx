import { Button, Box } from "@mui/material";
import { SIZES } from "./constants";
import { ButtonSizeFnProps } from "./constants";
import styles from "./ButtonSize.module.css";

const ButtonSize = ({ handleButtonSize, size }: ButtonSizeFnProps) => {
  return (
    <Box className={styles.size_btn}>
      {SIZES.map((item) => (
        <Button
          variant="outlined"
          key={item}
          className={size !== item ? "" : styles.size_btn_active}
          onClick={() => {
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
