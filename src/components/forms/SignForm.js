import classes from "./SignForm.module.css";
import SignInput from "./SignInput";

import googleLogo from "../../assets/google.svg";
import Button from "../layout/Button";

const SignForm = ({ signUp, signIn }) => {
  return (
    <>
      <div className={classes.google_actions}>
        {signIn && (
          <button className={classes.google_button}>
            <span>
              <img src={googleLogo} alt="google logo" />
            </span>
            Use Google to Sign in
          </button>
        )}
        {signUp && (
          <button className={classes.google_button}>
            <span>
              <img src={googleLogo} alt="google logo" />
            </span>
            Use Google to Sign up
          </button>
        )}
      </div>
      {signUp && (
        <p className={classes.message_between}>
          Or create an account using form below:
        </p>
      )}
      {signIn && (
        <p className={classes.message_between}>Or use Cinemap account:</p>
      )}
      <form className={classes.form} action="">
        <SignInput name="email" type="email">
          Email
        </SignInput>
        <SignInput name="password" type="password">
          Password
        </SignInput>
        {signUp && (
          <SignInput name="name" type="text">
            Name
          </SignInput>
        )}
        {signUp && (
          <SignInput name="birth" type="text">
            Date of birth
          </SignInput>
        )}
        <div className={classes.actions}>
          {signIn && <Button color="blue">Enter</Button>}
          {signUp && <Button color="red">Create</Button>}
        </div>
      </form>
    </>
  );
};

export default SignForm;
