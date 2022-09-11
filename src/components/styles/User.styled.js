import styled from "styled-components";

export const StyledUser = styled.a`
  text-decoration: none;
  display: inline-flex;
  margin: 15px 30px;
  padding: 10px 20px;
  align-items: center;
  font-weight: 500;
  color: black;
  border: 1px solid beige;
  border-radius: 8px;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.1);

  &:hover {
    border: 1px solid gray;
  }

  & > svg {
    width: 36px;
    height: 36px;
    vertical-align: middle;
    overflow: hidden;
    margin-right: 0.5em;
  }

  & > p {
    font-size: 1.2em;
  }
`;
