//Importes do React
//Importes do Router-Dom
import { Link } from "react-router-dom";
//Importes de Icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
//Importes de CSS
import "../estilo/cadastro_candidato.css";
//Importes de Paginas

function CadastroCandidatos() {
  return (
    <div className='cc-container'>
      <div className='cc-content'>
        <div className='cc-image'>
          <img
            src='/img/cadastrocandidato.png'
            alt='Imagem de Cadastro'
          />
        </div>
        <div className='cc-form'>
          <Link
            to='/prelogin'
            className='btn_voltar'
          >
            <FontAwesomeIcon icon={faCircleArrowLeft} />
            <span className='texto_voltar'>Voltar</span>
          </Link>
          <h1 className='cc-title'>Seu Novo Emprego Está Aqui!</h1>
          <p className='cc-subtitle'>
            Crie sua conta para acessar e candidatar-se a milhares de vagas.
          </p>
          <h3 className='cc-section-title'>Entre e comece a se candidatar</h3>
          <button className='botoes-principais'>Cadastrar com Google</button>
          <h3 className='cc-section-title'>Ou continue seu cadastro aqui</h3>
          <form className='cc-form-group'>
            <input
              type='text'
              placeholder='Nome Completo'
              className='cc-input'
            />
            <input
              type='email'
              placeholder='Email'
              className='cc-input'
            />
            <input
              type='password'
              placeholder='Senha'
              className='cc-input'
            />
            <input
              type='password'
              placeholder='Confirmar Senha'
              className='cc-input'
            />
            <input
              type='text'
              placeholder='CPF'
              className='cc-input'
            />
          </form>
          <div className='cc-terms'>
            <label className='cc-checkbox-label'>
              <input
                type='checkbox'
                className='cc-checkbox'
              />
              Li e concordo com as condições legais e a{" "}
              <Link
                to='/politica_privacidade'
                className='texto_alternativo_azulvivo'
              >
                {" "}
                política de privacidade.
              </Link>
            </label>
            <label className='cc-checkbox-label'>
              <input
                type='checkbox'
                className='cc-checkbox'
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

export default CadastroCandidatos;
