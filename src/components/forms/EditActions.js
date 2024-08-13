import classes from "./EditActions.module.css";

const EditActions = ({ isInEdit, editFn }) => {
  return (
    <div className={classes.edit_actions}>
      {!isInEdit && (
        <button
          type="button"
          disabled={isInEdit}
          onClick={editFn}
          className={classes.edit_button}
        >
          <i className="fa-solid fa-pen"></i>
        </button>
      )}
      {isInEdit && (
        <>
          <button
            type="submit"
            disabled={!isInEdit}
            className={classes.save_button}
          >
            <i className="fa-solid fa-check"></i>
          </button>
          <button
            type="button"
            disabled={!isInEdit}
            onClick={editFn}
            className={`${classes.cancel_button} ${
              isInEdit ? classes.active : null
            }`}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </>
      )}
    </div>
  );
};

export default EditActions;
