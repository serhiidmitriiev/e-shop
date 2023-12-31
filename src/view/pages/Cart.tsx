import { useEffect, useState } from "react";

import { Box } from "@mui/material";

import { selectUserProduct } from "../../store/selectors/userProductSelector";
import { useAppSelector } from "../../utils/hooks";
import ButtonBack from "../components/ButtonBack";
import ButtonSubmit from "../components/ButtonSubmit";
import Header from "../components/Header";
import Popup from "../components/Popup";
import { BUTTONBACK, BUTTONTEXT } from "../components/constants";
import { POPUP, UserProducts } from "../components/constants";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = () => {
  const [userProducts, setUserProducts] = useState<UserProducts[]>();
  const [open, setOpen] = useState(false);
  const size = "";

  useEffect(() => {
    localStorage.setItem("userProduct", JSON.stringify(userProducts));
  }, [userProducts]);
  const data = useAppSelector(selectUserProduct);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    setUserProducts(data);
    setOpen(true);
  };

  return (
    <Box>
      <Header />
      <ButtonBack content={BUTTONBACK} />
      <Box className={styles.general}>
        {data.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            amount={item.amount}
            color={item.color}
            size={item.size}
          />
        ))}
        {data.length >= 1 ? (
          <ButtonSubmit content={BUTTONTEXT.order} onClick={handleSubmit} />
        ) : (
          "Your cart is empty"
        )}
        <Popup
          open={open}
          onClose={handleClose}
          selectedValue={size}
          message={POPUP[1].message}
          link={POPUP[1].link}
        />
      </Box>
    </Box>
  );
};

export default Cart;
