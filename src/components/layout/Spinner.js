import classes from "./Spinner.module.css";

function Spinner() {
  return (
    <div className={classes.spinner_wrapper}>
      <span className={classes.spinner}></span>
    </div>
  );
}

export default Spinner;
