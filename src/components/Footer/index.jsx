import { Container, Content, SocialIcons } from "./styles";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Content>
          <div>
            <p>
              © {new Date().getFullYear()} Anderson Pontes. Todos os direitos
              reservados.
            </p>
          </div>

          <SocialIcons>
            <a
              href="https://github.com/andersonpontes88"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/anderson-pontes88/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/anderson_pontes28/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={20} />
            </a>
          </SocialIcons>
        </Content>
      </motion.div>
    </Container>
  );
};

export default Footer;
