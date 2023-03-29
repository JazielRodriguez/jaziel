import styles from "../styles/Container.module.css";
const Container: React.FC<{ children: React.ReactNode; className?: string }> = (
  props
) => {
  return (
    <div className={`${styles.container} ${props.className}`}>
      {props.children}
    </div>
  );
};
export default Container;
