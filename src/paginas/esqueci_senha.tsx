//Importes do React
import { ChangeEvent, useState } from "react";
//Importes do Router-Dom
import { Link } from "react-router-dom";
//Importes de Icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
//Importes de CSS
import "../estilo/esqueci_senha.css";
//Importes de Paginas

function Senha() {
  const [inputType, setInputType] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [cpfError, setCpfError] = useState<string>("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (!validateEmail(e.target.value)) {
      setEmailError("Por favor, insira um e-mail válido.");
    } else {
      setEmailError("");
    }
  };

  const handleCpfChange = (e: ChangeEvent<HTMLInputElement>) => {
    const cpfValue = e.target.value.replace(/\D/g, "");
    setCpf(cpfValue);
    if (!validateCpf(cpfValue)) {
      setCpfError("Por favor, insira um CPF válido.");
    } else {
      setCpfError("");
    }
  };

  const validateEmail = (email: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validateCpf = (cpf: string) => {
    return cpf.length === 11;
  };

  const handleEnviar = () => {
    if (inputType === "email") {
      console.log(`Enviando link para ${email}`);
    } else if (inputType === "cpf") {
      console.log(`Enviando link para CPF ${cpf}`);
    }
  };

  return (
    <div className="senha_corpo">
      <div className="senha_container">
        <div className="senha_topo">
          <Link to="/" className="senha_voltar_btn">
            <FontAwesomeIcon icon={faCircleArrowLeft} />
            <span className="senha_voltar">Voltar</span>
          </Link>
          <div className="logo">
            <img src="/img/logo.png" alt="Logo" />
          </div>
        </div>
        <div className="senha_conteudo">
          <h1>Esqueceu a senha?</h1>
          <p>Não se preocupe, acontece com todo mundo</p>
          <div className="senha_imagem">
            <img src="/img/Senha.png" alt="Cadeado" />
          </div>
          <div className="senha_botoes">
            <button
              onClick={() => setInputType("email")}
              className={inputType === "email" ? "selected" : ""}
            >
              E-mail
            </button>
            <button
              onClick={() => setInputType("cpf")}
              className={inputType === "cpf" ? "selected" : ""}
            >
              Não lembro o e-mail
            </button>
          </div>
          {inputType === "email" && (
            <div className="input-container">
              <label htmlFor="email"></label>
              <p>
                Escreva seu e-mail cadastrado no Trampos Fácil e lhe enviaremos
                um link para definir sua nova senha
              </p>
              <input
                type="email"
                id="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={handleEmailChange}
                className={emailError ? "input-error" : ""}
              />
              {emailError && <p className="error-message">{emailError}</p>}
              <button onClick={handleEnviar} className="enviar-button">
                Enviar
              </button>
            </div>
          )}
          {inputType === "cpf" && (
            <div className="input-container">
              <label htmlFor="cpf"></label>
              <p>
                Digite o seu CPF e enviaremos o link para definir sua nova senha
                ao e-mail ou telefone associado ao seu CPF
              </p>
              <input
                type="text"
                id="cpf"
                placeholder="Digite seu CPF | CNPJ"
                value={cpf}
                onChange={handleCpfChange}
                className={cpfError ? "input-error" : ""}
              />
              {cpfError && <p className="error-message">{cpfError}</p>}
              <button onClick={handleEnviar} className="enviar-button">
                Enviar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Senha;
