import { StyledCard } from "./styles/Card.styled";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Card = (props) => {
  const { repoName, star, created_at, language, description, username } = props;

  const navigate = useNavigate();

  const formattedDate = created_at.slice(0, 10);

  const LinkToRepoDetail = () => {
    axios
      .get(`https://api.github.com/repos/${username}/${repoName}`)
      .then((response) => {
        // console.log(response);

        sessionStorage.setItem("repoDetail", JSON.stringify(response.data));
        sessionStorage.setItem("repoName", repoName);

        navigate(`/users/${username}/repos/${repoName}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <StyledCard>
      <p onClick={LinkToRepoDetail}>{repoName}</p>
      <p>{description}</p>
      <p>
        <span>
          <img
            src="https://img.icons8.com/fluency/48/000000/star.png"
            style={{ width: "20px" }}
            alt=""
          />
          <span>{star}</span>
        </span>
        <span>
          <img
            src="https://img.icons8.com/color/48/000000/source-code.png"
            style={{ width: "20px" }}
            alt=""
          />
          <span>{language}</span>
        </span>
        <span>create at {formattedDate}</span>
      </p>
    </StyledCard>
  );
};

export default Card;
