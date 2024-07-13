import React from "react";
import { Link } from "react-router-dom";

function Candidato() {
    return (


        <div className="tela_cad">

            <div className="card_cad">

                <h1>  O Seu Novo Proximo Emprego Está Aqui!</h1>

                <h2> Crie sua conta para acessar e candidate-se à milhares de vagas. </h2>

                <h3>Entre e comece a se candidatar</h3>

                <div className="box_button">

                    <button className="cad_conta_google">Google</button>

                </div>

                <h3>Ou Continue seu Cadastro Aqui!</h3>

                <div className="box_input">
                    <input type="Nome Completo" placeholder="Nome Completo" />
                    <input type="Email" placeholder="Email" />
                    <input type="password" placeholder="Senha" />
                    <input type="Number" placeholder="CPF" />
                    <select className="box_select" >
                        <option value="" disabled selected>Área de Atuação</option>
                        <option value="tecnologia">Tecnologia</option>
                        <option value="saude">Saúde</option>
                        <option value="educacao">Educação</option>
                        <option value="administracao">Administração</option>
                        <option value="engenharia">Engenharia</option>
                    </select>
                </div>

                <div>
                    <h3> <button className="accept_button"></button>  Li e concordo com as condições legais e a política de privacidade.</h3>
                    <h3> <button className="accept_button"></button>  Autorizo o Trampos Facil a enviar comunicações comerciais sobre <br />
                        produtos, serviços e eventos dos seus parceiros e colaboradores.</h3>
                 
                </div>
            </div >

        </div >


    )
}

export default Candidato;