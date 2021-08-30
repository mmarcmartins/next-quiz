import styles from "../styles/Button.module.css";
import Link from "next/link";

interface ButtonProps {
  href?: string;
  text: string;
  onClick?: (e: any) => void;
}

const Button = ({ href, text, onClick }: ButtonProps) => {
  const renderButton = () => (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
  return href ? <Link href={href}>{renderButton()}</Link> : renderButton();
};

export default Button;
