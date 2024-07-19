import { useState } from "react";
import Filter from "./Filter";
import classes from "./Filters.module.css";

function Filters(props) {
  const [active, setActive] = useState(false);

  function toggleFilters() {
    setActive((currState) => !currState);
  }

  return (
    <section className={classes.filters_section}>
      <h1
        onClick={toggleFilters}
        className={
          !active ? classes.toggle : `${classes.toggle} ${classes.active}`
        }
      >
        Filters
      </h1>
      <div
        className={
          !active ? classes.filters : `${classes.filters} ${classes.active}`
        }
      >
        <Filter
          filterList={props.categories}
          activeCategories={props.activeCategories}
          onSelect={props.onUpdate}
          title="Categories"
        />
        <Filter byTitle title="Find By Title" />
      </div>
    </section>
  );
}

export default Filters;
