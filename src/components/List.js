import { Container } from "./styles/Container.styled";
import { StyledContent } from "./styles/Content.styled";
import { Flex } from "./styles/Flex.styled";
import Card from "./Card";
import axios from "axios";
import User from "./User";
import Loading from "./Loading";
import useInfiniteScroll from "./hook/useInfiniteScroll";

const List = (props) => {
  let { isError } = props;

  const username = sessionStorage.getItem("username");
  let repos = JSON.parse(sessionStorage.getItem("repos"));
  let isEnd =
    sessionStorage.getItem("isEnd") === "true" ? true : "false" ? false : null;

  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreItems);

  function fetchMoreItems() {
    if (isEnd) {
      setIsFetching(false);
      return;
    }

    repos = JSON.parse(sessionStorage.getItem("repos"));
    let newPage = Number(sessionStorage.getItem("page")) + 1;

    axios
      .get(
        `https://api.github.com/users/${username}/repos?sort=created&page=${newPage}&per_page=10`
      )
      .then((response) => {
        // console.log("response", response);
        if (response.data.length === 0) {
          sessionStorage.setItem("isEnd", true);
          setIsFetching(false);
          return;
        }
        if (response.data.length < 10) {
          sessionStorage.setItem("isEnd", true);
        }
        repos = repos.concat(response.data);
        sessionStorage.setItem("repos", JSON.stringify(repos));
        sessionStorage.setItem("page", newPage.toString());
        setIsFetching(false);
      })
      .catch((err) => {
        setIsFetching(false);
        console.log("err :>> ", err);
      });
  }

  return (
    <Container>
      <StyledContent>
        <User username={username} />
      </StyledContent>
      <StyledContent>
        <Flex>
          {repos &&
            repos.map((repo) => {
              const {
                name,
                stargazers_count,
                html_url,
                id,
                language,
                created_at,
                description,
              } = repo;
              return (
                <Card
                  description={description}
                  created_at={created_at}
                  language={language}
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
          {isFetching && !isEnd && <Loading />}
        </Flex>
      </StyledContent>
    </Container>
  );
};

export default List;
