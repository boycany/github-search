import { StyledUser } from "./styles/User.styled";
import GithubSVG from "./svg/GithubSVG";

const User = ({ username }) => {
  return (
    <StyledUser href={`https://github.com/${username}`} target="_blank">
      <GithubSVG />
      <p>@{username}</p>
    </StyledUser>
  );
};

export default User;
