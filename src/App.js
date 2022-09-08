import { Container } from "./components/styles/Container.styled";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import GlobalStyles from "./components/styles/Global";
import List from "./components/List";
import Search from "./components/Search";

const theme = {
  colors: {
    header: "#006aa6",
    body: "#00324e",
    content: "#fff",
  },
};

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Search />
        <List />
      </ThemeProvider>
    </div>
  );
}

export default App;
