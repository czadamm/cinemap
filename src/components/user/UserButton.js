import UserAvatar from "./UserAvatar";
import classes from "./UserButton.module.css";

const UserButton = ({ toggleFn }) => {
  return (
    <button className={classes.user_menu_item} onClick={toggleFn}>
      <span className={classes.name}>Adam</span>
      <div className={classes.avatar}>
        <UserAvatar />
      </div>
    </button>
  );
};

export default UserButton;
