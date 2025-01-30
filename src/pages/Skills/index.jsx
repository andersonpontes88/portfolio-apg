//cSpell: disable
import {
  Container,
  Content,
  SkillsGrid,
  SkillCard,
  ContentTitle,
  ContentSkills,
  BoxSticket,
  ContentIllustration,
} from "./styles";
import { FaReact, FaJs, FaHtml5, FaCss3, FaNodeJs } from "react-icons/fa";
import {
  SiStyledcomponents,
  SiVite,
  SiTailwindcss,
  SiCssmodules,
  SiDocker,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiExpress,
  SiNpm,
  SiYarn,
} from "react-icons/si";
import { motion } from "framer-motion";
import Sticket from "../../components/Sticket";
import AnimeImg from "../../assets/svg/AnimeIlustration.svg";

const Skills = () => {
  const skills = [
    {
      name: "React",
      description: "Framework",
      icon: <FaReact color="#61DBFB" />,
    },
    {
      name: "JavaScript",
      description: "Programming Language",
      icon: <FaJs color="#F7DF1E" />,
    },
    {
      name: "HTML5",
      description: "Markup Language",
      icon: <FaHtml5 color="#E34F26" />,
    },
    {
      name: "CSS3",
      description: "Style Language",
      icon: <FaCss3 color="#1572B6" />,
    },
    {
      name: "Node.js",
      description: "Web Server",
      icon: <FaNodeJs color="#68A063" />,
    },
    {
      name: "Styled C.",
      description: "React Library",
      icon: <SiStyledcomponents color="#DB7093" />,
    },
    {
      name: "Vite",
      description: "Build Tool",
      icon: <SiVite color="#646CFF" />,
    },
    {
      name: "TailwindCSS",
      description: "CSS Framework",
      icon: <SiTailwindcss color="#06B6D4" />,
    },
    {
      name: "CssModules",
      description: "Modularize CSS technique",
      icon: <SiCssmodules color="#264de4" />,
    },
    {
      name: "Docker",
      description: "Containerization",
      icon: <SiDocker color="#2496ED" />,
    },
    {
      name: "PostgreSQL",
      description: "Relational Database",
      icon: <SiPostgresql color="#336791" />,
    },
    {
      name: "MongoDB",
      description: "NoSQL Database",
      icon: <SiMongodb color="#47A248" />,
    },
    {
      name: "Prisma",
      description: "ORM",
      icon: <SiPrisma color="#053280" />,
    },
    {
      name: "Express",
      description: "Web Framework",
      icon: <SiExpress color="#60718f" />,
    },
    {
      name: "NPM",
      description: "Package Manager",
      icon: <SiNpm color="#CB3837" />,
    },
    {
      name: "Yarn",
      description: "Package Manager",
      icon: <SiYarn color="#2C8EBB" />,
    },
  ];

  return (
    <Container id="skills">
      <BoxSticket
        as={motion.div}
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <Sticket>🚀Habilidades</Sticket>
      </BoxSticket>

      <Content
        as={motion.div}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <ContentTitle>
          <h5>Ferramentas Essenciais do Meu Trabalho</h5>
          <p>
            Explore as tecnologias e ferramentas de ponta que utilizo para
            desenvolver sites e aplicativos modernos, funcionais e de alto
            desempenho.
          </p>
        </ContentTitle>

        <ContentSkills>
          {skills.map((skill, index) => (
            <SkillsGrid as={motion.div} key={index}>
              <SkillCard>
                <div className="skill-icon">
                  <span className="animate-border"></span>
                  <span className="icons">{skill.icon}</span>
                </div>

                <div className="skill-info">
                  <p className="skill-name">{skill.name}</p>
                  <p className="description">{skill.description}</p>
                </div>
              </SkillCard>
            </SkillsGrid>
          ))}
        </ContentSkills>
      </Content>

      <ContentIllustration>
        <a href="https://storyset.com/job" target="_blank" rel="noreferrer">
          <img src={AnimeImg} alt="desenho ilustrado" />
        </a>
      </ContentIllustration>
    </Container>
  );
};

export default Skills;
