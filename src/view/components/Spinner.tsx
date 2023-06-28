import styles from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={styles.spinner_container}>
      <div className={styles.loading_spinner}></div>
    </div>
  );
};

export default Spinner;
