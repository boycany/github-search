import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import GlobalStyles from "./components/styles/Global";
import List from "./pages//List";
import Search from "./pages//Search";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import RepoDetail from "./pages//RepoDetail";
import ErrorPage from "./pages/ErrorPage";

const theme = {
  colors: {
    header: "#006aa6",
    body: "#00324e",
    content: "#fff",
  },
};

function App() {
  const [isError, setError] = useState("");

  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route path="/" element={<Search setError={setError} />} />
          <Route
            path={`/users/:username/repos`}
            element={<List isError={isError} setError={setError} />}
          />
          <Route
            path={`/users/:username/repos/:repo`}
            element={<RepoDetail isError={isError} setError={setError} />}
          />
          <Route
            path="*"
            element={<ErrorPage word={"Page not found."} unstyled={true} />}
          />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
