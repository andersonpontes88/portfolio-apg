import styled, { keyframes } from "styled-components";

export const Container = styled.section`
  padding: 20px 10px;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  height: 100vh;
  width: 100%;
  position: relative;
`;

export const Title = styled.div`
  h1 {
    font-size: 40px;
    text-align: left;
    margin-bottom: 20px;
    color: #6e43cb;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 22px;
      line-height: 1.2;
    }
  }
`;

export const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: absolute;
  left: 30%;
  top: 30%;

  @media (max-width: 768px) {
    padding: 0 20px;
    top: 20%;
    left: 0;
  }
`;

export const BoxSticket = styled.div`
  display: flex;
  position: absolute;
  left: 30%;
  top: 20%;

  @media (max-width: 768px) {
    top: 10%;
    left: 5%;
  }
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 2rem;
  text-align: start;

  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 1.2;
  }

  span {
    color: ${(props) =>
      props.$isOn ? "#6e43cb" : `${({ theme }) => theme.colors.text}`};
    font-weight: ${(props) => (props.$isOn ? "500" : "normal")};
    filter: ${(props) =>
      props.$isOn ? "drop-shadow(0 0 5px #6e43cb)" : "none"};
  }
`;

export const Skills = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.secondary};
  background: ${({ theme }) => theme.colors.cardBackground};
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease-in-out;
  }
`;

export const ContentImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 10%;
  top: 37%;
  height: 220px;
  width: 220px;
  border-radius: 50%;
  background-color: #f1efef;
  filter: drop-shadow(0 0 5px rgb(110, 67, 203));
  filter: drop-shadow(0 0 10px rgb(110, 67, 203));

  @media (max-width: 768px) {
    height: 130px;
    width: 130px;
    top: 60%;
    left: 20%;
  }
`;

export const AvatarImg = styled.img`
  width: 220px;
  margin-left: 35px;
  margin-top: 20px;
  filter: drop-shadow(0 0 5px #6e43cb);
  filter: grayscale(40%);

  @media (max-width: 768px) {
    width: 130px;
    margin-left: 10px;
    margin-top: 10px;
  }
`;

const flutuar = keyframes`
  50% {
    transform: translateY(-10%);
  }
`;

const pulsar = keyframes`
  to {
    scale: 1.4;
    opacity: 0;
  }
`;

export const ContentAnimado = styled.div`
  position: absolute;
  right: 0%;
  top: 30%;

  @media (max-width: 768px) {
    top: 85%;
    right: 10%;
  }

  button {
    position: relative;
    bottom: 200px;

    span {
      position: absolute;
      top: 20px;
      left: 20px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.interruptor};
      animation: ${pulsar} 4s infinite;
      animation-delay: calc(1s * var(--sp));
    }

    .btn-interruptor {
      width: 80px;
      z-index: 1;
    }
  }
`;

export const DevJobImg = styled.img`
  width: 300px;
  animation: ${flutuar} 2s ease-in-out infinite;
  filter: ${(props) =>
    props.$isOn
      ? "drop-shadow(0 0 10px rgba(254, 254, 254, 0.6))"
      : "grayscale(0%)"};

  @media (max-width: 768px) {
    display: none;
  }
`;
