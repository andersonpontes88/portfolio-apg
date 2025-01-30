import { motion } from "framer-motion";
import { BoxSticket, Card, Container, ProjectsGrid } from "./styles";
import { IoOpen } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
// images projects
import AppNotes from "../../assets/imgs/app-notes.png";
import AppNetflix from "../../assets/imgs/app-netflix.png";
import AppBurger from "../../assets/imgs/the-burger.png";
import AppCurrency from "../../assets/imgs/conversor.png";
import AppSorte from "../../assets/imgs/sorteador.png";
import AppProject from "../../assets/imgs/primeiro-port.png";
import AppGallery from "../../assets/imgs/galeria.png";
import AppPrevTemp from "../../assets/imgs/prev-tempo.png";
import AppGerenciador from "../../assets/imgs/gerenciador.png";
import AppTradutor from "../../assets/imgs/tradutor.png";
// icons skills
import ReactImg from "../../assets/imgs/reactjs.png";
import NodeImg from "../../assets/svg/node-js.svg";
import MongoImg from "../../assets/imgs/mongodb.png";
import ExpressImg from "../../assets/imgs/express.png";
import StyledImg from "../../assets/imgs/styled-components.png";
import JsImg from "../../assets/imgs/javascript.png";
import HtmlImg from "../../assets/imgs/html.png";
import YarnImg from "../../assets/imgs/yarn.png";
import CssImg from "../../assets/imgs/css.png";
import HtCssImg from "../../assets/imgs/ht-css.png";
import AxiosImg from "../../assets/imgs/axios.png";
import BiomeImg from "../../assets/imgs/biome.png";
import TailwindImg from "../../assets/imgs/tailwindcss.png";
import Sticket from "../../components/Sticket";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Aplicativos de Notas",
      description: "Aplicação para adicionar notas e gerenciar tarefas.",
      image: `${AppNotes}`,
      skill1: `${ReactImg}`,
      skill2: `${NodeImg}`,
      skill3: `${MongoImg}`,
      skill4: `${ExpressImg}`,
      liveLink: "https://interface-app-notes.vercel.app/login",
      codeLink: "https://github.com/andersonpontes88/interface-app-notes",
    },
    {
      id: 2,
      title: "Recriação da Netflix",
      description: "Landing page da Netflix.",
      image: `${AppNetflix}`,
      skill1: `${ReactImg}`,
      skill2: `${StyledImg}`,
      skill3: `${JsImg}`,
      skill4: `${YarnImg}`,
      liveLink:
        "https://project-netflix-mxxcr2cq3-andersonpontes88s-projects.vercel.app/",
      codeLink: "https://github.com/andersonpontes88/project-netflix",
    },
    {
      id: 3,
      title: "Landing Page Burger",
      description: "Landing page de uma  hamburgueria.",
      image: `${AppBurger}`,
      skill1: `${HtmlImg}`,
      skill2: `${CssImg}`,
      skill3: `${JsImg}`,
      skill4: `${HtCssImg}`,
      liveLink: "https://andersonpontes88.github.io/The-Burger/",
      codeLink: "https://github.com/andersonpontes88/The-Burger",
    },
    {
      id: 4,
      title: "Conversor de Moedas",
      description: "Uma aplicação para converter moedas.",
      image: `${AppCurrency}`,
      skill1: `${HtmlImg}`,
      skill2: `${CssImg}`,
      skill3: `${JsImg}`,
      skill4: `${HtCssImg}`,
      liveLink: "https://andersonpontes88.github.io/Conversor-Moedas/",
      codeLink: "https://github.com/andersonpontes88/Conversor-Moedas",
    },
    {
      id: 5,
      title: "Sorteador de Números",
      description: "Um aplicativo para sortear números.",
      image: `${AppSorte}`,
      skill1: `${HtmlImg}`,
      skill2: `${CssImg}`,
      skill3: `${JsImg}`,
      skill4: `${HtCssImg}`,
      liveLink: "https://andersonpontes88.github.io/The-Sorteador/",
      codeLink: "https://github.com/andersonpontes88/The-Sorteador",
    },
    {
      id: 6,
      title: "Primeiro Portfólio",
      description: "Meu primeiro projeto de portfólio.",
      image: `${AppProject}`,
      skill1: `${HtmlImg}`,
      skill2: `${CssImg}`,
      skill3: `${JsImg}`,
      skill4: `${HtCssImg}`,
      liveLink: "https://my-portfolio-andersonpg.vercel.app/",
      codeLink: "https://github.com/andersonpontes88/My-Portfolio",
    },
    {
      id: 7,
      title: "Galeria de Imagens",
      description: "Galeria de imagens com efeitos.",
      image: `${AppGallery}`,
      skill1: `${ReactImg}`,
      skill2: `${StyledImg}`,
      skill3: `${JsImg}`,
      skill4: `${YarnImg}`,
      liveLink: "https://galeria-imagens-one-piece.vercel.app/",
      codeLink: "https://github.com/andersonpontes88/Gallery-Images-OnePiece",
    },
    {
      id: 8,
      title: "App Previsão do Tempo",
      description: "Aplicativo de previsão do tempo.",
      image: `${AppPrevTemp}`,
      skill1: `${ReactImg}`,
      skill2: `${StyledImg}`,
      skill3: `${AxiosImg}`,
      skill4: `${BiomeImg}`,
      liveLink: "https://weather-forecast-iota-three.vercel.app/",
      codeLink: "https://github.com/andersonpontes88/weather-forecast",
    },
    {
      id: 9,
      title: "Tradutor Fácil",
      description: "Aplicativo de tradução de textos.",
      image: `${AppTradutor}`,
      skill1: `${ReactImg}`,
      skill2: `${TailwindImg}`,
      skill3: `${YarnImg}`,
      skill4: `${BiomeImg}`,
      liveLink: "https://translator-nine-theta.vercel.app/",
      codeLink: "https://github.com/andersonpontes88/translator",
    },
    {
      id: 10,
      title: "Gerenciador Financeiro",
      description: "Aplicativo de gerenciamento financeiro.",
      image: `${AppGerenciador}`,
      skill1: `${ReactImg}`,
      skill2: `${TailwindImg}`,
      skill3: `${YarnImg}`,
      skill4: `${BiomeImg}`,
      liveLink: "https://financial-manager-mu.vercel.app/",
      codeLink: "https://github.com/andersonpontes88/financial-manager",
    },
  ];

  return (
    <Container id="projects">
      <BoxSticket
        as={motion.div}
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <Sticket>👨‍💻Meus Projetos</Sticket>
      </BoxSticket>

      <ProjectsGrid
        as={motion.div}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        {projects.map((project) => (
          <Card key={project.id}>
            <div className="box-img">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="content">
              <div className="texts">
                <h5>{project.title}</h5>
              </div>

              <div className="skills">
                <div className="skills-content">
                  <p>{project.description}</p>
                </div>
                <div className="skills-content">
                  <span className="ajuste">
                    <img src={project.skill1} alt="" className="skill-img" />
                  </span>
                  <span className="ajuste">
                    <img src={project.skill2} alt="" className="skill-img" />
                  </span>
                  <span className="ajuste">
                    <img src={project.skill3} alt="" className="skill-img" />
                  </span>
                  <span className="ajuste">
                    <img src={project.skill4} alt="" className="skill-img" />
                  </span>
                </div>
              </div>

              <div className="links">
                <a href={project.liveLink} target="_blank" rel="noreferrer">
                  <button>
                    <IoOpen size={20} />
                  </button>
                </a>
                <a href={project.codeLink} target="_blank" rel="noreferrer">
                  <button>
                    <FaGithub size={18} />
                  </button>
                </a>
              </div>
            </div>
          </Card>
        ))}
      </ProjectsGrid>
    </Container>
  );
};

export default Projects;
