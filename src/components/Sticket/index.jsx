// cspell: disable

import { BoxGreetings } from "./styles";
import PropTypes from "prop-types";

const Sticket = ({ children }) => {
  return (
    <BoxGreetings>
      <span>{children}</span>
    </BoxGreetings>
  );
};

Sticket.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Sticket;
