import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { AddShoppingCart } from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";
import { LINKS } from "./constants";
import { UserProducts } from "./constants";
import icon from "../../assets/storeIcon.svg";
import { useAppSelector } from "../../utils/hooks";
import { selectUserProduct } from "../../store/selectors/userProductSelector";
// import cart from "../../assets/cart.svg";
import styles from "./Header.module.css";

const Header = () => {
  const userProduct = useAppSelector(selectUserProduct);
  console.log(userProduct);

  const getTotalItems = (item: UserProducts[]) => {
    item.reduce((acc, item) => acc + item.amount, 0);
  };

  return (
    <Box className={styles.header}>
      <Box className={styles.links}>
        {LINKS.map((link) => (
          <Link
            key={link}
            className={styles.link}
            to={`/${link.toLowerCase()}`}
          >
            {link}
          </Link>
        ))}
      </Box>
      <img src={icon} alt="storeIcon" />
      <IconButton>
        <Badge>
          <AddShoppingCart />
        </Badge>
      </IconButton>
    </Box>
  );
};

export default Header;
