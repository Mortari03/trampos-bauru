import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUsers } from "@fortawesome/free-solid-svg-icons";

function Cadastro() {
    return (
        <div className="Conteiner-Cadastro">
            <div className="Tela-cadastro">
                <div>
                    <Link to="/" className="Botao-Voltar">
                        <img className="Voltar" src="/img/Voltar.png" alt="Voltar" />
                    </Link>
                </div>
                <div className="imagem">
                    <img className="Logo-cadastro" src="/img/Logo.png" alt="Logo" />
                </div>
                <h1 className="Titulo-Cadastro">
                    Faça seu Login No Trampos <span className="Palavra-Destaque">Fácil</span> <br />
                    E Venha Fazer parte da Nossa Equipe
                </h1>
                <div className="Centro-Cadastro">
                    <Link to="/candidato" className="Botao-Cadastro">
                        <FontAwesomeIcon icon={faUser} className="icone-cadastro" />
                        <h1 className="Candidato">Cadastre-se como Candidato</h1>
                    </Link>
                    <Link to="/empresa" className="Botao-Cadastro">
                        <FontAwesomeIcon icon={faUsers} className="icone-cadastro" />
                        <h1 className="Empresas">Cadastre-se como Empresa</h1>
                    </Link>
                </div>
                <div className="Titulo-Final">
                    <h1>
                        Você é novo no Trampos <span className="Palavra-Destaque">Fácil</span>
                    </h1>
                    <h2 className="classe-mudavel">
                        Cadastre-se como <Link to="/candidato">Candidato</Link> ou <Link to="/empresa">Empresa</Link>adlfhaslfhasilhfn
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default Cadastro;
