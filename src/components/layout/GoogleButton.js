import classes from './GoogleButton.module.css';
import googleLogo from '../../assets/google.svg';

const GoogleButton = ({ children }) => {
  return (
    <div className={classes.google_actions}>
      <button className={classes.google_button}>
        <span>
          <img src={googleLogo} alt="google logo" />
        </span>
        Use Google to Sign in
      </button>
    </div>
  );
};

export default GoogleButton;
