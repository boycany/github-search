import { Container } from "./styles/Container.styled";
import { StyledContent } from "./styles/Content.styled";
import { Flex } from "./styles/Flex.styled";
import Card from "./Card";

const List = () => {
  return (
    <Container>
      <StyledContent>
        <Flex>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Flex>
      </StyledContent>
    </Container>
  );
};

export default List;
