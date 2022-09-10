import styled from "styled-components";
import { BounceAnimation } from "./BounceAnimation.styled";

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const Dot = styled.div`
  background-color: #3397cf;
  border-radius: 50%;
  width: 0.75rem;
  height: 0.75rem;
  margin: 0 0.25rem;

  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${({ delay }) => delay};
`;
