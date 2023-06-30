import { Box } from "@mui/material";
import Header from "../components/Header";
import { useAppSelector } from "../../utils/hooks";
import { selectUserProduct } from "../../store/selectors/userProductSelector";
import { BUTTONBACK, BUTTONTEXT } from "../components/constants";
import ButtonBack from "../components/ButtonBack";
import CartItem from "./CartItem";
import ButtonSubmit from "../components/ButtonSubmit";
import styles from "./Cart.module.css";

const Cart = () => {
  const data = useAppSelector(selectUserProduct);

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
          />
        ))}
        {data.length >= 1 ? (
          <ButtonSubmit content={BUTTONTEXT.order} />
        ) : (
          "Your cart is empty"
        )}
      </Box>
    </Box>
  );
};

export default Cart;
