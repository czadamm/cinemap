import classes from './SignInput.module.css';

const SignInput = ({ name, children, type, error }) => {
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
      {error && (
        <div className={classes.error}>
          <p>{error.message}</p>
          <div>
            <i class="fa-solid fa-triangle-exclamation"></i>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignInput;
