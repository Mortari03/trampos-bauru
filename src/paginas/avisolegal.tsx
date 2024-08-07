// Importes do React
import React from "react";
// Importe do FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListAlt,
  faUserShield,
  faUpload,
  faGavel,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
// Importes de CSS
import "../estilo/avisolegal.css";
// Importes de Componentes
import Cabecalho from "../componentes/cabecalho";
import Rodape from "../componentes/rodape";

const AvisoLegal = () => {
  return (
    <div>
      <Cabecalho />
      <div className='aviso_legal_container'>
        <div className='aviso_content'>
          <h1 className='aviso_titulo'>Aviso Legal para Candidatos do Trampos Fácil</h1>

          <p className='aviso_texto'>
            Este documento estabelece as Condições Gerais de Uso do portal Trampos Fácil (
            <a
              href='https://www.tramposfacil.com.br'
              target='_blank'
              rel='noopener noreferrer'
              className='link_trampos'
            >
              www.tramposfacil.com.br
            </a>
            ) e todos os websites pertencentes à Trampos Fácil Ltda.
          </p>
          <div className='aviso_section'>
            <h2 className='aviso_subtitulo'>
              <FontAwesomeIcon
                icon={faListAlt}
                className='icon'
              />{" "}
              Sumário
            </h2>
            <ul>
              <li>
                <p>Aviso Legal para Candidatos</p>
              </li>

              <li>
                <p>Obrigações dos Usuários no Portal</p>
              </li>
              <li>
                <p>Publicação do Conteúdo no Portal</p>
              </li>
              <li>
                <p>Condições Legais para Candidatos</p>
              </li>
              <li>
                <p>Informação de Contato</p>
              </li>
            </ul>
          </div>
          <div className='aviso_section'>
            <h2 className='aviso_subtitulo'>
              <FontAwesomeIcon
                icon={faUserShield}
                className='icon'
              />{" "}
              Aviso Legal para Candidatos
            </h2>
            <p className='aviso_texto'>
              O Trampos Fácil conecta Recrutadores e Candidatos em um ambiente online,
              permitindo que empresas acessem a base de dados de candidatos, publiquem
              vagas, gerenciem processos de seleção e utilizem outros serviços
              relacionados.
            </p>
            <p className='aviso_texto'>
              Reservamo-nos o direito de modificar as Condições Gerais de Uso a qualquer
              momento, sem aviso prévio.
            </p>
          </div>
          <div className='aviso_section'>
            <h2 className='aviso_subtitulo'>
              <FontAwesomeIcon
                icon={faGavel}
                className='icon'
              />{" "}
              Obrigações dos Usuários
            </h2>
            <p className='aviso_texto'>
              Os usuários concordam em utilizar o portal de forma diligente e apenas para
              os fins a que se destinam, respeitando os direitos de terceiros e mantendo
              suas informações atualizadas.
            </p>
          </div>
          <div className='aviso_section'>
            <h2 className='aviso_subtitulo'>
              <FontAwesomeIcon
                icon={faUpload}
                className='icon'
              />{" "}
              Publicação do Conteúdo no Portal
            </h2>
            <p className='aviso_texto'>
              Os usuários são responsáveis pelo conteúdo que publicam, garantindo possuir
              os direitos necessários.
            </p>
          </div>
          <div className='aviso_section'>
            <h2 className='aviso_subtitulo'>
              <FontAwesomeIcon
                icon={faUserShield}
                className='icon'
              />{" "}
              Condições Legais para Candidatos
            </h2>
            <p className='aviso_texto'>
              Os usuários devem ter 14 anos ou mais para acessar o portal. A utilização de
              certos serviços pode estar sujeita a condições particulares, que devem ser
              lidas e aceitas antes do uso.
            </p>
          </div>
          <div className='aviso_section'>
            <h2 className='aviso_subtitulo'>
              <FontAwesomeIcon
                icon={faEnvelope}
                className='icon'
              />{" "}
              Informação de Contato
            </h2>
            <p className='aviso_texto'>
              Para dúvidas ou mais informações, entre em contato conosco pelo e-mail:{" "}
              <a href='mailto:contato@tramposfacil.com.br'>contato@tramposfacil.com.br</a>
            </p>
          </div>
        </div>
      </div>
      <Rodape />
    </div>
  );
};

export default AvisoLegal;
