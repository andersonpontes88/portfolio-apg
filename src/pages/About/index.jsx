import {
  AvatarImg,
  BoxSticket,
  Container,
  Content,
  ContentAnimado,
  ContentImg,
  DevJobImg,
  Text,
  Title,
} from "./styles";
import { motion } from "framer-motion";
import Sticket from "../../components/Sticket";
import FotoAvatar from "../../assets/imgs/foto-avatar-1.png";
import JobImg from "../../assets/imgs/job-dev1.png";
import BtnInterruptor from "../../assets/imgs/interruptor.png";
import { useState } from "react";

const About = () => {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <Container id="about">
      <div>
        <BoxSticket
          as={motion.div}
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <Sticket>✒️Sobre mim</Sticket>
        </BoxSticket>
      </div>

      <Content>
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <Title>
            <h1>Anderson Pontes Gomes</h1>
          </Title>

          <Text $isOn={isOn}>
            Olá! Sou o <span>Anderson</span>, um desenvolvedor web em constante
            aprendizado. Com uma formação na área da saúde, decidi dar um salto
            na minha carreira e me dedicar ao mundo da programação. Apesar de
            estar iniciando minha jornada profissional nessa área, já desenvolvi
            diversos projetos pessoais, explorando as últimas tecnologias e
            ferramentas do mercado. Sou apaixonado por criar interfaces
            intuitivas e eficazes, sempre com o objetivo de entregar a melhor
            experiência para o usuário. Minhas principais habilidades incluem
            <span>
              {""} HTML5, CSS3, JavaScript e React, com foco principal em
              Front-end.
            </span>
            Tenho experiência em todo o ciclo de desenvolvimento, desde a
            concepção até a implementação. Se você busca um desenvolvedor web
            dedicado e proativo, entre em contato comigo. Vamos construir juntos
            projetos incríveis!
          </Text>
        </motion.div>
      </Content>

      <ContentImg
        as={motion.div}
        initial={{ opacity: 0, y: 100, scale: 0.7 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <AvatarImg src={FotoAvatar} alt="foto avatar" $isOn={isOn} />
      </ContentImg>

      <ContentAnimado>
        <DevJobImg
          src={JobImg}
          alt="imagem  de um homem trabalhando"
          className="img-job"
          $isOn={isOn}
        />
        <button onClick={handleClick}>
          <span style={{ "--sp": 1 }}></span>
          <span style={{ "--sp": 2 }}></span>
          <span style={{ "--sp": 3 }}></span>

          <img
            src={BtnInterruptor}
            alt="imagem de um interruptor"
            className="btn-interruptor"
          />
        </button>
      </ContentAnimado>
    </Container>
  );
};
export default About;
