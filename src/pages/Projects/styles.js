import styled from "styled-components";

export const Container = styled.section`
  padding: 20px 10px;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    top: 0;
  }
`;

export const BoxSticket = styled.div`
  position: absolute;
  top: 100px;

  @media (max-width: 768px) {
    top: 80px;
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 50px 30px;
  max-width: 1200px;
  width: 100%;
  margin-top: 200px;
  padding: 20px;

  @media (max-width: 768px) {
    margin-left: 140px;
    margin-top: 100px;
  }
`;

export const Card = styled.div`
  position: relative;
  width: 200px;
  height: 220px;
  flex-basis: 200px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.background2};
  transition: transform 0.6s, box-shadow 0.6s;
  filter: drop-shadow(0 0 10px rgba(248, 246, 246, 0.2));

  display: flex;
  justify-content: center;
  align-items: flex-start;

  &:hover {
    transform: scale(1.3); /* Usa escala em vez de alterar o height */
    box-shadow: 0 15px 45px rgba(0, 0, 0, 0.2);
    filter: drop-shadow(0 0 10px rgba(248, 246, 246, 0));
    border: 1px solid #aa92f7;
  }

  &:hover .box-img {
    top: -90px;
    scale: 0.6;
    box-shadow: 0 15px 45px rgba(0, 0, 0, 0.2);
    filter: blur(2px);
  }

  &:hover .content {
    top: 20px;
    height: 220px;
  }

  .box-img {
    position: relative;
    width: 180px;
    height: 150px;
    top: 10px;
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.7s;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .content {
    position: absolute;
    top: 182px;
    width: 100%;
    height: 35px;
    padding: 0 20px;
    text-align: center;
    transition: all 0.6s;
    overflow: hidden;

    .texts {
      h5 {
        font-size: 12px;
        color: #aa92f7;
        font-weight: 800;
        margin-top: 10px;
      }
    }

    .skills {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      height: 50px;
      gap: 10px;
      margin-top: 30px;
      opacity: 0;
      transition: all 0.5s;

      .skills-content {
        display: flex;
        align-items: center;
        justify-content: center;

        p {
          color: #ccc1f1;
          font-size: 12px;
          font-weight: 600;
        }

        .ajuste {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;

          .skill-img {
            width: 40px;
          }
        }
      }
    }

    &:hover .skills {
      opacity: 1;
    }

    .links {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      margin-top: 50px;

      button {
        padding: 3px 8px;
        border: none;
        border-radius: 5px;
        background: #aa92f7;
        color: #fff;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
          background: #9370db;
          transform: scale(1.1);
          color: #7242d2;
        }
      }
    }
  }
`;
