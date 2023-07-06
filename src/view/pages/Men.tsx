import { useSelector } from "react-redux";

import { Box } from "@mui/material";

import { selectMenProducts } from "../../store/selectors/productSelectors";
import Card from "../components/Card";
import Header from "../components/Header";
import { Products } from "../components/constants";
import styles from "./Main.module.css";

const Men = () => {
  const products = useSelector(selectMenProducts);

  return (
    <div>
      <Header />
      <Box className={styles.container}>
        {products?.map((item: Products) => (
          <Card
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
          />
        ))}
      </Box>
    </div>
  );
};

export default Men;
