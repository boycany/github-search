import styled from "styled-components";

export const StyledGoToTop = styled.div`
  button {
    position: fixed;
    bottom: 20px;
    right: 30px;
    z-index: 99;
    cursor: pointer;
    font-size: 18px;
    background-color: inherit;
    border: solid white;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 10px;
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
    transition: all 1.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  button:hover {
    bottom: 30px;
  }

  @media (max-width: 1000px) {
    button {
      border: solid teal;
      border-width: 0 3px 3px 0;
    }
  }
`;
