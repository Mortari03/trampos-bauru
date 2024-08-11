// Importes do React
import React from "react";
// Importe do FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faUserSecret,
  faShareSquare,
  faShieldAlt,
  faPenFancy,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
// Importes de CSS
import "../estilo/politicadeprivacidade.css";
// Importes de Componentes
import Cabecalho from "../componentes/cabecalho";

const PoliticaDePrivacidade: React.FC = () => {
  return (
    <div>
      <Cabecalho />
      <div className='politica_container'>
        <h1 className='politica_titulo'>Política de Privacidade do Trampos Fácil</h1>

        <p className='politica_texto'>
          Esta Política de Privacidade descreve como o Trampos Fácil coleta, usa e protege
          suas informações pessoais quando você utiliza nosso site e serviços. A sua
          privacidade é importante para nós e estamos comprometidos em proteger suas
          informações.
        </p>

        <div className='politica_section'>
          <h2 className='politica_subtitulo'>
            <FontAwesomeIcon
              icon={faInfoCircle}
              className='icon'
            />{" "}
            Coleta de Informações
          </h2>
          <p className='politica_texto'>
            Coletamos informações que você nos fornece diretamente, como nome, e-mail e
            dados de contato. Também coletamos informações automaticamente, como endereço
            IP e dados sobre seu navegador, para melhorar sua experiência.
          </p>
        </div>

        <div className='politica_section'>
          <h2 className='politica_subtitulo'>
            <FontAwesomeIcon
              icon={faUserSecret}
              className='icon'
            />{" "}
            Uso das Informações
          </h2>
          <p className='politica_texto'>Utilizamos suas informações para:</p>
          <ul>
            <li>Melhorar nossos serviços</li>
            <li>Comunicar sobre atualizações e promoções</li>
            <li>Personalizar sua experiência no site</li>
            <li>Realizar análises e pesquisas para entender melhor nossas operações</li>
          </ul>
        </div>

        <div className='politica_section'>
          <h2 className='politica_subtitulo'>
            <FontAwesomeIcon
              icon={faShareSquare}
              className='icon'
            />{" "}
            Compartilhamento de Informações
          </h2>
          <p className='politica_texto'>
            Não vendemos suas informações pessoais. Podemos compartilhar suas informações
            com parceiros confiáveis que ajudam a operar nosso site, desde que concordem
            em manter essas informações confidenciais. Também podemos compartilhar dados
            quando exigido por lei.
          </p>
        </div>

        <div className='politica_section'>
          <h2 className='politica_subtitulo'>
            <FontAwesomeIcon
              icon={faShieldAlt}
              className='icon'
            />{" "}
            Segurança
          </h2>
          <p className='politica_texto'>
            Implementamos medidas de segurança para proteger suas informações contra
            acesso não autorizado. No entanto, nenhuma transmissão de dados pela internet
            é completamente segura.
          </p>
        </div>

        <div className='politica_section'>
          <h2 className='politica_subtitulo'>
            <FontAwesomeIcon
              icon={faPenFancy}
              className='icon'
            />{" "}
            Seus Direitos
          </h2>
          <p className='politica_texto'>
            Você tem o direito de acessar, corrigir e excluir suas informações pessoais.
            Para exercer esses direitos, entre em contato conosco através dos meios
            fornecidos abaixo.
          </p>
        </div>

        <div className='politica_section'>
          <h2 className='politica_subtitulo'>
            <FontAwesomeIcon
              icon={faPenFancy}
              className='icon'
            />{" "}
            Alterações na Política
          </h2>
          <p className='politica_texto'>
            Podemos atualizar esta Política de Privacidade periodicamente. As alterações
            serão publicadas nesta página, e recomendamos que você revise esta política
            regularmente.
          </p>
        </div>

        <div className='politica_section'>
          <h2 className='politica_subtitulo'>
            <FontAwesomeIcon
              icon={faEnvelope}
              className='icon'
            />{" "}
            Contato
          </h2>
          <p className='politica_texto'>
            Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato
            pelo e-mail: <a href='mailto:contato@tramposfacil.com.br'>Clicando AQUI</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PoliticaDePrivacidade;
