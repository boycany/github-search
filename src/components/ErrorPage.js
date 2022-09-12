import { Container } from "./styles/Container.styled";
import { StyledContent } from "./styles/Content.styled";

const ErrorPage = ({ word, styled }) => {
  return styled ? (
    <h2>{word}</h2>
  ) : (
    <Container>
      <StyledContent>
        <h2>{word}</h2>
      </StyledContent>
    </Container>
  );
};

export default ErrorPage;
