import { CenterContainer } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { Button } from "./styles/Button.styled";
import { Input } from "./styles/Input.styled";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SearchSVG from "./svg/SearchSVG";
import { StyledSearch } from "./styles/Search.styled";

const Search = (props) => {
  const { setRepos, setError, setUsername, username } = props;
  const navigate = useNavigate();

  const handleInput = (e) => {
    setUsername(e.target.value);
  };

  const handleSearch = () => {
    setRepos(null);

    axios
      .get(
        `https://api.github.com/users/${username}/repos?sort=created&page=1&per_page=10`
      )
      .then((response) => {
        if (response.status === 404) {
          setError(response.data.message);
          return;
        }
        setError("");
        setRepos(response.data);
        navigate(`/users/${username}/repos`);
      })
      .catch((err) => {
        setError(err.response.data.message);
        navigate(`/users/${username}/repos`);
      });
  };

  return (
    <CenterContainer>
      <Flex width="400px">
        <StyledSearch>
          <SearchSVG />
          <Input onChange={handleInput} value={username} />
        </StyledSearch>
        <Button onClick={handleSearch}>Search</Button>
      </Flex>
    </CenterContainer>
  );
};

export default Search;
