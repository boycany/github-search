import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  transform: ${({ translateX }) => translateX || "none"};

  @media (max-width: 576px) {
    transform: none;
  }
`;
