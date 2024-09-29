import classes from "./SettingsSelect.module.css";

const SettingsSelect = ({ id, label, options }) => {
  return (
    <div className={classes.input_group}>
      <label htmlFor={id}>{label}</label>
      <select id={id}>
        {options?.map((option) => (
          <option key={`${id}_${option}`}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default SettingsSelect;
