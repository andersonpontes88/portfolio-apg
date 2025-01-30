import { motion } from "framer-motion";
import { FaGithubSquare } from "react-icons/fa";
//cspell: disable-next-line
import { SiLinkedin } from "react-icons/si";
import {
  /* cspell: disable */
  BoxSticket,
  BoxText,
  Buttons,
  Container,
  Content,
  Main,
  SubTitle,
  Title,
} from "./styles";
import PerfilImg from "../../assets/imgs/foto-perfil-2025.png";

import Sticket from "../../components/Sticket";
import BgHero from "../../components/BgHeroAnimate";

const Home = () => {
  return (
    <Container>
      <Content>
        <BoxSticket
          as={motion.div}
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <Sticket>👏Saudações!</Sticket>
        </BoxSticket>
        {/* cspell: enable */}
        <BoxText
          as={motion.div}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: -20 }}
          transition={{ duration: 1.5 }}
        >
          <Title>Anderson Pontes</Title>
          <SubTitle>
            Desenvolvedor Front-End <br /> <span>Front-end Developer</span>
          </SubTitle>
        </BoxText>

        <Buttons>
          <motion.a
            href="https://www.linkedin.com/in/anderson-pontes88/"
            target="_blank"
            rel="noreferrer noopenner"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <SiLinkedin size={32} />
          </motion.a>
          <motion.a
            href="https://github.com/andersonpontes88"
            target="_blank"
            rel="noreferrer noopenner"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithubSquare size={34} />
          </motion.a>
        </Buttons>
      </Content>

      <Main
        as={motion.div}
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="box-img">
          <BgHero />
          <img src={PerfilImg} alt="foto-perfil" />
        </div>
      </Main>
    </Container>
  );
};

export default Home;
