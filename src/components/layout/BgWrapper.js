import classes from "./BgWrapper.module.css";

function BgWrapper({ double, children }) {
  return (
    <div className={double ? classes.double : classes.single}>{children}</div>
  );
}

export default BgWrapper;
