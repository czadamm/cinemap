import classes from "./Filter.module.css";

function Filter({ title, filterList, byTitle }) {
  return (
    <div className={classes.filter}>
      <h2>{title}</h2>
      <div className={classes.clear_filter}>
        <i className="fa-solid fa-filter-circle-xmark"></i>
      </div>
      {filterList && (
        <ul className={classes.filters_list}>
          {filterList.map((filter) => (
            <li key={filter.value}>{filter.label}</li>
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
