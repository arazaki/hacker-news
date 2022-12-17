import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const loading = keyframes`
  0%,
  80%,
  100% {
    box-shadow: 0 1rem 0 -1rem;
  }
  40%{
    box-shadow: 0 1rem 0 0;
  }
`;

export const Loader = styled.div`
  color: ${({ theme }) => theme.colors.light[50]};
  font-size: 1rem;
  position: relative;
  transform: translateZ(0);
  animation-delay: -0.16s;

  top: -1rem;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  animation-fill-mode: both;
  animation: ${loading} 1.8s infinite ease-in-out;

  &::after,
  &::before {
    content: "";
    position: absolute;
    top: 0;

    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    animation-fill-mode: both;
    animation: ${loading} 1.8s infinite ease-in-out;
  }

  &::before {
    left: -2rem;
    animation-delay: -0.32s;
  }

  &::after {
    left: 2rem;
  }
`;
