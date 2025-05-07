import classes from './RegisterForm.module.css';
import SignInput from './SignInput';
import Button from '../layout/Button';
import GoogleButton from '../layout/GoogleButton';
import {useTranslation} from "react-i18next";

const RegisterForm = () => {
  const { t } = useTranslation();

  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <GoogleButton>{t("registerFormGoogle")}</GoogleButton>
      <p className={classes.message_between}>
        {t("registerFormMiddleMessage")}
      </p>
      <form className={classes.form} onSubmit={handleRegister}>
        <SignInput name="email" type="text" label={t("registerFormEmail")} />
        <SignInput name="password" type="password" label={t("registerFormPassword")} />
        <SignInput name="name" type="text" label={t("registerFormName")} />
        <SignInput name="birth" type="text" label={t("registerFormBirthDate")} />
        <p className={classes.agreement}>
          {`${t("registerLinkToPolicyMessage")} `}
          <a href="/terms-of-use">{`${t("registerLinkTermsOfUse")}`}</a>
          {` ${t("registerLinkAnd")} `}
          <a href="/privacy-policy">{t("registerLinkPrivacyPolicy")}</a>
          {t("registerLinkToPolicyMessage2")}
        </p>
        <div className={classes.actions}>
          <Button color="red">{t("registerButton")}</Button>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
