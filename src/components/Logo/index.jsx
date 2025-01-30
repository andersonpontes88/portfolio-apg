import { ContentLogo } from "./styles";
import LogoAnd from "../../assets/MinhaLogo-2.svg";

function Logo() {
  return (
    <ContentLogo>
      <img src={LogoAnd} alt="Logomarca pessoal" />
    </ContentLogo>
  );
}

export default Logo;
