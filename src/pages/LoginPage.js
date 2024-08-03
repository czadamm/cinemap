import { Link } from "react-router-dom";
import Form from "../components/login/Form";
import classes from "./LoginPage.module.css";
import { useState } from "react";
import BgWrapper from "../components/layout/BgWrapper";

const LoginPage = ({ active }) => {
  const [activeMode, setActiveMode] = useState(active);

  const toggle = () => {
    setActiveMode((prevState) => !prevState);
  };

  return (
    <>
      <BgWrapper />
      <div className={classes.content_wrapper}>
        <div className={`${classes.container} ${activeMode && classes.active}`}>
          <div className={`${classes.form_container} ${classes.sign_up}`}>
            <Form signUp />
          </div>
          <div className={`${classes.form_container} ${classes.sign_in}`}>
            <Form signIn />
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
                  <Link onClick={toggle} className={classes.red} to="/sign-up">
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
                  <Link onClick={toggle} className={classes.blue} to="/sign-in">
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
