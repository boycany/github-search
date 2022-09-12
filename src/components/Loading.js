import { LoadingWrapper, Dot } from "./styles/Loading.styled";

const Loading = () => {
  return (
    <LoadingWrapper>
      <Dot delay="0s" />
      <Dot delay="0.1s" />
      <Dot delay="0.2s" />
    </LoadingWrapper>
  );
};

export default Loading;
