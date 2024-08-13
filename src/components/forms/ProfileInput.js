import classes from "./ProfileInput.module.css";

const ProfileInput = ({ name, value, inEdit, children, type, error }) => {
  return (
    <div className={classes.input_group}>
      <label className={classes.label} htmlFor={name}>
        {children}
      </label>
      <input
        className={classes.input}
        id={name}
        name={name}
        type={type}
        value={value}
        disabled={!inEdit}
        required
      />
    </div>
  );
};

export default ProfileInput;
