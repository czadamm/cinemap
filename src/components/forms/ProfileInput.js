import { useState } from "react";
import classes from "./ProfileInput.module.css";

const ProfileInput = ({ name, value, inEdit, children, type, error }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={classes.input_group}>
      <label className={classes.label} htmlFor={name}>
        {children}
      </label>
      <input
        className={classes.input}
        id={name}
        name={name}
        type={type}
        onChange={handleInputChange}
        value={inputValue}
        disabled={!inEdit}
        required
      />
    </div>
  );
};

export default ProfileInput;
