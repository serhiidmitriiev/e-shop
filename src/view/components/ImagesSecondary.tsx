import { Box } from "@mui/material";
import { ImagesProps } from "./constants";
import styles from "./ImagesSecondary.module.css";

const ImagesSecondary = ({ src }: ImagesProps) => {
  return (
    <Box className={styles.container_img}>
      <img src={src} alt="1image" className={styles.img_secondary} />
      <img src={src} alt="2image" className={styles.img_secondary} />
      <img src={src} alt="3image" className={styles.img_secondary} />
    </Box>
  );
};

export default ImagesSecondary;
