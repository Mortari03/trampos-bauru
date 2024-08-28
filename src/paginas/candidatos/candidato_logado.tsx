import Cabecalho from "../../componentes/cabecalho";
import DetalheVagas from "../../componentes/DetalheVagas";
import VagaResumo from "../../componentes/VagaResumo";
import { Vagas } from "../../types/interfaces";
import "../../estilo/candidato_logado.css";

function candidato_logado() {

    const vagaExemplo: Vagas = {
        Nomevaga: "Desenvolvedor Full Stack",
        Cidade: ['Bauru'],
        Estado: ["SP"],
        Salario: "R$ 8.000,00",
        Tipocontrato: ["CLT"],
        Modelotrabalho: ["Remoto"],
        Turno: "Diurno",
        Beneficios: ["Vale Refeição", "Assistência Médica", "Home Office"],
        DescricaoVaga: "Atuar no desenvolvimento de aplicações web usando React e NestJS."
    };


    return (
        <div> 
            <Cabecalho />
            <div className="conteudo">
               

                <div className="VagaR">
                    <VagaResumo vaga={vagaExemplo} />
                </div>

                <div className="VagaD">
                    <DetalheVagas vaga={vagaExemplo} />
                </div>
            </div>
        </div>
    )
}

export default candidato_logado;