import classes from "./Spinner.module.css";

function Spinner() {
  return (
    // <div className={classes.spinner_wrapper}>
    //   <span className={classes.spinner}></span>
    // </div>
    <div className={classes.loader}>
      <div className={classes.circle}>
        <div className={classes.dot}></div>
        <div className={classes.outline}></div>
      </div>
    </div>
  );
}

export default Spinner;
