import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import GlobalStyles from "./components/styles/Global";
import List from "./components/List";
import Search from "./components/Search";
import { useState } from "react";

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

  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Search setRepos={setRepos} setError={setError} />
        <List repos={repos} isError={isError} />
      </ThemeProvider>
    </div>
  );
}

export default App;
