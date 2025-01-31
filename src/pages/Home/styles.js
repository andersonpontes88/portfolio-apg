import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  width: 500px;
  height: 400px;
  left: 70px;

  @media (max-width: 768px) {
    padding: 0 20px;
    left: 80px;
  }
`;

export const BoxSticket = styled.div`
  display: flex;
  position: absolute;
  top: 0;

  @media (max-width: 768px) {
    position: relative;
    left: 0;
    top: 20px;
  }
`;

export const BoxText = styled.div`
  border-bottom: 1px solid #6e43cb;
  width: 300px;
  padding-bottom: 10px;

  @media (max-width: 768px) {
    position: relative;
    left: 0;
    top: 20%;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #6e43cb;
  line-height: 1;
  margin-bottom: 10px;
`;

export const SubTitle = styled.h4`
  color: ${({ theme }) => theme.colors.text};

  span {
    font-weight: 400;
    font-size: 12px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 10px;
  z-index: 100;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
    border-radius: 2px;
    width: 30px;
    height: 30px;
    text-decoration: none;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    margin-top: 100px;
  }
`;

export const Main = styled.div`
  position: absolute;
  left: 45%;
  top: 10%;
  height: 100%;

  @media (max-width: 768px) {
    left: 10%;
  }

  .box-img {
    width: 425px;
    height: 425px;
    color: #fffafa;

    img {
      width: 100%;
      height: 100%;
      position: relative;
      top: -100%;
      left: 70px;
    }

    @media (max-width: 768px) {
      width: 200px;
      height: 200px;
    }
  }
`;
