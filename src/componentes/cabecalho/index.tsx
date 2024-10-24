import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../estilo/cabecalho.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faQuestionCircle,
  faHeadset,
  faBuilding,
  faUser,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";

function Cabecalho() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };



  return (
    <div>
      <div className='menu-container'>
        <div className='menu-logo'>
          <img
            src='/img/logo.png'
            alt='Logo do site'
            className='Logo'
          />
        </div>
        <nav className='menu-conteudo'>
          <Link
            to='/trampos'
            className='menu-link'
          >
            <FontAwesomeIcon
              icon={faHome}
              className='icone'
            />
            <span className='menu-text'>Trampos</span>
          </Link>

          <div
            className='dropdown'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to='#'
              className='menu-link'
            >
              <FontAwesomeIcon
                icon={faQuestionCircle}
                className='icone'
              />
              <span className='menu-text'>Por que nos?</span>
            </Link>
            {dropdownVisible && (
              <div className='dropdown-content'>
                <Link
                  to='/quemsomos'
                  className='dropdown-item'
                >
                  <FontAwesomeIcon
                    icon={faCircleInfo}
                    className='icone'
                  />
                  Quem Somos
                </Link>
                <Link
                  to='/paraempresas'
                  className='dropdown-item'
                >
                  <FontAwesomeIcon
                    icon={faBuilding}
                    className='icone'
                  />
                  Para Empresas
                </Link>
                <Link
                  to='/paracandidatos'
                  className='dropdown-item'
                >
                  <FontAwesomeIcon
                    icon={faUser}
                    className='icone'
                  />
                  Para Candidatos
                </Link>
              </div>
            )}
          </div>

          <Link
            to='/suporte'
            className='menu-link'
          >
            <FontAwesomeIcon
              icon={faHeadset}
              className='icone'
            />
            <span className='menu-text '>Suporte</span>
          </Link>
        </nav>
        <div>
          <Link to='/candidato_perfil'>
            <button className='botoes-principais menu-btn'>Meu | Curriculo</button>
          </Link>
        </div>
      </div>
      <div className='menu-wave'></div>
    </div>
  );
}

export default Cabecalho;
