import styled from "styled-components";

export const Title = styled.h1`
  margin: 5px 0;
  color: ${({ color }) => color || "white"};

  @media (max-width: 300px) {
    font-size: 25px;
    margin: 10px 0;
  }
`;
