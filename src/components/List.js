import { Container } from "./styles/Container.styled";
import { StyledContent } from "./styles/Content.styled";
import { Flex } from "./styles/Flex.styled";
import Card from "./Card";

const List = (props) => {
  const { repos, isError } = props;

  console.log("repos :>> ", repos);
  console.log("isError :>> ", isError);

  return (
    <Container>
      <StyledContent>
        <Flex>
          {repos &&
            repos.map((repo) => {
              const { name, stargazers_count, html_url, id } = repo;
              return (
                <Card
                  name={name}
                  star={stargazers_count}
                  url={html_url}
                  key={id}
                />
              );
            })}
          {isError && <h1>錯誤：{isError}</h1>}
          {repos && repos.length === 0 && !isError && (
            <h1>This user doesn't have any public repositories yet.</h1>
          )}
        </Flex>
      </StyledContent>
    </Container>
  );
};

export default List;
