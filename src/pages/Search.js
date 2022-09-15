import { CenterContainer } from "../components/styles/Container.styled";
import { Flex } from "../components/styles/Flex.styled";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SearchSVG from "../components/svg/SearchSVG";
import {
  StyledSearch,
  Button,
  Input,
} from "../components/styles/Search.styled";
import { useState } from "react";

const Search = (props) => {
  const { setError } = props;
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleInput = (e) => {
    setUsername(e.target.value);
  };

  const handleSearch = () => {
    axios
      .get(
        `https://api.github.com/users/${username}/repos?sort=created&page=1&per_page=10`
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
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("repos", JSON.stringify(response.data));
        sessionStorage.setItem("page", 1);
        navigate(`/users/${username}/repos`);
      })
      .catch((err) => {
        setError(err.response.data.message);
        sessionStorage.setItem("username", username);
        sessionStorage.removeItem("repos");
        sessionStorage.removeItem("isEnd");
        sessionStorage.removeItem("page");
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
