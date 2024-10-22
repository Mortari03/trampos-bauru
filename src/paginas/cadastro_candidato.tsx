import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faExclamationCircle,
}
from "@fortawesome/free-solid-svg-icons";
import "../estilo/cadastro_candidato.css";
import "../paginas/candidatos/candidato_perfil"
import { ModuloApi } from "../api";



function CadastroCandidatos() {
  // Estados para controlar os inputs, erros e sucesso
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [cpf, setCpf] = useState("");
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState(false);
  const [aceitoTermos, setAceitoTermos] = useState(false);
  const [autorizoComunicar, setAutorizoComunicar] = useState(false);
 const navigate = useNavigate(); 
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
    if (!nome || !email || !senha || !confirmarSenha || !cpf) {
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
    if (!/^\d{11}$/.test(cpf)) {
      setErro("CPF deve conter 11 dígitos.");
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
            cpf,
          }),
        });
 
        if (response.ok) {
          setSucesso(true);
          setNome("");
          setEmail("");
          setSenha("");
          setConfirmarSenha("");
          setCpf("");
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
 
 
  const CadastrarUsuario = async () => {


    if (validarFormulario()) {
      
    navigate('/candidato_perfil')

 
      // let json = await ModuloApi.AdicionarUsuarios(nome, email, senha, cpf);
      // if (json.message) {
      //   alert('Ocorreu alguma falha ' + json.message);
      // }
      // else {
      //   alert('cadastro realizado com sucesso!')   
      //   navigate('/candidato_perfil')
      // }


     
  }
}
 
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
        <div
          className='cc-form-group'
         
        >
          <input
            type='text'
            placeholder='Nome Completo'
            className='cc-input'
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type='email'
            placeholder='Email'
            className='cc-input'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Senha'
            className='cc-input'
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <input
            type='password'
            placeholder='Confirmar Senha'
            className='cc-input'
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
          />
          <input
            type='text'
            placeholder='CPF'
            className='cc-input'
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
 
          {/* Exibir mensagem de erro se houver */}
          {erro && (
            <div className='cc-erro'>
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
            <div className='lc-sucesso'>
              <FontAwesomeIcon
                icon={faExclamationCircle}
                className='icon'
              />
              <div className='texto-sucesso'>
                <strong>Sucesso!</strong> Cadastro realizado com sucesso.
              </div>
            </div>
          )}
 
          <div className='cc-terms'>
            <label className='cc-checkbox-label'>
              <input
                type='checkbox'
                className='cc-checkbox'
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
            <label className='cc-checkbox-label'>
              <input
                type='checkbox'
                className='cc-checkbox'
                checked={autorizoComunicar}
                onChange={(e) => setAutorizoComunicar(e.target.checked)}
              />
              Autorizo o Trampos Fácil a enviar comunicações comerciais sobre produtos,
              serviços e eventos dos seus parceiros e colaboradores.
            </label>
          </div>
          <button
            className='botoes-principais'
            type='submit'
            onClick={CadastrarUsuario}
          >
            Cadastre-se
          </button>
        </div>
      </div>
    </div>
  </div>
);
}
 
export default CadastroCandidatos;
