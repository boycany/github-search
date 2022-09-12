import styled from "styled-components";

export const StyledCard = styled.div`
  width: 100%;
  padding: 0.75rem 1.5rem;
  margin: 0.5rem 0.5rem;
  border: 1px solid #efefef;
  border-radius: 4px;

  & > p:nth-child(1) {
    font-size: 36px;
    font-weight: 600;
    cursor: pointer;
  }

  & > p > span {
    margin-right: 16px;
  }

  & > p:nth-child(2) {
    padding-top: 10px;
  }

  & > p:nth-child(3) {
    display: inline-flex;
    padding-top: 20px;

    span:nth-child(3) {
      color: grey;
    }

    span {
      display: inline-flex;

      img {
        margin-right: 8px;
      }

      span {
        margin-right: 16px;
      }
    }
  }

  @media (max-width: 576px) {
    & > p:nth-child(3) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    & > p:nth-child(1) {
      font-size: 24px;
    }
  }
`;
