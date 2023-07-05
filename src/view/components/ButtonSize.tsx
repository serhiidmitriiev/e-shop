import { Box, Button } from "@mui/material";

import styles from "./ButtonSize.module.css";
import { SIZES } from "./constants";
import { ButtonSizeFnProps } from "./constants";

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
