import styles from "./ImageMain.module.css";
import { ImagesProps } from "./constants";

const ImageMain = ({ src }: ImagesProps) => {
  return <img src={src} alt="product_image" className={styles.img_main} />;
};

export default ImageMain;
