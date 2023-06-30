import { useState } from "react";
import { Box, Typography } from "@mui/material";
import Text from "../components/Text";
import ButtonSize from "../components/ButtonSize";
import ButtonColor from "../components/ButtonColor";
import ButtonCounter from "../components/ButtonCounter";
import { CHARACTERISTICS } from "../components/constants";
import { CartItemProps } from "../components/constants";
import styles from "./CartItem.module.css";

const CartItem = ({
  id,
  title,
  price,
  image,
  amount,
  color,
}: CartItemProps) => {
  const [size, setSize] = useState("");
  const [pickedColor, setPickedColor] = useState(color);
  const [quantity, setQuantity] = useState(amount);
  console.log(color);

  const handleButtonSize = (item: string) => {
    setSize(item);
  };

  const handleButtonColor = (item: string) => {
    setPickedColor(item);
  };

  const handleButtonQuantity = (item: number) => {
    setQuantity(item);
  };
  return (
    <Box className={styles.main_container} key={id}>
      <Box className={styles.info_container}>
        <Typography>{title}</Typography>
        <Text content={price} />
        <Text content={CHARACTERISTICS.size} />
        <ButtonSize handleButtonSize={handleButtonSize} />
        <Text content={CHARACTERISTICS.color} />
        <ButtonColor
          handleButtonColor={handleButtonColor}
          color={pickedColor}
        />
      </Box>
      <Box className={styles.image_container}>
        <ButtonCounter
          handleButtonQuantity={handleButtonQuantity}
          amount={quantity}
        />
        <img src={image} alt={title} className={styles.img} />
      </Box>
    </Box>
  );
};

export default CartItem;
