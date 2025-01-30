import styled from "styled-components";

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.background};
  border-top: 2px solid #33333350;
  text-align: center;
  padding: 20px 0;
  color: ${({ theme }) => theme.colors.text};
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: ${({ theme }) => theme.colors.text};
    font-size: 12px;
    transition: all 0.5s;

    &:hover {
      color: #6e43cb;
      transform: scale(1.2);
    }
  }
`;
