import styled from "styled-components";

export const Container = styled.div`
  width: 1000px;
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;
`;

export const CenterContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;
