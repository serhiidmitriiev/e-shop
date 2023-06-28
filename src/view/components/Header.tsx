import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { AddShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { LINKS } from "./constants";
import icon from "../../assets/storeIcon.svg";
import cart from "../../assets/cart.svg";
import styles from "./Header.module.css";

const Header = () => {
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
      <Badge>
        <AddShoppingCart />
      </Badge>
      {/* <img src={cart} alt="cart" /> */}
    </Box>
  );
};

export default Header;
