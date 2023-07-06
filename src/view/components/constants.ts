export const LINKS: Array<string> = ["HOME", "WOMEN", "MEN", "KIDS"];

export const SIZES: Array<string> = ["XS", "S", "M", "L"];

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

export const BUTTONBACK = "Back";

export const COLORS: Array<{
  background: string;
  width: string;
  height: string;
  id: string;
}> = [
  { id: "green", background: "#0f6450", width: "32px", height: "32px" },
  { id: "black", background: "#2b2b2b", width: "32px", height: "32px" },
  { id: "gray", background: "#d3d2d5", width: "32px", height: "32px" },
];

export const POPUP: Array<{
  message: string;
  link: string;
}> = [
  { message: "Check your cart and proceed with your order", link: "/cart" },
  { message: "Your order was successfully submited", link: "/" },
];

export const URL = "https://fakestoreapi.com/products";

type Rating = {
  count: number;
  rate: number;
};

export type Products = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: Rating;
  title: string;
};

export type UserProducts = {
  size: string;
  color: string;
  amount: number;
} & Products;

export type ProductsObject = {
  user: Products;
  products: Products[];
  status: string;
};

export type CardProps = Omit<Products, "category" | "description" | "rating">;

export type ButtonSizeProps = {
  size: string;
};

export type ButtonSizeFnProps = {
  handleButtonSize: (a: string) => void;
  size?: string;
};
export type ButtonColorProps = {
  color?: string;
  handleButtonColor: (a: string) => void;
};
export type ButtonQuantityProps = {
  handleButtonQuantity: (a: number) => void;
  amount: number;
};

export type ButtonSubmitProps = {
  onClick: () => void;
  content: string;
  disabledButton?: boolean;
};

export type TextProps = {
  content: string | number;
  className?: string;
};
export type CartItemProps = {
  id: number;
  title: string;
  price: number;
  image: string;
  amount: number;
  color: string;
  size: string;
};

export type ImagesProps = {
  src: string;
};

export type PopupProps = {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
  message: string;
  link: string;
};
