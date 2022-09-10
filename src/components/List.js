import { Container } from "./styles/Container.styled";
import { StyledContent } from "./styles/Content.styled";
import { Flex } from "./styles/Flex.styled";
import Card from "./Card";
import { useState, useEffect } from "react";
import axios from "axios";

const List = (props) => {
  const { repos, setRepos, isError, username } = props;

  const [nextPage, setNextPage] = useState(2);
  const [isEnd, setIsEnd] = useState(false);

  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const fetchMoreItems = () => {
      if (isEnd) return;
      axios
        .get(
          `https://api.github.com/users/${username}/repos?sort=created&page=${nextPage}&per_page=10`
        )
        .then((response) => {
          if (response.data.length === 0) {
            setIsEnd(true);
            return;
          }
          setNextPage((prevPage) => prevPage + 1);
          setRepos((prevRepos) => [...prevRepos, ...response.data]);
          setIsFetching(false);
          console.log("response", response);
        })
        .catch((err) => {
          console.log("err :>> ", err);
        });
    };

    if (!isFetching) return;
    fetchMoreItems();
  }, [isFetching, isEnd, nextPage, setRepos, username]);

  const handleScroll = () => {
    const { innerHeight } = window;
    const { scrollTop, offsetHeight } = document.documentElement;

    if (innerHeight + scrollTop !== offsetHeight) return;

    setIsFetching(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
