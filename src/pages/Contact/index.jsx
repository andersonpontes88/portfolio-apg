import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { BsSend, BsSendCheck } from "react-icons/bs";
import { FaFileDownload } from "react-icons/fa";
import LogoImg from "../../assets/svg/MinhaLogo-2.svg";
import Footer from "../../components/Footer";
import {
  Container,
  Form,
  InputGroup,
  Input,
  Content,
  Textarea,
  Button,
  ContentInfo,
  BoxDownload,
  ContentLogo,
} from "./styles";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      setError("Por favor, preencha todos os campos.");
      return;
    }
    setIsSending(true);

    const templateParams = {
      from_name: name,
      email: email,
      message: message,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_USER_ID
      );

      toast.success("Mensagem enviada com sucesso!");
      setName("");
      setEmail("");
      setMessage("");
      setError("");
    } catch (error) {
      toast.error("Ocorreu um erro ao enviar a mensagem.");
      console.error(error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Container>
      <ToastContainer />
      <Content>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={() => setError("")}
            />
            {error && (
              <div>
                <p className="text-err">{error}</p>
              </div>
            )}
          </InputGroup>

          <InputGroup>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && (
              <div>
                <p className="text-err">{error}</p>
              </div>
            )}
          </InputGroup>

          <InputGroup>
            <Textarea
              placeholder="Mensagem"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {error && (
              <div>
                <p className="text-err">{error}</p>
              </div>
            )}
          </InputGroup>
          <Button>
            <button type="submit">
              <span>{isSending ? <BsSendCheck /> : <BsSend />}</span>
              <p>Enviar</p>
            </button>
          </Button>
        </Form>
      </Content>

      <ContentInfo>
        <div className="box-info">
          <h4 className="title-info">Mais Informações!</h4>
          <p className="text-info">
            Vamos construir o futuro juntos! Seja um projeto inovador ou uma
            troca de ideias, eu estou aqui para colaborar e criar soluções
            incríveis. 💡 Entre em contato comigo e não se esqueça de baixar meu
            currículo para descobrir mais sobre minha trajetória e habilidades.
            Vamos conectar e transformar desafios em oportunidades!
          </p>
        </div>
        <BoxDownload>
          <h4 className="title-info">Baixe meu currículo!</h4>

          <a
            href="/AP-Curriculo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <span>
              <FaFileDownload />
            </span>
            <p>Download</p>
          </a>
        </BoxDownload>
      </ContentInfo>

      <ContentLogo
        as={motion.div}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={LogoImg} alt="Imagem da Logomarca" />
      </ContentLogo>

      <div className="footer">
        <Footer />
      </div>
    </Container>
  );
};

export default Contact;
