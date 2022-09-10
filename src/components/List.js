import { Container } from "./styles/Container.styled";
import { StyledContent } from "./styles/Content.styled";
import { Flex } from "./styles/Flex.styled";
import Card from "./Card";
import { useState, useEffect } from "react";
import axios from "axios";
import User from "./User";
import Loading from "./Loading";

const List = (props) => {
  const { repos, setRepos, isError, username } = props;

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isFetching, setIsFetching] = useState(false);

  const handleScroll = () => {
    const { innerHeight } = window;
    const { scrollTop, offsetHeight } = document.documentElement;
    // console.log("innerHeight :>> ", innerHeight);
    // console.log("scrollTop :>> ", scrollTop);
    // console.log("offsetHeight :>> ", offsetHeight);

    if (offsetHeight - (innerHeight + scrollTop) > 0.5) return;

    setIsFetching(true);
  };

  const [nextPage, setNextPage] = useState(2);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    // console.log("nextPage:>> ", nextPage);
    // console.log("isEnd :>> ", isEnd);
    // console.log("isFetching :>> ", isFetching);

    const fetchMoreItems = () => {
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
    };

    if (!isFetching) return;
    if (isEnd) {
      setIsFetching(false);
      return;
    }
    fetchMoreItems();
  }, [isFetching, isEnd, nextPage, setRepos, username]);

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
          {isFetching && <Loading />}
        </Flex>
      </StyledContent>
    </Container>
  );
};

export default List;
