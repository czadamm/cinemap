import classes from "./UserAvatar.module.css";
import defaultImage from "../../assets/person-default.png";

const UserAvatar = ({ image }) => {
  return (
    <div className={classes.avatar_container}>
      <img src={image ? image : defaultImage} alt="user avatar" />
    </div>
  );
};

export default UserAvatar;
