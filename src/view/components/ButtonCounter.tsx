import { Button, Box, Typography } from "@mui/material";
import { ButtonQuantityProps } from "./constants";
import styles from "./ButtonCounter.module.css";

const ButtonCounter = ({
  handleButtonQuantity,
  amount,
}: ButtonQuantityProps) => {
  const decrease = () => {
    if (amount > 0) {
      handleButtonQuantity(amount - 1);
    }
  };
  const increase = () => {
    handleButtonQuantity(amount + 1);
  };
  return (
    <Box className={styles.btn_container}>
      <Button variant="outlined" className={styles.btn} onClick={decrease}>
        -
      </Button>
      <Typography className={styles.count}>{amount}</Typography>
      <Button variant="outlined" className={styles.btn} onClick={increase}>
        +
      </Button>
    </Box>
  );
};

export default ButtonCounter;
