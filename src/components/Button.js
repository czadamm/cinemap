import classes from "./Button.module.css";

const Button = ({ color, children }) => {
  return (
    <button className={`${classes.button} ${classes[color]}`}>
      {children}
    </button>
  );
};

export default Button;
