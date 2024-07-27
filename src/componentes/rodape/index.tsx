import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import '../../estilo/rodape.css'


function Rodape() {
  return (
    <div className="rodape_padrao">
      <FontAwesomeIcon icon={faInstagram} className="instagram" />
      <FontAwesomeIcon icon={faFacebook} className="facebook" />
      <FontAwesomeIcon icon={faTwitter} className="twitter" />

    </div>
  );
}

export default Rodape;
