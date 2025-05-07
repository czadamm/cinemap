import { Link, useSearchParams } from 'react-router-dom';
import classes from './LoginPage.module.css';
import BgWrapper from '../components/layout/BgWrapper';
import RegisterForm from '../components/forms/RegisterForm';
import LoginForm from '../components/forms/LoginForm';
import {useTranslation} from "react-i18next";

const LoginPage = () => {
  const [searchParams] = useSearchParams();
  const { t } = useTranslation();
  const activeMode = searchParams.get('mode') === 'login';

  return (
    <>
      <BgWrapper />
      <div className={classes.content_wrapper}>
        <div className={`${classes.container} ${activeMode && classes.active}`}>
          <div className={`${classes.form_container} ${classes.sign_up}`}>
            <RegisterForm />
          </div>
          <div className={`${classes.form_container} ${classes.sign_in}`}>
            <LoginForm />
          </div>
          <div className={classes.toggle_container}>
            <div className={classes.toggle}>
              <div className={`${classes.toggle_panel} ${classes.toggle_left}`}>
                <h1>
                  {t("loginMessage")}
                </h1>
                <p>
                  {t("loginToRegisterMessage")}
                  <Link className={classes.red} to="?mode=signup">
                    {t("loginToRegisterLink")}
                  </Link>
                </p>
              </div>
              <div
                className={`${classes.toggle_panel} ${classes.toggle_right}`}
              >
                <h1>
                  {t("registerMessage")}
                </h1>
                <p>
                  <Link className={classes.blue} to="?mode=login">
                    {t("registerToLoginLink")}
                  </Link>
                  {t("registerToLoginMessage")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
