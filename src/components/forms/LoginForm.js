import classes from './LoginForm.module.css';
import SignInput from './SignInput';
import Button from '../layout/Button';
import GoogleButton from '../layout/GoogleButton';

const LoginForm = () => {
  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <GoogleButton>Use Google to Sign In</GoogleButton>
      <p className={classes.message_between}>Or use Cinemap account:</p>
      <form className={classes.form} action="">
        <SignInput name="email" type="email">
          Email
        </SignInput>
        <SignInput name="password" type="password">
          Password
        </SignInput>
        <div className={classes.actions}>
          <Button color="blue" onClick={handleLogin}>
            Enter
          </Button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
