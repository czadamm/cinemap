import classes from "./Title.module.css";

const Title = ({ type = "h2", children }) => {
  return <h2 className={`${classes.title} ${classes[type]}`}>{children}</h2>;
};

export default Title;
