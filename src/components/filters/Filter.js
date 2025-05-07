import { useState } from 'react';
import classes from './Filter.module.css';
import FilterItem from './FilterItem';
import {useTranslation} from "react-i18next";

function Filter({
  title,
  filterList,
  activeCategories,
  onSelect,
  onClear,
  byTitle,
  onTitleQuery,
}) {
  const [titleQuery, setTitleQuery] = useState('');
  const { t } = useTranslation();

  const handleTitleQueryChange = (e) => {
    setTitleQuery(e.target.value);
    onTitleQuery(titleQuery);
  };

  const handleTitleQueryClear = () => {
    onClear();
    setTitleQuery('');
  };

  return (
    <div className={classes.filter}>
      <h3>{title}</h3>
      {filterList && (
        <button className={classes.clear_filter} onClick={onClear}>
          <i className="fa-solid fa-filter-circle-xmark"></i>
        </button>
      )}
      {byTitle && (
        <button
          className={classes.clear_filter}
          onClick={handleTitleQueryClear}
        >
          <i className="fa-solid fa-filter-circle-xmark"></i>
        </button>
      )}
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
          <input
            type="text"
            placeholder={t("filtersFindByTitlePlaceholder")}
            onChange={handleTitleQueryChange}
            value={titleQuery}
          />
        </div>
      )}
    </div>
  );
}

export default Filter;
