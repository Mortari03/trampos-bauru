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
  const [tipoEntrada, settipoEntrada] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [erroEmail, seterroEmail] = useState<string>("");
  const [erroCPF, seterroCPF] = useState<string>("");

  const handleMudarEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (!validarEmail(e.target.value)) {
      seterroEmail("Por favor, insira um e-mail válido.");
    } else {
      seterroEmail("");
    }
  };

  const handleMudarCPF = (e: ChangeEvent<HTMLInputElement>) => {
    const cpfValue = e.target.value.replace(/\D/g, "");
    setCpf(cpfValue);
    if (!validarCPF(cpfValue)) {
      seterroCPF("Por favor, insira um CPF válido.");
    } else {
      seterroCPF("");
    }
  };

  const validarEmail = (email: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validarCPF = (cpf: string) => {
    return cpf.length === 11;
  };

  const handleEnviar = () => {
    if (tipoEntrada === "email") {
      console.log(`Enviando link para ${email}`);
    } else if (tipoEntrada === "cpf") {
      console.log(`Enviando link para CPF ${cpf}`);
    }
  };

  return (
    <div className="senha_corpo">
      <div className="senha_container">
        <div className="senha_topo">
          <Link to="/prelogin" className="btn_voltar">
            <FontAwesomeIcon icon={faCircleArrowLeft} />
            <span className="texto_voltar">Voltar</span>
          </Link>
          <div className="logo">
            <img src="/img/logo.png" alt="Logo" />
          </div>
        </div>
        <div className="senha_conteudo">
          <h1>
            Esqueceu a <span className="senha_cordif">senha?</span>
          </h1>
          <p>Não se preocupe, acontece com todo mundo</p>
          <div className="senha_imagem">
            <img src="/img/Senha.png" alt="Cadeado" />
          </div>
          <div className="senha_botoes">
            <button
              onClick={() => settipoEntrada("email")}
              className={tipoEntrada === "email" ? "selected" : ""}
            >
              E-mail
            </button>
            <button
              onClick={() => settipoEntrada("cpf")}
              className={tipoEntrada === "cpf" ? "selected" : ""}
            >
              Não lembro o e-mail
            </button>
          </div>
          {tipoEntrada === "email" && (
            <div className="input-container">
              <label htmlFor="email"></label>
              <p>
                Escreva seu e-mail cadastrado no{" "}
                <strong className="trampofacil_cor">Trampos Fácil</strong> e lhe
                enviaremos um link para definir sua nova senha
              </p>
              <input
                type="email"
                id="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={handleMudarEmail}
                className={erroEmail ? "input-error" : ""}
              />
              {erroEmail && <p className="error-message">{erroEmail}</p>}
              <button onClick={handleEnviar} className="enviar-button">
                Enviar
              </button>
            </div>
          )}
          {tipoEntrada === "cpf" && (
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
                onChange={handleMudarCPF}
                className={erroCPF ? "input-error" : ""}
              />
              {erroCPF && <p className="error-message">{erroCPF}</p>}
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
