import { StyledCard } from "./styles/Card.styled";

const Card = (props) => {
  const { name, url, star } = props;
  return (
    <StyledCard>
      <a href={url} target="_blank" rel="noreferrer">
        <h1>{name}</h1>
      </a>
      <p>stargazers count: {star}</p>
    </StyledCard>
  );
};

export default Card;
