import styled from "styled-components";

export const Button = styled.button`
  color: #fff;
  background: #3397cf;
  cursor: pointer;
  font-size: 14px;
  border-radius: 4px;
  line-height: 20px;
  padding: 6px 16px;
  font-weight: 500;
  outline: none;
  border: none;
  user-select: none;
  text-decoration: none;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: 20px;
  width: 120px;
  border: 0.5px solid transparent;

  &:hover {
    border: 0.5px solid beige;
  }
`;
