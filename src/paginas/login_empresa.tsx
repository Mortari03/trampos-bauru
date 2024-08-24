// Importes do React
import React, { useEffect, useState } from "react";
// Importes do Router-Dom (se necessário)
import { Link } from "react-router-dom";
// Importes de Icones e Outros
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faExclamationCircle,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
// Importes de CSS
import "../estilo/login_empresa.css";
// Importes de Paginas

function LoginEmpresa() {
  // Estados para controlar os inputs e erros
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (erro) {
      // Configura um timer para ocultar a mensagem após 5 segundos
      timer = setTimeout(() => setErro(""), 5000);
    }
    return () => clearTimeout(timer);
  }, [erro]);

  // Validação básica no frontend
  const validarFormulario = () => {
    if (!email || !senha) {
      setErro("Todos os campos são obrigatórios.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setErro("Por favor, insira um e-mail válido.");
      return false;
    }

    setErro("");
    return true;
  };

  const handleLogin = () => {
    if (validarFormulario()) {
      // Aqui você poderá adicionar a lógica de login futuramente
    }
    // Limpa os campos de entrada
    setEmail("");
    setSenha("");
  };

  return (
    <div>
      <div className='le-container'>
        <div className='le-caixa-login'>
          <header className='le-cabecalho-login'>
            <Link
              to='/prelogin'
              className='btn_voltar'
            >
              <FontAwesomeIcon icon={faCircleArrowLeft} />
              <span className='texto_voltar'>Voltar</span>
            </Link>
            <img
              className='Logo'
              src='/img/Logo.png'
              alt='Logo'
            />
          </header>
          <FontAwesomeIcon
            icon={faUsers}
            className='le-icone-cadastro'
          />
          <button className='botoes-principais'>
            <FontAwesomeIcon
              icon={faGoogle}
              className='lc-icone-google'
            />
            GOOGLE
          </button>
          <p>Ou insira seu e-mail</p>
          <input
            type='text'
            placeholder='E-MAIL'
            className='lc-input'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='SENHA'
            className='lc-input'
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          {/* Exibir mensagem de erro se houver */}
          {erro && (
            <div className='lc-erro'>
              <FontAwesomeIcon
                icon={faExclamationCircle}
                className='icon'
              />
              <div className='texto-erro'>
                <strong>Erro:</strong> {erro}
              </div>
            </div>
          )}
          <div className='lc-link-esqueci-senha'>
            <Link
              to='/esqueci_senha'
              className='texto_alternativo_ciano'
            >
              <span className='lc_esqueci-senha'>Esqueci a Senha</span>
            </Link>
          </div>
          <button
            className='botoes-principais'
            onClick={handleLogin}
          >
            CONTINUAR
          </button>
          <div className='le-info-cadastro'>
            Você é novo no <span className='texto_alternativo_azul'>TRAMPOS FÁCIL</span>?
            Cadastre-se como
            <Link
              to='/cadastro_empresas'
              className='texto_alternativo_ciano'
            >
              Empresa
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginEmpresa;
