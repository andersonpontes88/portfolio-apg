// cSpell: disable
import styled, { keyframes } from "styled-components";

export const Container = styled.section`
  padding: 3rem 2rem;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    padding: 10px 0;
  }
`;

export const Content = styled.div`
  width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.text};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(236, 235, 235, 0.5);
  position: absolute;
  top: 30%;

  @media (max-width: 768px) {
    width: 300px;
    top: 12%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  div {
    position: absolute;
    top: -20px;
    .text-err {
      color: #ff0000;
      font-size: 12px;
      font-weight: 500;
    }
  }
`;

export const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 5px;
  font-size: 1rem;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  outline: none;
  transition: border 0.3s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Textarea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 5px;
  font-size: 1rem;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  outline: none;
  height: 150px;
  resize: none;
  transition: border 0.3s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

// Animação do botão
const gradientAnimation = keyframes`
0%{
  background-position: 0% 50%;
}
50%{
  background-position: 100% 50%;
}
100%{
  background-position: 0% 50%;
}

`;
const flutuacaoIcone = keyframes`
  0%{
    transform: translateY(-3px) rotate(20deg);
  }
  100%{
    transform: translateY(3px) rotate(20deg);
  }
`;

export const Button = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    padding: 12px 50px;
    display: flex;
    align-items: center;
    gap: 15px;
    background: linear-gradient(
      130deg,
      rgb(49, 14, 155),
      rgb(110, 67, 203),
      rgb(244, 114, 182)
    );
    background-size: 600%;
    border-radius: 6px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4),
      3px 3px 5px rgba(255, 255, 255, 0.3) inset;

    color: #fffafa;
    font-size: 16px;
    animation: ${gradientAnimation} 5s infinite;
    animation-play-state: paused;
    overflow: hidden;

    span {
      transition: all 0.5s;
    }
    p {
      transition: all 0.5s;
      font-weight: 500;
    }

    &:hover p {
      transform: translateX(100px);
    }

    &:hover span {
      animation: ${flutuacaoIcone} 0.8s infinite alternate;
      margin-left: 38px;
      margin-right: -38px;
      animation-direction: alternate;
    }

    &:hover {
      animation-play-state: running;
    }
  }
`;

// Container para o conteúdo de informações

export const ContentInfo = styled.div`
  position: absolute;
  left: 50px;
  top: 27%;
  padding: 20px;
  min-height: 600px;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    top: 65%;
    left: 20%;
    padding: 10px;
    min-height: 200px;
    min-width: 250px;
  }

  .box-info {
    width: 500px;
    height: 300px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 768px) {
      width: 210px;
      height: 55px;
      gap: 0px;
    }

    .title-info {
      font-size: 24px;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.text};

      @media (max-width: 768px) {
        font-size: 18px;
      }
    }

    .text-info {
      font-size: 14px;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.text};
      line-height: 1.5;

      @media (max-width: 768px) {
        display: none;
      }
    }
  }
`;

const flutuar = keyframes`
  50% {
    transform: translateY(-10%);
  }
`;

export const BoxDownload = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    align-items: center;
    width: 200px;
    height: 80px;
    padding: 10px;
    gap: 5px;
  }

  h4 {
    @media (max-width: 768px) {
      text-align: center;
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 150px;
    height: 40px;
    border-radius: 6px;
    border: 2px solid #6e43cb;
    overflow: hidden;
    transition: all 0.5s ease;
    background-color: rgb(16, 3, 67);

    @media (max-width: 768px) {
      width: 100px;
      height: 30px;
    }

    p {
      font-size: 14px;
      font-weight: 500;
      color: #fffafa;
      transition: all 0.5s;

      @media (max-width: 768px) {
        font-size: 12px;
      }
    }

    span {
      font-size: 16px;
      font-weight: 500;
      color: #fffafa;
      transition: all 0.5s;

      @media (max-width: 768px) {
        font-size: 12px;
      }
    }

    &:hover p {
      transform: translateX(100px);
    }
    &:hover span {
      animation: ${flutuar} 0.8s infinite alternate;
      margin-left: 45px;
      margin-right: -45px;
      animation-direction: alternate;
      color: rgb(6, 235, 251);
    }

    &:hover {
      background-color: #8250ed;
    }
  }
`;

// Container da minha Logomarca

export const ContentLogo = styled.div`
  position: absolute;
  right: 50px;
  top: 40%;

  @media (max-width: 1024px) {
    display: none;
  }
`;
