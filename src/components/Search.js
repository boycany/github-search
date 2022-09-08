import { Container } from "./styles/Container.styled";
import { StyledContent } from "./styles/Content.styled";
import { Flex } from "./styles/Flex.styled";
import { Button } from "./styles/Button.styled";
import { Input } from "./styles/Input.styled";

const Search = () => {
  return (
    <Container>
      <StyledContent>
        <Flex translateX="translateX(28px)">
          <Input placeholder="請輸入關鍵字" />
          <Button>搜尋</Button>
        </Flex>
      </StyledContent>
    </Container>
  );
};

export default Search;
