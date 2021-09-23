import Link from "next/link";
import { ButtonStyled } from "./ButtonStyles";

interface ButtonProps {
  href?: string;
  text: string;
  onClick?: (e: any) => void;
}

const Button = ({ href, text, onClick }: ButtonProps) => {
  const renderButton = () => (
    <ButtonStyled onClick={onClick}>{text}</ButtonStyled>
  );
  return href ? <Link href={href}>{renderButton()}</Link> : renderButton();
};

export default Button;
