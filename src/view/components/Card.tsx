import React from "react";
import { Box, Typography } from "@mui/material";
import { CardProps } from "./constants";
import { reduceTitle } from "../../utils/utils";
import styles from "./Card.module.css";

const Card = ({ image, title, price }: CardProps) => {
  return (
    <Box className={styles.card}>
      <img src={image} alt="product_image" className={styles.img} />
      <Typography className={styles.title}>{reduceTitle(title)}</Typography>
      <Typography className={styles.price}>{price}</Typography>
    </Box>
  );
};

export default Card;
