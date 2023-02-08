import style from './Button.module.css';

const Button = ({
  type = 'button',
  variant = 'primary',
  children,
  onClick,
}) => {
  return (
    <button
      className={`${style.btn} ${style[variant]}`}
      type={type}
      onClick={onClick}
      variant={variant}
    >
      {children}
    </button>
  );
};

export default Button;
