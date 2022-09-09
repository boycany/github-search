import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import GlobalStyles from "./components/styles/Global";
import List from "./components/List";
import Search from "./components/Search";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

const theme = {
  colors: {
    header: "#006aa6",
    body: "#00324e",
    content: "#fff",
  },
};

function App() {
  const [repos, setRepos] = useState(null);
  const [isError, setError] = useState("");
  const [username, setUsername] = useState("");

  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Search
                setRepos={setRepos}
                setError={setError}
                username={username}
                setUsername={setUsername}
              />
            }
          />
          <Route
            path={`/users/${username}/repos`}
            element={<List repos={repos} isError={isError} />}
          />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
