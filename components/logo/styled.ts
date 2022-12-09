import styled, { css } from "styled-components";

export const Text = styled.svg<{animate: boolean}>`
  height: 90px;
  -webkit-mask-image: linear-gradient(
    60deg,
    black 25%,
    rgba(0, 0, 0, 0.2) 50%,
    black 75%
  );
  -webkit-mask-size: 400%;
  -webkit-mask-position: 100%;

  ${({animate}) =>
    animate &&
    css`
      transition: mask-position 1s ease, -webkit-mask-position 1s ease;
      transition-delay: 1s;
      -webkit-mask-position: 0%;
    `};
`