import { ImagesProps } from "./constants";
import styles from "./ImageMain.module.css";

const ImageMain = ({ src }: ImagesProps) => {
  return <img src={src} alt="product_image" className={styles.img_main} />;
};

export default ImageMain;
