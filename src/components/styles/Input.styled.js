import styled from "styled-components";

export const Input = styled.input`
  font-size: 14px;
  padding: 8px 8px;
  background: ${({ theme }) => theme.colors.header};
  color: #fff;
  width: 300px;
  margin: 10px 10px;
  outline: none;
  border: none;
  border-radius: 5px;

  ::placeholder {
    color: #efefef;
    opacity: 1;
  }

  ::-ms-input-placeholder {
    color: #efefef;
  }
`;
