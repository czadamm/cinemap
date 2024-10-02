import classes from './SignInput.module.css';

const SignInput = ({ label, name, error, ...props }) => {
  return (
    <div className={classes.input_group}>
      <input className={classes.input} id={name} {...props} placeholder="" />
      <label className={classes.label} htmlFor={name}>
        {label}
      </label>
      {error && (
        <div className={classes.error}>
          <p>{error}</p>
          <div>
            <i class="fa-solid fa-triangle-exclamation"></i>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignInput;
