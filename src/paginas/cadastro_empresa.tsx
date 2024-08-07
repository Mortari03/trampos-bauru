// Importes do React
// Importes do Router-Dom (se necessário)
import { Link } from "react-router-dom";
// Importes de Icones e Outros
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
// Importes de CSS
import "../estilo/cadastro_empresa.css";
// Importes de Paginas

function CadastroEmpresa() {
  return (
    <div className='ce-container'>
      <div className='ce-content'>
        <div className='ce-image'>
          <img
            src='/img/cadastroempresa.png'
            alt='Ilustração'
          />
        </div>
        <div className='ce-form'>
          <Link
            to='/prelogin'
            className='btn_voltar'
          >
            <FontAwesomeIcon icon={faCircleArrowLeft} />
            <span className='texto_voltar'>Voltar</span>
          </Link>
          <h1 className='ce-title'>
            Já Imaginou o jeito fácil de publicar <br /> e acompanhar Suas Vagas?
          </h1>
          <p className='ce-subtitle'>
            Crie sua conta para acessar e publicar milhares de vagas.
          </p>
          <form className='ce-form-group'>
            <input
              type='text'
              placeholder='Nome da Empresa'
              className='ce-input'
            />
            <input
              type='email'
              placeholder='Email'
              className='ce-input'
            />
            <input
              type='password'
              placeholder='Senha'
              className='ce-input'
            />
            <input
              type='text'
              placeholder='CNPJ'
              className='ce-input'
            />
          </form>
          <div className='ce-terms'>
            <label className='ce-checkbox-label'>
              <input
                type='checkbox'
                className='ce-checkbox'
              />
              Li e concordo com as condições legais e a{" "}
              <Link
                to='/politica_privacidade'
                className='texto_alternativo_azulvivo'
              >
                política de privacidade.
              </Link>
            </label>
            <label className='ce-checkbox-label'>
              <input
                type='checkbox'
                className='ce-checkbox'
              />
              Autorizo o Trampos Fácil a enviar comunicações comerciais sobre produtos,
              serviços e eventos dos seus parceiros e colaboradores.
            </label>
          </div>
          <button className='botoes-principais'>Cadastre-se</button>
        </div>
      </div>
    </div>
  );
}

export default CadastroEmpresa;
