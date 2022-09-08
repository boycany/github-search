import { Container } from "./styles/Container.styled";
import { StyledContent } from "./styles/Content.styled";
import { Flex } from "./styles/Flex.styled";
import { Button } from "./styles/Button.styled";
import { Input } from "./styles/Input.styled";
import { useState } from "react";
import axios from "axios";

const Search = (props) => {
  const { setRepos, setError } = props;
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = () => {
    setRepos(null);

    axios
      .get(`https://api.github.com/users/${input}/repos?page=1&per_page=10`)
      .then((response) => {
        if (response.status === 404) {
          setError(response.data.message);
          console.log("response.data.message", response.data.message);
          return;
        }
        console.log(response);
        setError("");
        setRepos(response.data);
      })
      .catch((err) => {
        setError(err.response.data.message);
        console.log("ERR:>>", err.response);
      });
  };

  return (
    <Container>
      <StyledContent>
        <Flex translateX="translateX(40px)">
          <Input placeholder="Please enter username" onChange={handleInput} />
          <Button onClick={handleSearch}>Search</Button>
        </Flex>
      </StyledContent>
    </Container>
  );
};

export default Search;
