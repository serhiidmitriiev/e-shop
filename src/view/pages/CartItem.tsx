import { useState } from "react";

import { Box, Typography } from "@mui/material";

import ButtonColor from "../components/ButtonColor";
import ButtonCounter from "../components/ButtonCounter";
import ButtonSize from "../components/ButtonSize";
import Text from "../components/Text";
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
  size,
}: CartItemProps) => {
  const [pickedSize, setPickedSize] = useState(size);
  const [pickedColor, setPickedColor] = useState(color);
  const [quantity, setQuantity] = useState(amount);

  const handleButtonSize = (item: string) => {
    setPickedSize(item);
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
        <ButtonSize handleButtonSize={handleButtonSize} size={pickedSize} />
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
