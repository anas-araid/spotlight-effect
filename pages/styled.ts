import styled, { css, keyframes } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background: radial-gradient(
    circle at 50% 0%,
    hsl(333.6, 60.97560975609756%, 8.03921568627451%) 10%,
    hsl(180, 60%, 1%) 50%
  );
  background-repeat: no-repeat;
`

const SpotlightBackground = styled.div<{animate: boolean}>`
  position: fixed;
  opacity: 1;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #000000;
  z-index: 999;

  animation: ${({animate}) =>
    animate &&
    css`
      ${Exit} 1s linear forwards
    `};
`

const Exit = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  98% {
    transform: scale(3);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 0;
    background: transparent;
  }
`;

export { Container, SpotlightBackground}