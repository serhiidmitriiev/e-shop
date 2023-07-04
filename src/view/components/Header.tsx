import { Box, Badge, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { AddShoppingCart } from "@mui/icons-material";
import { LINKS } from "./constants";
import icon from "../../assets/storeIcon.svg";
import { useAppSelector } from "../../utils/hooks";
import { selectUserProductAmount } from "../../store/selectors/userProductSelector";
import styles from "./Header.module.css";

const Header = () => {
  const selectedProduct = useAppSelector(selectUserProductAmount);

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
        <Link to="/cart">
          <Badge
            badgeContent={selectedProduct.length === 0 ? "0" : selectedProduct}
            color="error"
          >
            <AddShoppingCart />
          </Badge>
        </Link>
      </IconButton>
    </Box>
  );
};

export default Header;
