import React from "react";
import { Link } from "react-router-dom";

function Cabecalho() {
    return (
        <div className="div-conteiner">
            <div className="imagem">
                <img className="Logo" src="/img/Logo.png" alt="Logo" />
                <div>
                    <div className="tags-li">
                        <nav>
                            <ul className="infos-cab">
                                <li> <strong><Link to="/trampos">TRAMPOS</Link></strong></li>
                                <li> <strong><Link to="/carreiras">CARREIRAS</Link></strong></li>
                                <li> <strong><Link to="/porque-nos">POR QUE NÓS?</Link></strong></li>
                                <li> <strong><Link to="/suporte">SUPORTE</Link></strong></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="botao-config">
                    <Link to="/cadastro">
                        <button className="botao-cabecalho">LOGIN/CADASTRO</button>
                    </Link>
                </div>
            </div>
            <div className="wave-bar"></div>
        </div>
    );
}

export default Cabecalho;
