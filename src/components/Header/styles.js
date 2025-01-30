import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 2px solid #33333350;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;

  @media (max-width: 768px) {
    border-bottom: none;
  }
`;

export const ContentSunMoon = styled.div`
  button {
    width: 60px;
    height: 25px;
    background-color: #ffffff90;
    border: 2px solid #6e43cb;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.5s;
    position: relative;

    &.btn-background {
      background-color: #00000090;
      transition: all 0.5s;
    }

    span {
      position: absolute;
      top: 2px;
      left: 0;
      padding-left: 2px;
      transition: all 0.5s;
      color: #ffffff;
      font-size: 18px;

      &.position-sum-moon {
        left: 35px;
        transition: all 0.5s;
        color: #000000;
      }
    }

    @media (max-width: 768px) {
      width: 50px;
      height: 20px;

      span {
        font-size: 14px;

        &.position-sum-moon {
          left: 25px;
          transition: all 0.5s;
        }
      }
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;

  .hidden-items {
    display: flex;
    gap: 1.5rem;
    align-items: center;

    &.open {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.9);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2rem;
    }
  }

  a {
    cursor: pointer;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
    transition: color 0.3s;
    position: relative;

    @media (max-width: 768px) {
      font-size: 14px;
    }

    &::after {
      content: "";
      width: 0%;
      height: 2px;
      background-color: #6e43cb;
      position: absolute;
      bottom: 0;
      left: 0;
      transition: width 0.6s ease-in-out;
    }

    &:hover::after {
      width: 100%;
    }

    &::before {
      content: "";
      width: 0%;
      height: 2px;
      background-color: #6e43cb;
      position: absolute;
      top: 0;
      right: 0;
      transition: width 0.6s ease-in-out;
    }

    &:hover::before {
      width: 100%;
    }

    &:hover {
      transition: filter 0.4s;
    }

    &.active {
      font-weight: bold;
      color: #6e43cb;
    }
  }

  .btn-mobile {
    display: none;
    z-index: 1001;

    span {
      color: ${({ theme }) => theme.colors.text};
      font-size: 24px;
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    .btn-mobile {
      display: block;
    }

    .hidden-items {
      display: none;

      &.open {
        display: flex;
      }
    }
  }
`;
