import { useSelector } from "react-redux";

import { Box } from "@mui/material";

import { selectKidsProducts } from "../../store/selectors/productSelectors";
import Card from "../components/Card";
import Header from "../components/Header";
import styles from "./Main.module.css";

const Kids = () => {
  const products = useSelector(selectKidsProducts);

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

export default Kids;
