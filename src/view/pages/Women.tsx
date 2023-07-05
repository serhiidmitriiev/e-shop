import { useSelector } from "react-redux";

import { Box } from "@mui/material";

import { selectWomenProducts } from "../../store/selectors/productSelectors";
import Card from "../components/Card";
import Header from "../components/Header";
import styles from "./Main.module.css";

const Women = () => {
  const products = useSelector(selectWomenProducts);

  return (
    <div>
      <Header />
      <Box className={styles.container}>
        {products?.map((item: any) => (
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

export default Women;
