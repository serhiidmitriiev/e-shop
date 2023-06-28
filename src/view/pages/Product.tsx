import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { Products } from "../components/constants";
import Header from "../components/Header";
import ImageMain from "../components/ImageMain";
import ImagesSecondary from "../components/ImagesSecondary";
import ButtonBack from "../components/ButtonBack";
import ButtonSize from "../components/ButtonSize";
import ButtonColor from "../components/ButtonColor";
import ButtonSubmit from "../components/ButtonSubmit";
import Text from "../components/Text";
import { CHARACTERISTICS, BUTTONBACK } from "../components/constants";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { selectUserProduct } from "../../store/selectors/userProductSelector";
import styles from "./Product.module.css";

const Product = () => {
  const { category, productId } = useParams();
  const [product, setProduct] = useState<Products>();
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  const dispatch = useAppDispatch();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [category, productId]);
  // const data = useAppSelector(selectUserProduct);

  const handleButtonSize = (item: string) => {
    setSize(item);
  };

  const handleButtonColor = (item: string) => {
    setColor(item);
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
      },
    });
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
            <ButtonSize handleButtonSize={handleButtonSize} />
            <Text content={CHARACTERISTICS.color} />
            <ButtonColor handleButtonColor={handleButtonColor} />
            <Text content={CHARACTERISTICS.price} />
            <Typography align="left">{`$${product.price}`}</Typography>
            <ButtonSubmit onClick={handleSubmit} />
            <Text content={product.description} />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Product;
