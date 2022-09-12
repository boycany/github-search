import styled from "styled-components";

export const StyledUserDetail = styled.div`
  margin-bottom: 15px;

  div {
    margin: 0 auto 10px;
    width: 200px;
    height: 200px;
    border-radius: 99px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }

  a {
    font-size: 20px;
    color: gray;
    text-decoration: none;
  }
`;

export const StyledRepoDetail = styled.div`
  & > p,
  h2 {
    margin-top: 10px;
  }

  & > p {
    padding: 0 20px;
  }

  & > div {
    display: inline-flex;
    align-items: center;

    p {
      display: inline-flex;
      align-items: center;
      margin: 15px;
      * {
        margin: 3px;
      }
    }

    p:nth-child(2) > svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const BackToPrev = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 5px 12px 0 0;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    color: gray;
  }
`;
