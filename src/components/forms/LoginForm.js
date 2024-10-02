import classes from './LoginForm.module.css';
import SignInput from './SignInput';
import Button from '../layout/Button';
import GoogleButton from '../layout/GoogleButton';
import { useState } from 'react';

const LoginForm = () => {
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: '',
  });
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const handleInputChange = (identifier, value) => {
    setEnteredValues((currentValues) => ({
      ...currentValues,
      [identifier]: value,
    }));
  };

  const handleInputBlur = (identifier) => {
    setDidEdit((prevState) => ({
      ...prevState,
      [identifier]: true,
    }));
  };

  const handleInputFocus = (identifier) => {
    setDidEdit((prevState) => ({
      ...prevState,
      [identifier]: false,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
  };

  const isEmailInvalid = didEdit.email && !enteredValues.email.includes('@');

  return (
    <>
      <GoogleButton>Use Google to Sign In</GoogleButton>
      <p className={classes.message_between}>Or use Cinemap account:</p>
      <form className={classes.form} onSubmit={handleLogin}>
        <SignInput
          label="Email"
          name="email"
          type="email"
          value={enteredValues.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          onBlur={() => handleInputBlur('email')}
          onFocus={() => handleInputFocus('email')}
          error={isEmailInvalid && 'Invalid Email'}
        />
        <SignInput
          label="Password"
          name="password"
          type="password"
          value={enteredValues.password}
          onChange={(e) => handleInputChange('password', e.target.value)}
        />
        <a className={classes.forgottenPassword} href="/forgotten-password">
          Forgot password?
        </a>
        <div className={classes.actions}>
          <Button color="blue">Enter</Button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
