import classes from "./Input.module.css";

const Input = ({ name, children, type, error }) => {
  return (
    <div className={classes.input_group}>
      <input
        className={classes.input}
        id={name}
        name={name}
        type={type}
        placeholder=""
        required
      />
      <label className={classes.label} htmlFor={name}>
        {children}
      </label>
    </div>
  );
};

export default Input;
