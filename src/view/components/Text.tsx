import { Typography } from "@mui/material";
import { TextProps } from "./constants";
import styles from "./Text.module.css";

const Text = ({ content }: TextProps) => {
  return (
    <Typography align="left" className={styles.text}>
      {content}
    </Typography>
  );
};

export default Text;
