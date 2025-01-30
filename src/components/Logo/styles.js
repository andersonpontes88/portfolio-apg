import styled from "styled-components";

export const ContentLogo = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  width: 100px;
  height: 100px;
  padding: 2px;
  position: absolute;
  top: -50%;
  transition: 0.5s ease-in-out;

  &:hover {
    transform: scale(1.1);
    transition: 0.5s ease-in-out;
  }

  img {
    width: 85%;
    filter: drop-shadow(0 0 0.25rem ${({ theme }) => theme.colors.text});
  }
`;
