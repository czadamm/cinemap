import classes from './LoginForm.module.css';
import SignInput from './SignInput';
import Button from '../layout/Button';
import GoogleButton from '../layout/GoogleButton';
import { useState } from 'react';
import {useTranslation} from "react-i18next";

const LoginForm = () => {
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: '',
  });
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });
  const { t } = useTranslation();

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
      <GoogleButton>{t("loginFormGoogle")}</GoogleButton>
      <p className={classes.message_between}>{t("loginFormMiddleMessage")}</p>
      <form className={classes.form} onSubmit={handleLogin}>
        <SignInput
          label={t("loginFormEmail")}
          name="email"
          type="email"
          value={enteredValues.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          onBlur={() => handleInputBlur('email')}
          onFocus={() => handleInputFocus('email')}
          error={isEmailInvalid && 'Invalid Email'}
        />
        <SignInput
          label={t("loginFormPassword")}
          name="password"
          type="password"
          value={enteredValues.password}
          onChange={(e) => handleInputChange('password', e.target.value)}
        />
        <a className={classes.forgottenPassword} href="/forgotten-password">
          {t("loginForgotButton")}
        </a>
        <div className={classes.actions}>
          <Button color="blue">{t("loginButton")}</Button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
