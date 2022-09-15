import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Container } from "../components/styles/Container.styled";
import { StyledContent } from "../components/styles/Content.styled";
import GithubSVG from "../components/svg/GithubSVG";
import {
  StyledUserDetail,
  StyledRepoDetail,
  BackToPrev,
} from "../components/styles/RepoDetail.styled";
import ErrorPage from "./ErrorPage";

const RepoDetail = (props) => {
  const { isError, setError } = props;
  const username = sessionStorage.getItem("username");
  const repoName = sessionStorage.getItem("repoName");

  const [repoDetail, setRepoDetail] = useState(
    JSON.parse(sessionStorage.getItem("repoDetail"))
  );

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (username !== params.username || repoName !== params.repo)
      axios
        .get(`https://api.github.com/repos/${params.username}/${params.repo}`)
        .then((response) => {
          // console.log(response);
          if (response.status === 404) {
            setError(response.data.message);
            return;
          }
          setError("");
          sessionStorage.setItem("repoDetail", JSON.stringify(response.data));
          sessionStorage.setItem("repoName", params.repo);
          setRepoDetail(response.data);
        })
        .catch((err) => {
          console.log(err);
          setError(err.response.data.message);
        });
  }, [params.repo, params.username, repoName, setError, username]);

  const handleBack = () => {
    navigate(`/users/${params.username}/repos`);
  };

  return (
    <Container>
      <StyledContent>
        {!isError && (
          <>
            <BackToPrev onClick={handleBack}>X</BackToPrev>
            <StyledUserDetail>
              <div>
                <img src={repoDetail.owner.avatar_url} alt="" />
              </div>
              <a
                href={repoDetail.owner.html_url}
                rel="noreferrer"
                target="_blank"
              >
                @{repoDetail.owner.login}
              </a>
            </StyledUserDetail>
            <hr />
            <StyledRepoDetail>
              <h2>{repoDetail.full_name}</h2>
              <p>{repoDetail.description}</p>
              <div>
                <p>
                  <img
                    src="https://img.icons8.com/fluency/48/000000/star.png"
                    style={{ width: "20px" }}
                    alt=""
                  />
                  <span>{repoDetail.stargazers_count}</span>
                </p>
                <p>
                  <GithubSVG />
                  <a
                    href={repoDetail.html_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Link
                  </a>
                </p>
              </div>
            </StyledRepoDetail>
          </>
        )}
        {isError && <ErrorPage word={`404：${isError}`} />}
      </StyledContent>
    </Container>
  );
};

export default RepoDetail;
