import { Container } from "./styles/Container.styled";
import { StyledContent } from "./styles/Content.styled";
import { Flex } from "./styles/Flex.styled";
import Card from "./Card";
import { useState } from "react";
import axios from "axios";
import User from "./User";
import Loading from "./Loading";
import useInfiniteScroll from "./hook/useInfiniteScroll";

const List = (props) => {
  const { repos, setRepos, isError, username } = props;

  const [nextPage, setNextPage] = useState(2);
  const [isEnd, setIsEnd] = useState(false);
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreItems);

  function fetchMoreItems() {
    if (isEnd) {
      setIsFetching(false);
      return;
    }
    axios
      .get(
        `https://api.github.com/users/${username}/repos?sort=created&page=${nextPage}&per_page=10`
      )
      .then((response) => {
        console.log("response", response);
        if (response.data.length === 0) {
          setIsEnd(true);
          setIsFetching(false);
          return;
        }
        setNextPage((prevPage) => prevPage + 1);
        setRepos((prevRepos) => [...prevRepos, ...response.data]);
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
