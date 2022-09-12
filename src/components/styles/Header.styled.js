import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  color: white;

  & > div > div > a > svg {
    position: absolute;
    top: 8px;
    left: 10px;
    border: 0.5px solid #3397cf;
    border-radius: 5px;
    padding: 2px;
    background-color: #fff;
    cursor: pointer;
    color: teal;
  }

  @media (max-width: 1000px) {
    & > div > div > a > svg {
      left: 20px;
    }
  }
`;
