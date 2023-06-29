import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import { selectMenProducts } from "../../store/selectors/productSelectors";
import Header from "../components/Header";
import Card from "../components/Card";
import styles from "./Main.module.css";

const Men = () => {
  const products = useSelector(selectMenProducts);

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

export default Men;