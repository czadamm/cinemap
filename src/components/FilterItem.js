import classes from "./FilterItem.module.css";

function FilterItem({ category, onSelect, isActive }) {
  return (
    <li
      className={`${classes.filter_item} ${isActive && classes.active}`}
      onClick={onSelect}
    >
      {category.label}
    </li>
  );
}

export default FilterItem;
