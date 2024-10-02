import classes from './RegisterForm.module.css';
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
      <form className={classes.form} onSubmit={handleRegister}>
        <SignInput name="email" label="Email" />
        <SignInput name="password" type="password" label="Password" />
        <SignInput name="name" type="text" label="Name" />
        <SignInput name="birth" type="text" label="Date of birth" />
        <p className={classes.agreement}>
          By clicking Create, you agree to our{' '}
          <a href="/terms-of-use">Terms of Use</a> and{' '}
          <a href="/privacy-policy">Privacy Policy</a>.
        </p>
        <div className={classes.actions}>
          <Button color="red">Create</Button>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
