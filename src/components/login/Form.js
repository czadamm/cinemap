import classes from "./Form.module.css";
import Input from "./Input";

import googleLogo from "../../assets/google.svg";
import Button from "../Button";

const Form = ({ signUp, signIn }) => {
  return (
    <>
      <div className={classes.google_actions}>
        {signIn && (
          <button className={classes.google_button}>
            Use Google to Sign in
            <span>
              <img src={googleLogo} alt="google logo" />
            </span>
          </button>
        )}
        {signUp && (
          <button className={classes.google_button}>
            Use Google to Sign up
            <span>
              <img src={googleLogo} alt="google logo" />
            </span>
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
        <Input name="email" type="email">
          Email
        </Input>
        <Input name="password" type="password">
          Password
        </Input>

        {signUp && (
          <Input name="name" type="text">
            Name
          </Input>
        )}
        {signUp && (
          <Input name="birth" type="text">
            Date of birth
          </Input>
        )}
        <div className={classes.actions}>
          {signIn && <Button color="blue">Enter</Button>}
          {signUp && <Button color="red">Create</Button>}
        </div>
      </form>
    </>
  );
};

export default Form;
