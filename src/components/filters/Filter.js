import classes from "./Filter.module.css";
import FilterItem from "./FilterItem";

function Filter({
  title,
  filterList,
  activeCategories,
  onSelect,
  onClear,
  byTitle,
}) {
  return (
    <div className={classes.filter}>
      <h3>{title}</h3>
      <button className={classes.clear_filter} onClick={onClear}>
        <i className="fa-solid fa-filter-circle-xmark"></i>
      </button>
      {filterList && (
        <ul className={classes.filters_list}>
          {filterList.map((filterItem) => (
            <FilterItem
              key={filterItem.value}
              category={filterItem}
              isActive={activeCategories.includes(filterItem.value)}
              onSelect={() => onSelect(filterItem.value)}
            />
          ))}
        </ul>
      )}
      {byTitle && (
        <div className={classes.movie_title}>
          <input type="text" placeholder="Enter movie title" />
        </div>
      )}
    </div>
  );
}

export default Filter;
