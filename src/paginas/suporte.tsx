import React from "react";
import { Link } from "react-router-dom";


function Suporte() {
    return (
        <div>
            <div className="Sup"> <h2>Suporte</h2></div>
            <div className="Faq">
                <h2>FAQ</h2>
            </div>

            <div className='DivCentro'>

                <nav>
                    <ul className="Quadro1">
                        <li className="Barra1"> <a href="#"> Como fazer seu cadastro? </a>
                            <ul>
                                <li> Lorem ipsum dolor sit amet.
                                </li>
                            </ul>

                        </li>

                        <li className="Barra1"> <a href="#">Como cadastrar meu currículo? </a>
                            <ul>
                                <li>Lorem ipsum dolor sit amet.</li>
                                </ul>                      
                         </li>


                    </ul>

                    <li className="Barra1"> <a href="#"> Posso fazer alterações em meu currículo após o cadastro? </a> 
                        <ul>
                            <li>Lorem ipsum dolor sit amet.</li>
                        </ul>
                    
                    </li>

                    <li className="Barra1"> <a href="#">Onde e como vou receber o retorno/feedback das empresas? </a> 
                        <ul>
                            <li>Lorem ipsum dolor sit amet.</li>
                        </ul>
                    
                    </li>


                </nav>
                <div className='f7'>
                    

                </div>

                <ul className='Quadro2'>
                    <li className="Barra1">Como cadastro uma ou mais vagas? </li>
                    <li className="Barra1">Como insiro informações sobre minha empresa na plataforma? </li>
                    <li className="Barra1">Como altero ou retiro uma oferta de vaga do meu perfil empresarial?  </li>
                    <li className="Barra1">Terei algum custo adicional ao usar o Trampo Facil para Empresas? </li>
                </ul>

            </div>

            <div className='rodape'>
                <h4>Ainda tem dúvidas?<br />
                    Preencha nosso formulário do Google aqui ou <br />

                    nos mande um e-mail em suporte@trampofacil.com</h4> <br />


            </div>

        </div>
    )

}

export default Suporte