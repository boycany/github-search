import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: ${({ width }) => width || "100%"};
`;
