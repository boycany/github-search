import styled from "styled-components";

export const StyledUser = styled.a`
  text-decoration: none;
  display: inline-flex;
  margin: 15px 30px;
  padding: 10px 20px;
  align-items: center;
  /* border-color: #3397cf; */
  /* color: #fa5f55; */
  color: teal;
  border: 1px solid #3397cf;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #3397cf;
    color: white;
  }

  & > img {
    width: 36px;
    height: 36px;
  }

  & > p {
    font-size: 1.2em;
  }
`;
