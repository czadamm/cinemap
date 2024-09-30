import classes from './LoginForm.module.css';
import SignInput from './SignInput';
import Button from '../layout/Button';
import GoogleButton from '../layout/GoogleButton';

const RegisterForm = () => {
  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <GoogleButton>Use Google to Sign Up</GoogleButton>
      <p className={classes.message_between}>
        Or create an account using form below:
      </p>
      <form className={classes.form} action="">
        <SignInput name="email" type="email">
          Email
        </SignInput>
        <SignInput name="password" type="password">
          Password
        </SignInput>
        <SignInput name="name" type="text">
          Name
        </SignInput>
        <SignInput name="birth" type="text">
          Date of birth
        </SignInput>
        <div className={classes.actions}>
          <Button color="red" onClick={handleRegister}>
            Create
          </Button>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
