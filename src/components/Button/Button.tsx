import "./Button.css";

interface ButtonProps {
  actionOnClick: () => void;
  text: string;
  className?: string;
}

const Button = ({
  actionOnClick,
  text,
  className,
}: ButtonProps): React.ReactElement => {
  return (
    <button
      className={`button ${className ? `button--${className}` : ""}`}
      onClick={actionOnClick}
    >
      {text}
    </button>
  );
};

export default Button;
