export let LINKS: Array<string>;
LINKS = ["HOME", "WOMEN", "MEN", "KIDS"];

export let SIZES: Array<string>;
SIZES = ["XS", "S", "M", "L"];

export const CHARACTERISTICS: {
  size: string;
  color: string;
  price: string;
} = {
  size: "SIZE",
  color: "COLOR",
  price: "PRICE",
};

export let BUTTONTEXT: string;
BUTTONTEXT = "add to cart";

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

export interface TextProps {
  content: string;
}

export interface ImagesProps {
  src: string;
}
