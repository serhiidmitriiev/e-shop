export let LINKS: Array<string>;
LINKS = ["HOME", "WOMEN", "MEN", "KIDS"];

export let SIZES: Array<string>;
SIZES = ["XS", "S", "M", "L"];

export const CHARACTERISTICS: {
  size: string;
  color: string;
  price: string;
  quantity: string;
} = {
  size: "SIZE:",
  color: "COLOR:",
  price: "PRICE:",
  quantity: "QUANTITY:",
};

export const BUTTONTEXT: {
  add: string;
  order: string;
} = {
  add: "add to cart",
  order: "order",
};

export let BUTTONBACK: string;
BUTTONBACK = "Back";

export let COLORS: Array<{
  background: string;
  width: string;
  height: string;
  id: string;
}> = Array(
  { id: "green", background: "#0f6450", width: "32px", height: "32px" },
  { id: "black", background: "#2b2b2b", width: "32px", height: "32px" },
  { id: "gray", background: "#d3d2d5", width: "32px", height: "32px" }
);

export const URL: string = "https://fakestoreapi.com/products";

interface Rating {
  count: number;
  rate: number;
}

export interface Products {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: Rating;
  title: string;
}

export interface UserProducts extends Products {
  size: string;
  color: string;
  amount: number;
}

export interface ProductsObject {
  user: Products;
  products: Products[];
  status: string;
}

export type CardProps = Omit<Products, "category" | "description" | "rating">;

export interface ButtonSizeProps {
  size: string;
}

export interface ButtonSizeFnProps {
  handleButtonSize: Function;
  size?: string;
}
export interface ButtonColorProps {
  color?: string;
  handleButtonColor: Function;
}
export interface ButtonQuantityProps {
  handleButtonQuantity: Function;
  amount: number;
}

export interface TextProps {
  content: string | number;
  className?: string;
}
export interface CartItemProps {
  id: number;
  title: string;
  price: number;
  image: string;
  amount: number;
  color: string;
  size: string;
}

export interface ImagesProps {
  src: string;
}

export interface PopupProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}
