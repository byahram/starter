import styled from "styled-components";
import Lottie from "react-lottie";
import Loading from "../assets/loading.json";

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Wrapper>
      <Lottie options={defaultOptions} />
    </Wrapper>
  );
};

export default Loader;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 9rem;
  height: 9rem;
`;
