import { StyledCard } from "./styles/Card.styled";

const Card = (props) => {
  const { name, url, star, created_at, language, description } = props;

  const formattedDate = created_at.slice(0, 10);

  return (
    <StyledCard>
      <a href={url} target="_blank" rel="noreferrer">
        <p>{name}</p>
      </a>
      <p>{description}</p>
      <p>
        <span>
          <img
            src="https://img.icons8.com/fluency/48/000000/star.png"
            style={{ width: "20px" }}
            alt=""
          />
          <span>{star}</span>
        </span>
        <span>
          <img
            src="https://img.icons8.com/color/48/000000/source-code.png"
            style={{ width: "20px" }}
            alt=""
          />
          <span>{language}</span>
        </span>
        <span>create at {formattedDate}</span>
      </p>
    </StyledCard>
  );
};

export default Card;
