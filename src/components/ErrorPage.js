import { Container } from "./styles/Container.styled";
import { StyledContent } from "./styles/Content.styled";

const ErrorPage = ({ word, unstyled }) => {
  return unstyled ? (
    <Container>
      <StyledContent>
        <h2>{word}</h2>
      </StyledContent>
    </Container>
  ) : (
    <h2>{word}</h2>
  );
};

export default ErrorPage;
