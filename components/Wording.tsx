import styles from "../styles/Wording.module.css";

interface WordingProps {
  text: string;
}

export default function Wording({ text }: WordingProps) {
  return (
    <div className={styles.wording}>
      <span className={styles.text}>{text}</span>
    </div>
  );
}
