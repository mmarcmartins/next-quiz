import React from "react";
import styles from "../styles/Statics.module.css";
interface StaticsProps {
  value: number | string;
  text: string;
  backgroundColor?: string;
  fontColor?: string;
}

const Statics = ({ value, text, backgroundColor, fontColor }: StaticsProps) => {
  return (
    <div className={styles.statics}>
      <div
        className={styles.valor}
        style={{
          backgroundColor: backgroundColor ?? "#FDD60F",
          color: fontColor ?? "#333",
        }}
      >
        {value}
      </div>
      <span className={styles.text}>{text}</span>
    </div>
  );
};
export default Statics;
