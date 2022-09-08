import { StyledHeader } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Flex>
          <h1>Github Search</h1>
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
