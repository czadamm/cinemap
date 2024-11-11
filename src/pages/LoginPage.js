import { Link, useSearchParams } from 'react-router-dom';
import classes from './LoginPage.module.css';
import BgWrapper from '../components/layout/BgWrapper';
import RegisterForm from '../components/forms/RegisterForm';
import LoginForm from '../components/forms/LoginForm';

const LoginPage = () => {
  const [searchParams] = useSearchParams();
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
                  Sign-in to Your Account and keep your favourite movies in one
                  place
                </h1>
                <p>
                  No Account yet?
                  <Link className={classes.red} to="?mode=signup">
                    Create it for free
                  </Link>
                </p>
              </div>
              <div
                className={`${classes.toggle_panel} ${classes.toggle_right}`}
              >
                <h1>
                  Create a free Account and keep your favourite movies in one
                  place
                </h1>
                <p>
                  <Link className={classes.blue} to="?mode=login">
                    Sign-in
                  </Link>
                  if You already have an account.
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
