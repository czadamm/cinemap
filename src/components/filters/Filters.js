import { useState } from 'react';
import Filter from './Filter';
import classes from './Filters.module.css';

function Filters(props) {
  const [active, setActive] = useState(false);

  function toggleFilters() {
    setActive((currState) => !currState);
  }

  return (
    <section className={classes.filters_section}>
      <h2
        onClick={toggleFilters}
        className={
          !active ? classes.toggle : `${classes.toggle} ${classes.active}`
        }
      >
        Filters
      </h2>
      <div
        className={
          !active ? classes.filters : `${classes.filters} ${classes.active}`
        }
      >
        <Filter
          filterList={props.categories}
          activeCategories={props.activeCategories}
          onSelect={props.onUpdate}
          onClear={props.onClear}
          title="Categories"
        />
        <Filter
          byTitle
          title="Find By Title"
          onTitleQuery={props.onTitleQuery}
          onClear={props.onTitleClear}
          titleQuery={props.titleQuery}
        />
      </div>
    </section>
  );
}

export default Filters;
