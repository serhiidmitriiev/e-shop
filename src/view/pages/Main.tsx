import { useEffect } from "react";
import { Link } from "react-router-dom";

import { Box } from "@mui/material";

import {
  selectProducts,
  selectStatus,
} from "../../store/selectors/productSelectors";
import { fetchProducts } from "../../store/thunks/fetchProducts";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { createUrl } from "../../utils/utils";
import Card from "../components/Card";
import Header from "../components/Header";
import Spinner from "../components/Spinner";
import { Products } from "../components/constants";
import styles from "./Main.module.css";

const Main = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const data = useAppSelector(selectProducts);
  const status = useAppSelector(selectStatus);

  return (
    <Box>
      <Header />
      {status === "loading" && <Spinner />}
      <Box className={styles.container}>
        {data?.map((item: Products) => (
          <Link
            to={`/${createUrl(item.category)}/${item.id}`}
            key={item.id}
            className={styles.link}
          >
            <Card
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default Main;
