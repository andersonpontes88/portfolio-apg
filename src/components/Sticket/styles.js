import styled from "styled-components";

export const BoxGreetings = styled.div`
  display: flex;
  width: 150px;
  height: 30px;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
    border-radius: 20px;
    padding: 4px;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.text};
  }
`;
