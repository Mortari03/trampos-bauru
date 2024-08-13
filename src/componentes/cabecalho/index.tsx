import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../estilo/cabecalho.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSuitcase,
  faHome,
  faQuestionCircle,
  faHeadset,
  faPeopleArrows,
  faBuilding,
  faUser,
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
    <div className='div-conteiner'>
      <div className='imagem'>
        <img
          className='Logo'
          src='/img/Logo.png'
          alt='Logo'
        />

      
        <div className=  'tags-li'>
          <nav>
            <ul className='infos-cab'>
              <li>
                <strong className='menu'>
                  <Link to='/'>
                    <FontAwesomeIcon
                      icon={faHome}
                      className='icone'
                    />
                    TRAMPOS
                  </Link>
                </strong>
              </li>
              <li>
                <strong className='menu'>
                  <Link to='/carreiras'>
                    <FontAwesomeIcon
                      icon={faSuitcase}
                      className='icone'
                    />
                    CARREIRAS
                  </Link>
                </strong>
              </li>
              <li
                className='dropdown'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <strong className='menu'>
                  <Link to='#'>
                    <FontAwesomeIcon
                      icon={faQuestionCircle}
                      className='icone'
                    />
                    POR QUE NÓS ?
                  </Link>
                </strong>
                {dropdownVisible && (
                  <div className='dropdown-content menu'>
                    <Link to='/quemsomos'>
                      <FontAwesomeIcon
                        icon={faPeopleArrows}
                        className='icone'
                      />
                      Quem Somos
                    </Link>
                    <Link to='/paraempresas'>
                      <FontAwesomeIcon
                        icon={faBuilding}
                        className='icone'
                      />
                      Para Empresas
                    </Link>
                    <Link to='/paracandidatos'>
                      <FontAwesomeIcon
                        icon={faUser}
                        className='icone'
                      />
                      Para Candidatos
                    </Link>
                  </div>
                )}
              </li>
              <li>
                <strong className='menu'>
                  <Link to='/suporte'>
                    <FontAwesomeIcon
                      icon={faHeadset}
                      className='icone'
                    />
                    SUPORTE
                  </Link>
                </strong>
              </li>
              <div className='botao-config'>
                <Link to='/prelogin'>
                  <button className='botoes-principais'>LOGIN | CADASTRO</button>
                </Link>
              </div>
            </ul>
          </nav>
        </div>
      </div>
      <div className='wave-bar'></div>
    </div>
  );
}

export default Cabecalho;
