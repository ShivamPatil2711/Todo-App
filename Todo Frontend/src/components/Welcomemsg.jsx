import styles from './Welcome.module.css';
const Welcome = ({ Items }) => {
  const msg = Items.length === 0 ? "Add your tasks!!" : "";
  return (
    <h2 className={styles.message}>{msg}</h2>
  );
};
export default Welcome;