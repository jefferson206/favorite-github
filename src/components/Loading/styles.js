import styled from "styled-components";

export const WrapperRuby = styled.div`
    display: ruby;
`;

export const Title = styled.h1``;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  height: 100vh;
  color: #FFF;

  .dots {
    display: flex;
    justify-content: center;
    align-items: baseline;
  }

  .dot {
    width: 12px;
    height: 12px;
    margin: 0 4px;
    background-color: #FFF;
    border-radius: 50%;
    animation: bounce 1.2s infinite ease-in-out;
  }

  .dot:nth-child(1) {
    animation-delay: 0s;
  }

  .dot:nth-child(2) {
    animation-delay: 0.2s;
  }

  .dot:nth-child(3) {
    animation-delay: 0.4s;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;
