import { Dialog, DialogTitle, Badge, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { AddShoppingCart } from "@mui/icons-material";
import { useAppSelector } from "../../utils/hooks";
import { selectUserProductAmount } from "../../store/selectors/userProductSelector";
import { PopupProps } from "./constants";

const Popup = ({ onClose, selectedValue, open }: PopupProps) => {
  const selectedProduct = useAppSelector(selectUserProductAmount);

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Check your cart and proceed with your order</DialogTitle>
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
    </Dialog>
  );
};

export default Popup;
