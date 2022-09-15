import styled from "styled-components";

export const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  border-radius: 24px;
  border: 1px solid #5f6368;
  margin: 10px 10px;
  padding: 12px 12px;
  width: 100%;
`;

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

export const Input = styled.input`
  font-size: 18px;
  border: none;
  background: transparent;
  color: black;
  width: 100%;
  outline: none;
  margin-left: 10px;
  color: #fff;
`;
