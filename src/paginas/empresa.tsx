import React from "react";
import { Link } from "react-router-dom";

function Empresa() {
    return (

        <div className="tela_cad">

            <div className="card_cad">

            <div>
                    <Link to="/" className="Botao-Voltar_cand">
                        <img className="Voltar_Cand" src="/img/Voltar.png" alt="Voltar" />
                    </Link>
                </div>

                <h1> Publique Suas Vagas de Emprego Aqui!</h1>

                <h2> Crie sua conta para acessar e crie sua Vagas. </h2>

                <br />
                <br />

                <h3>Comece Seu Cadastro Aqui!</h3>
                <br />
                <br />
                <div className="box_input">
                    <input type="Nome Empresa" placeholder="Nome Empresa" />
                    <input type="Email" placeholder="Email" />
                    <input type="password" placeholder="Senha" />
                    <input type="cpf" placeholder="CNPJ" />
                </div>

                <div>
                    <h3> <button className="accept_button"></button>  Li e concordo com as condições legais e a política de privacidade.</h3>
                    <h3> <button className="accept_button"></button>  Autorizo o Trampos Facil a enviar comunicações comerciais sobre <br />
                        produtos, serviços e eventos dos seus parceiros e colaboradores.</h3>

                </div>

                <div>

                    <input className="Button_Cad" type="button" value="Cadastre-se" />

                </div>

            </div >
        </div>
    )
}

export default Empresa;