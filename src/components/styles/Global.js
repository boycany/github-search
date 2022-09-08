import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body{
        background: ${({ theme }) => theme.colors.body};
    }
`;

export default GlobalStyles;
