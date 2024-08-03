import classes from "./BgWrapper.module.css";

const BgWrapper = ({ children }) => {
  return (
    <div className={classes.background}>
      <div className={classes.background_blur}>{children}</div>
    </div>
  );
};

export default BgWrapper;
