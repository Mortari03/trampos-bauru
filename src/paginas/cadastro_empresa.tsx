import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import "../estilo/cadastro_empresa.css";

function CadastroEmpresa() {
  // Estados para controlar os inputs, erros e sucesso
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState(false);
  const [aceitoTermos, setAceitoTermos] = useState(false);
  const [autorizoComunicar, setAutorizoComunicar] = useState(false);

  // Hook para ocultar a mensagem de erro ou sucesso após um tempo
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (erro || sucesso) {
      timer = setTimeout(() => {
        setErro("");
        setSucesso(false);
      }, 5000); // 5 segundos
    }
    return () => clearTimeout(timer);
  }, [erro, sucesso]);

  // Validação básica no frontend
  const validarFormulario = () => {
    if (!nome || !email || !senha || !confirmarSenha || !cnpj) {
      setErro("Todos os campos são obrigatórios.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setErro("Por favor, insira um e-mail válido.");
      return false;
    }
    if (senha !== confirmarSenha) {
      setErro("As senhas não correspondem.");
      return false;
    }
    if (!/^\d{14}$/.test(cnpj)) {
      setErro("CNPJ deve conter 14 dígitos.");
      return false;
    }
    if (!aceitoTermos) {
      setErro("Você deve aceitar os termos e a política de privacidade.");
      return false;
    }
    if (!autorizoComunicar) {
      setErro("Você deve autorizar o envio de comunicações comerciais.");
      return false;
    }
    setErro("");
    return true;
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validarFormulario()) {
      try {
        const response = await fetch("/api/cadastro", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nome,
            email,
            senha,
            cnpj,
          }),
        });

        if (response.ok) {
          setSucesso(true);
          setNome("");
          setEmail("");
          setSenha("");
          setConfirmarSenha("");
          setCnpj("");
          setAceitoTermos(false);
          setAutorizoComunicar(false);
        } else {
          setErro("Erro ao realizar o cadastro. Tente novamente.");
        }
      } catch (error) {
        setErro("Erro ao realizar o cadastro. Tente novamente.");
      }
    }
  };

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
            Já Imaginou o jeito fácil de publicar e acompanhar Suas Vagas?
          </h1>
          <p className='ce-subtitle'>
            Crie sua conta para acessar e publicar milhares de vagas.
          </p>

          <form
            className='ce-form-group'
            onSubmit={handleSubmit}
          >
            <input
              type='text'
              placeholder='Nome da Empresa'
              className='ce-input'
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <input
              type='email'
              placeholder='Email'
              className='ce-input'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='password'
              placeholder='Senha'
              className='ce-input'
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <input
              type='password'
              placeholder='Confirme a Senha'
              className='ce-input'
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
            />
            <input
              type='text'
              placeholder='CNPJ'
              className='ce-input'
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value)}
            />

            <div className='ce-terms'>
              <label className='ce-checkbox-label'>
                <input
                  type='checkbox'
                  className='ce-checkbox'
                  checked={aceitoTermos}
                  onChange={(e) => setAceitoTermos(e.target.checked)}
                />
                Li e concordo com as condições legais e a&nbsp;
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
                  checked={autorizoComunicar}
                  onChange={(e) => setAutorizoComunicar(e.target.checked)}
                />
                Autorizo o Trampos Fácil a enviar comunicações comerciais sobre produtos,
                serviços e eventos dos seus parceiros e colaboradores.
              </label>
            </div>
            {/* Exibir mensagem de erro se houver */}
            {erro && (
              <div className='ce-erro'>
                <FontAwesomeIcon
                  icon={faExclamationCircle}
                  className='icon'
                />
                <div className='texto-erro'>
                  <strong>Erro:</strong> {erro}
                </div>
              </div>
            )}

            {/* Exibir mensagem de sucesso se houver */}
            {sucesso && (
              <div className='ce-sucesso'>
                <FontAwesomeIcon
                  icon={faExclamationCircle}
                  className='icon'
                />
                <div className='texto-sucesso'>
                  <strong>Sucesso!</strong> Cadastro realizado com sucesso.
                </div>
              </div>
            )}

            <button
              className='ce-submit-btn'
              type='submit'
            >
              Cadastre-se
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CadastroEmpresa;
