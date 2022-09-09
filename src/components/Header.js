import { StyledHeader } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import HomeSVG from "./svg/HomeSVG";
import { Title } from "./styles/Title.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Flex>
          <HomeSVG />
          <Title>Github Search</Title>
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
