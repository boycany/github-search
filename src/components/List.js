import { Container } from "./styles/Container.styled";
import { StyledContent } from "./styles/Content.styled";
import { Flex } from "./styles/Flex.styled";
import Card from "./Card";
import axios from "axios";
import User from "./User";
import Loading from "./Loading";
import useInfiniteScroll from "./hook/useInfiniteScroll";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GoToTop from "./GoToTop";
import ErrorPage from "./ErrorPage";

const List = (props) => {
  let { isError, setError } = props;

  let username = sessionStorage.getItem("username");
  let repos = JSON.parse(sessionStorage.getItem("repos"));
  let isEnd =
    sessionStorage.getItem("isEnd") === "true" ? true : "false" ? false : null;

  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreItems);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (username !== params.username) {
      axios
        .get(
          `https://api.github.com/users/${params.username}/repos?sort=created&page=1&per_page=10`
        )
        .then((response) => {
          // console.log("response :>> ", response);
          if (response.status === 404) {
            setError(response.data.message);
            return;
          }
          if (response.data.length < 10) {
            sessionStorage.setItem("isEnd", true);
          } else {
            sessionStorage.setItem("isEnd", false);
          }
          setError("");
          sessionStorage.setItem("username", params.username);
          sessionStorage.setItem("repos", JSON.stringify(response.data));
          sessionStorage.setItem("page", 1);
          navigate(`/users/${params.username}/repos`);
        })
        .catch((err) => {
          setError(err.response.data.message);
          sessionStorage.setItem("username", params.username);
          sessionStorage.removeItem("repos");
          sessionStorage.removeItem("isEnd");
          sessionStorage.removeItem("page");
          navigate(`/users/${params.username}/repos`);
        });
    }
  });

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
                  username={username}
                  description={description}
                  created_at={created_at}
                  language={language}
                  repoName={name}
                  star={stargazers_count}
                  url={html_url}
                  key={id}
                />
              );
            })}
          {isError && <ErrorPage word={`錯誤：${isError}`} styled={true} />}
          {repos && repos.length === 0 && !isError && (
            <ErrorPage
              word={`This user doesn't have any public repositories yet.`}
              styled={true}
            />
          )}
          {isFetching && !isEnd && <Loading />}
        </Flex>
      </StyledContent>
      <GoToTop />
    </Container>
  );
};

export default List;
