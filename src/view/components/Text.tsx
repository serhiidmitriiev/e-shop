import { Typography } from "@mui/material";

import styles from "./Text.module.css";
import { TextProps } from "./constants";

const Text = ({ content }: TextProps) => {
  return (
    <Typography align="left" className={styles.text}>
      {content}
    </Typography>
  );
};

export default Text;
