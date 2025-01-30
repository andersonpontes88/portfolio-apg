import styled, { keyframes } from "styled-components";

export const Container = styled.section`
  background: ${({ theme }) => theme.colors.background};
  padding: 50px 20px;
  color: #f0f0f0;
  text-align: center;
  min-height: 100vh;
  min-width: 100vw;
  position: relative;
`;

export const BoxSticket = styled.div`
  position: absolute;
  top: 30%;
  left: 45px;

  @media (max-width: 700px) {
    top: 10%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  width: 60%;
  padding: 20px;
  position: absolute;
  top: 40%;

  @media (max-width: 700px) {
    width: 100%;
    top: 15%;
  }
`;

export const ContentTitle = styled.div`
  width: 100%;
  padding: 10px;

  @media (max-width: 700px) {
    max-width: 200px;
    padding: 0 10px;
  }

  h5 {
    text-align: start;
    line-height: 2;
    font-weight: 600;
    font-size: 20px;
    color: #6e43cb;

    @media (max-width: 700px) {
      font-size: 14px;
    }
  }

  p {
    font-size: 16px;
    text-align: start;
    color: ${({ theme }) => theme.colors.text};

    @media (max-width: 700px) {
      font-size: 12px;
    }
  }
`;

export const ContentSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px 10px;
  padding: 10px;

  @media (max-width: 700px) {
  }
`;

export const SkillsGrid = styled.div``;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SkillCard = styled.div`
  display: flex;
  height: 50px;
  width: 200px;
  padding: 5px;
  border-radius: 10px;
  border: 1px solid rgba(80, 80, 80, 0.56);
  gap: 5px;
  transition: all 0.3s;
  background-color: ${({ theme }) => theme.colors.background};

  &:hover {
    border: 1px solid rgba(176, 55, 246, 0.5);
    transform: scale(1.05);
    background-color: rgba(176, 55, 246, 0.1);
    box-shadow: 0px 0px 5px 0px ${({ theme }) => theme.colors.text};
  }

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    width: 60px;
    height: 80px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .skill-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    border-radius: 10px;
    border: 1px solid rgba(80, 80, 80, 0.56);
    position: relative;
    background-color: ${({ theme }) => theme.colors.background};
    overflow: hidden;

    @media (max-width: 700px) {
    }

    &:after {
      content: "";
      position: absolute;
      width: 80px;
      height: 80px;
      background-image: conic-gradient(
        transparent,
        transparent,
        transparent,
        #6e43cb
      );
      animation: ${spin} 4s linear infinite;
      animation-delay: -2s;
      opacity: 0;
    }

    &:before {
      content: "";
      position: absolute;
      width: 80px;
      height: 80px;
      background-image: conic-gradient(transparent, transparent, #6e43cb);
      animation: ${spin} 4s linear infinite;
      opacity: 0;
    }

    .animate-border {
      position: absolute;
      inset: 1px;
      background-color: ${({ theme }) => theme.colors.background};
      border-radius: 8px;
      z-index: 1;
    }

    .icons {
      font-size: 18px;
      z-index: 3;
    }
  }

  &:hover .skill-icon {
    &:after,
    &:before {
      opacity: 1;
    }
  }

  &:hover .skill-icon .animate-border {
    background-color: ${({ theme }) => theme.colors.background};
  }

  &:hover .skill-icon {
    border: 1px solid rgba(176, 55, 246, 0.5);
    transform: scale(1.05);
    background-color: rgba(176, 55, 246, 0.1);
    box-shadow: 0px 0px 5px 0px;
  }

  .skill-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    color: ${({ theme }) => theme.colors.text};

    @media (max-width: 700px) {
      align-items: center;
      padding: 5px;
    }

    .skill-name {
      font-size: 8px;
      font-weight: 600;

      @media (max-width: 700px) {
        font-size: 8px;
      }
    }

    .description {
      font-size: 10px;
      font-weight: 400;

      @media (max-width: 700px) {
        display: none;
      }
    }
  }
`;

export const ContentIllustration = styled.div`
  position: absolute;
  top: 50%;
  left: 60%;
  width: 40%;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    display: none;
  }

  img {
    width: 300px;
  }
`;
