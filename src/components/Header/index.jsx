import { useState, useEffect } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { RiMenuFoldFill, RiMenuFold2Fill } from "react-icons/ri";
import { Link } from "react-scroll";
import { Container, ContentSunMoon, Nav } from "./styles";
import { useTheme } from "../../hooks/useTheme";
import { motion } from "framer-motion";

const Header = () => {
  const [modeSumMoon, setModeSumMoon] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");
  const [openMenu, setOpenMenu] = useState(false);

  const handleMode = () => {
    setModeSumMoon(!modeSumMoon);
    toggleTheme();
  };

  // Detectar a seção ativa com base no scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        if (
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Garantir que a pagina comece com a seção home ao recarregar
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection("home");
  }, []);

  return (
    <Container
      as={motion.div}
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <ContentSunMoon>
        <button
          onClick={handleMode}
          className={modeSumMoon ? "btn-background" : ""}
        >
          <span className={modeSumMoon ? "position-sum-moon" : ""}>
            {isDarkMode ? <BiSolidSun /> : <BiSolidMoon />}
          </span>
        </button>
      </ContentSunMoon>

      <Nav>
        <div className={`hidden-items ${openMenu ? "open" : ""}`}>
          <Link
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            className={activeSection === "home" ? "active" : ""}
            onClick={() => setOpenMenu(false)}
          >
            Início
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            className={activeSection === "about" ? "active" : ""}
            onClick={() => setOpenMenu(false)}
          >
            Sobre
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            className={activeSection === "projects" ? "active" : ""}
            onClick={() => setOpenMenu(false)}
          >
            Projetos
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            spy={true}
            className={activeSection === "skills" ? "active" : ""}
            onClick={() => setOpenMenu(false)}
          >
            Habilidades
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            className={activeSection === "contact" ? "active" : ""}
            onClick={() => setOpenMenu(false)}
          >
            Contato
          </Link>
        </div>

        <button className="btn-mobile" onClick={() => setOpenMenu(!openMenu)}>
          <span>{openMenu ? <RiMenuFoldFill /> : <RiMenuFold2Fill />}</span>
        </button>
      </Nav>
    </Container>
  );
};

export default Header;
