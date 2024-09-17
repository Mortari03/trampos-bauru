import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Importando useNavigate
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faUser,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import "../estilo/login_candidato.css";
import { ModuloApi } from "../api";

function LoginCandidato() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const navigate = useNavigate(); // Inicializando o hook useNavigate

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    if (erro) {
      timer = setTimeout(() => setErro(""), 5000);
    }
    return () => clearTimeout(timer);
  }, [erro]);

  const validarLogin = () => {
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
    if (validarLogin()) {
      // Aqui você pode adicionar a lógica de autenticação, como enviar as credenciais para um servidor.
      // Se a autenticação for bem-sucedida, você redireciona para a página desejada.

      //Metodo que chama a API para adicionar o usuário
      AdicionarUsuarios(); //AQUI TEM QUE CHAMAR NO BOTAO DE CONTINUAR, QUE VAI INSERIR 

      // Exemplo de redirecionamento após login bem-sucedido
      navigate('/candidato_dashboard'); // Substitua '/pagina-destino' pela rota para onde deseja redirecionar
    }

    // Limpa os campos de entrada
    setEmail("");
    setSenha("");
  };

  const AdicionarUsuarios = async () => {
    if (email && senha) {
      
        let json = await ModuloApi.RealizarLogin(email, senha);
        if (json.usuario.id) {
            alert(json.status + ' Seja bem vindo(a) ' + json.usuario.nome);
            navigate('/candidato_dashboard');
          
        } else {
            alert('Ocorreu alguma falha')
        }
    }
    else {
        alert('Prencha as informações');
    }
}

  return (
    <div className='lc-container'>
      <div className='lc-caixa-login'>
        <header className='lc-cabecalho-login'>
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
          icon={faUser}
          className='lc-icone-usuario'
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
          onClick={AdicionarUsuarios}
        >
          CONTINUAR teste
        </button>

        <div className='lc-info-cadastro'>
          Você é novo no <span className='texto_alternativo_azul'>TRAMPOS FÁCIL</span>?
          Cadastre-se como
          <Link
            to='/cadastro_candidatos'
            className='texto_alternativo_ciano'
          >
            Candidato
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginCandidato;
