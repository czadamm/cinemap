import classes from "./CreditsCrad.module.css";

const CreditsCard = ({ image, name, character, position }) => {
  return (
    <div className={classes.credits_card}>
      <div className={classes.image}>
        <img src={image} alt={name} />
      </div>

      <div className={classes.info}>
        <h3>{name}</h3>
        {character && <p>{character}</p>}
        {position && <p>{position}</p>}
      </div>
    </div>
  );
};

export default CreditsCard;
