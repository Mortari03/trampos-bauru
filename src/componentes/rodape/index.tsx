import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "../../estilo/rodape.css";

function Rodape() {
  return (
    <footer className='rodape_padrao'>
      <div className='container_rodape'>
        {/* Coluna "Sobre" */}
        <div className='coluna_rodape'>
          <h4>Sobre</h4>
          <Link to='/quemsomos'>Quem Somos</Link>
          <Link to='/suporte'>Suporte</Link>
        </div>

        {/* Coluna "Emprego" */}
        <div className='coluna_rodape'>
          <h4>Emprego</h4>
          <Link to='/'>Ver Vagas</Link>
          <Link to='/carreiras'>Carreiras</Link>
        </div>

        {/* Coluna "Empresas" */}
        <div className='coluna_rodape'>
          <h4>Empresas</h4>
          <Link to='/paraempresas'>Para Empresas</Link>
          <Link to='/login_empresa'>Login Empresa</Link>
        </div>

        {/* Coluna "Recursos" */}
        <div className='coluna_rodape'>
          <h4>Recursos</h4>
          <Link to='/suporte'>FAQ</Link>
          <Link to='/politica_privacidade'>Privacidade</Link>
          <Link to='/aviso_legal'>Aviso Legal</Link>
        </div>

        {/* Coluna "Redes Sociais" */}
        <div className='coluna_rodape coluna_social'>
          <h4>Redes Sociais</h4>
          <div className='icones_sociais'>
            <a
              href='https://www.facebook.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className='icone facebook'
              />
            </a>
            <a
              href='https://www.instagram.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className='icone instagram'
              />
            </a>
            <a
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon
                icon={faTwitter}
                className='icone twitter'
              />
            </a>
            <a
              href='https://www.linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className='icone linkedin'
              />
            </a>
          </div>
        </div>
      </div>

      {/* Informações de copyright */}
      <div className='secao_direitos'>
        <p className='direitos'>
          &copy; {new Date().getFullYear()} Trampos Fácil. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Rodape;
