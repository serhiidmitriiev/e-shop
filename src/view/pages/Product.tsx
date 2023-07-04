import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { Products } from "../components/constants";
import Header from "../components/Header";
import ImageMain from "../components/ImageMain";
import ImagesSecondary from "../components/ImagesSecondary";
import ButtonBack from "../components/ButtonBack";
import ButtonCounter from "../components/ButtonCounter";
import ButtonSize from "../components/ButtonSize";
import ButtonColor from "../components/ButtonColor";
import ButtonSubmit from "../components/ButtonSubmit";
import Popup from "../components/Popup";
import Text from "../components/Text";
import {
  CHARACTERISTICS,
  BUTTONBACK,
  BUTTONTEXT,
  POPUP,
} from "../components/constants";
import { useAppDispatch } from "../../utils/hooks";
import styles from "./Product.module.css";

const Product = () => {
  const { category, productId } = useParams();
  const [product, setProduct] = useState<Products>();
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [amount, setAmount] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const [open, setOpen] = useState(false);

  const dispatch = useAppDispatch();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [category, productId]);

  const handleClose = () => {
    setOpen(false);
  };
  const handleButton = () => {
    if (size === "" || color === "" || amount === 0) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  const handleButtonSize = (item: string) => {
    setSize(item);
    handleButton();
  };

  const handleButtonColor = (item: string) => {
    setColor(item);
    handleButton();
  };

  const handleButtonQuantity = (item: number) => {
    setAmount(item);
    handleButton();
  };

  const handleSubmit = () => {
    dispatch({
      type: "userproducts/addUserProduct",
      payload: {
        category: product?.category,
        description: product?.description,
        id: product?.id,
        image: product?.image,
        price: product?.price,
        rating: product?.rating,
        title: product?.title,
        color,
        size,
        amount,
      },
    });
    setOpen(true);
    setSize("");
    setColor("");
    setAmount(0);
  };

  return (
    <Box>
      <Header />
      <ButtonBack content={BUTTONBACK} />
      {product && (
        <Box className={styles.product}>
          <ImagesSecondary src={product.image} />
          <ImageMain src={product.image} />
          <Box className={styles.product_content}>
            <Typography align="left" className={styles.text_title}>
              {product.title}
            </Typography>
            <Text content={CHARACTERISTICS.size} />
            <ButtonSize handleButtonSize={handleButtonSize} size={size} />
            <Text content={CHARACTERISTICS.color} />
            <ButtonColor handleButtonColor={handleButtonColor} color={color} />
            <Text content={CHARACTERISTICS.price} />
            <Typography align="left">{`$${product.price}`}</Typography>
            <Text content={CHARACTERISTICS.quantity} />
            <ButtonCounter
              handleButtonQuantity={handleButtonQuantity}
              amount={amount}
            />
            <ButtonSubmit
              onClick={handleSubmit}
              content={BUTTONTEXT.add}
              disabledButton={disabled}
            />
            <Popup
              open={open}
              onClose={handleClose}
              selectedValue={size}
              message={POPUP[0].message}
              link={POPUP[0].link}
            />
            <Text content={product.description} />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Product;
