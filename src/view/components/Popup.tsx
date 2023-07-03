import { useLocation } from "react-router-dom";
import { Dialog, DialogTitle, Badge, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { AddShoppingCart } from "@mui/icons-material";
import { useAppSelector } from "../../utils/hooks";
import { selectUserProductAmount } from "../../store/selectors/userProductSelector";
import { PopupProps, POPUP } from "./constants";

const Popup = ({ onClose, selectedValue, open, message, link }: PopupProps) => {
  const selectedProduct = useAppSelector(selectUserProductAmount);

  const location = useLocation();

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{message}</DialogTitle>
      <IconButton>
        <Link to={link}>
          {location.pathname !== POPUP[0].link ? (
            <Badge
              badgeContent={
                selectedProduct.length === 0 ? "0" : selectedProduct
              }
              color="error"
            >
              <AddShoppingCart />
            </Badge>
          ) : (
            ""
          )}
        </Link>
      </IconButton>
    </Dialog>
  );
};

export default Popup;
