import classes from "./Filter.module.css";
import FilterItem from "./FilterItem";

function Filter({ title, filterList, activeCategories, onSelect, byTitle }) {
  return (
    <div className={classes.filter}>
      <h2>{title}</h2>
      <div className={classes.clear_filter}>
        <i className="fa-solid fa-filter-circle-xmark"></i>
      </div>
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
