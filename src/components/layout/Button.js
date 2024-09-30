import classes from './Button.module.css';

const Button = ({ color, onClick, children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onClick();
  };

  return (
    <button
      className={`${classes.button} ${classes[color]}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
