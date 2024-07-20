import React from "react";
import { Link } from "react-router-dom";

function Empresa() {
    return (
        <div className="tela_cad">

            <div className="conteiner">

                <div className="imagem_cad">

                    <img className="img_ilus" src="/img/imgint.png" alt="ilustração" />

                </div>
                <div className="card_cad">

                    <div>

                        <Link to="/" className="Botao-Voltar_cand">

                            <img className="Voltar_Cand" src="/img/Voltar.png" alt="Voltar" />

                        </Link>

                    </div>

                    <div className="box_input">

                        <input type="text" placeholder="Nome da Empresa" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Senha" />
                        <input type="text" placeholder="CNPJ" />

                    </div>


                    <div className="text_bot_emp">
                        <h3><button className="accept_button_emp"></button> Li e concordo com as condições legais e a política de privacidade.</h3>
                        <br />
                        <br />
                        <h3><button className="accept_button_emp"></button> Autorizo o Trampos Facil a enviar comunicações comerciais sobre produtos, serviços e eventos dos seus parceiros e colaboradores.</h3>
                    </div>

                    <div className="Button_Cad_emp" >
                        <input type="button" value="Cadastre-se" />
                    </div>

                    <div />
                </div>
            </div>
        </div>
    )
}
export default Empresa;