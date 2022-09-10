import { StyledUser } from "./styles/User.styled";
import UserSVG from "./svg/UserSVG";

const User = ({ username }) => {
  return (
    <StyledUser href={`https://github.com/${username}`} target="_blank">
      <UserSVG />
      <p>@{username}</p>
    </StyledUser>
  );
};

export default User;
