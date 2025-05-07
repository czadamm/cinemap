import { useState } from 'react';
import Filter from './Filter';
import classes from './Filters.module.css';
import {useTranslation} from "react-i18next";

function Filters(props) {
  const [active, setActive] = useState(false);
  const { t } = useTranslation();

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
        {t("filtersTitle")}
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
          title={t("filtersCategories")}
        />
        <Filter
          byTitle
          title={t("filtersFindByTitle")}
          onTitleQuery={props.onTitleQuery}
          onClear={props.onTitleClear}
          titleQuery={props.titleQuery}
        />
      </div>
    </section>
  );
}

export default Filters;
