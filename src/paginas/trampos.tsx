import React, { useState } from "react";
import "../estilo/trampos.css";
import Cabecalho from "../componentes/cabecalho";
import VagaResumida from "../componentes/vagaresumida";
import VagaDetalhada from "../componentes/vagadetalhada";

type Vaga = {
  id: number;
  nomeVaga: string;
  Salario: string;
  homeOffice?: string;
  planoSaude?: string;
  ajudaCusto?: string;
  descricao: string;
  
};

// Lista de vagas disponíveis
const vagas: Vaga[] = [
  {
    id: 1, nomeVaga: "Auxiliar de Enfermagem",
    Salario: "R$ 2.500 - R$ 3.500",
    homeOffice: "Bauru, SP",
    planoSaude: "Plano de saúde + Vale-refeição + Transporte",
    ajudaCusto: "",
    descricao: "Estamos em busca de um Auxiliar de Enfermagem que tenha concluído o curso no SENAC Bauru. Se você possui habilidades em cuidados"+
    "com pacientes e trabalha bem em equipe, essa vaga é para você! Oferecemos um ambiente de aprendizado contínuo e a chance de fazer a diferença na vida das pessoas.",
    
  },
  {
    id: 2, nomeVaga: "Desenvolvedor Backend (Node.js) - Pleno",
    descricao: "Estamos em busca de um Desenvolvedor Backend Pleno com sólida experiência em Node.js para"+
      "Estamos em busca de um Desenvolvedor Backend Pleno com sólida experiência em Node.js para"+
      "integrar nosso time de tecnologia. Se você possui experiência no desenvolvimento de APIs escaláveis"+
      "e na integração de sistemas backend, essa oportunidade é para você!",
    Salario: 'R$ 4.500,00 a R$ 7.000,00',
    planoSaude: "Auxílio home office, Plano de saúde",
    homeOffice: "Bauru, SP",
    ajudaCusto: "",
  },
  {
    id: 3, nomeVaga: "Designer Gráfico",
    descricao: "Estamos à procura de um Designer Gráfico"+
    "Se você é criativo, tem domínio de ferramentas de design e ama trabalhar em equipe, essa vaga é pra você!"+
    "Aqui, você terá a oportunidade de desenvolver projetos inovadores e impactantes.",
    Salario: ' R$ 4.500 - R$ 6.000',
    homeOffice: "Bauru, SP",
    planoSaude: "Plano de saúde + Vale-refeição + Transporte",
    ajudaCusto: "",
    
    

    
  },
  
  {
    id: 4, nomeVaga: "Analista de Marketing",
    descricao: "VEstamos buscando um Analista de Marketing criativo e analítico para integrar nossa equipe. Se você tem experiência em campanhas digitais, gestão de redes sociais e análise de dados"+
    "essa vaga é para você! Valorizamos profissionais que saibam trabalhar em equipe e que estejam sempre em busca de inovação para impulsionar nossos resultados."+
    "Você terá a chance de desenvolver estratégias impactantes e colaborar em projetos que fazem a diferença.",
    Salario: 'R$ 5.000 - R$ 6.500',
    homeOffice: "Bauru, SP",
    planoSaude: "Bônus por desempenho, oportunidade de desenvolvimento profissional, plano de saúde",
    ajudaCusto: "",
  },
  {
    id: 5, nomeVaga: "Auxiliar de Obras",
    descricao: "Vaga para especialista para servente de pedrero, ira bater massa quando o pedreiro estiver com preguiça e carregar caminhão de tijolos."+
    " Se você gosta de trabalhar no sol e pegar muito peso, essa vaga é destinada a você!",
    Salario: '1.200,00',
    homeOffice: "Bauru, SP",

    planoSaude: "Agua da torneira"+ 
    "- Vale transporte"+
    "- Almoço as 17:00"+
    "- Auxilio carriola "+
    "- Auxilio Butéco",
    ajudaCusto: "",
  },
  {
    id: 6, nomeVaga: "Analista de Segurança da Informação",
    descricao: "Vaga para profissional empenhado e capacitado para exercer a função"+
    " e motivado a trabalhar na escala 7x0, sem dias de folgas e trabalho aos feriados",
    Salario: 'R$ 10.000 - R$ 15.000',
    homeOffice: "Remoto ou híbrido (Belo Horizonte, MG)",
    planoSaude: "Plano de Saúde - Vale-Refeição - Bônus por desempenho - Treinamentos em segurança cibernética",
    ajudaCusto: "",
  },
  {
    id: 7, nomeVaga: "aguardando vaga",
    descricao: "Vaga para gestor de equipe de TI com ênfase em Pessoas.",
    Salario: '1.200,00',
    homeOffice: "",
    planoSaude: "",
    ajudaCusto: "",
  },
  {
    id: 8, nomeVaga: "Auxiliar de Biqueira",
    descricao: "Vaga para especialista em desenvolvimento Java",
    Salario: '1.200,00',
    homeOffice: "",
    planoSaude: "",
    ajudaCusto: "",
  },
];

function Trampos() {
  const [vagaSelecionada, setVagaSelecionada] = useState<Vaga | null>(null);

  // Função chamada ao clicar em uma vaga
  const handleVagaClick = (vaga: Vaga) => {
    setVagaSelecionada(vaga); // Atualiza a vaga selecionada
  };

  return (
    <div>
      <Cabecalho />
      {/* <div className="Conteiner">
         <div className="VagasResumo">
          {vagas.map((vaga) => (
            <button
              key={vaga.id}
              className="VagaBotao"
              onClick={() => handleVagaClick(vaga)} // Chama a função ao clicar
            >
              <VagaResumida nomeVaga={vaga.nomeVaga} />
            </button>
          ))}
        </div>

        <div className="VagaD">
          {vagaSelecionada ? (
            <VagaDetalhada
              nomeVaga={vagaSelecionada.nomeVaga}
              descricao={vagaSelecionada.descricao}
              salario={vagaSelecionada.Salario}
            />
          ) : (
            <p>Selecione uma vaga para ver os detalhes.</p>
          )}
        </div>
      </div>
    </div> */}
      <div className="container">
        <div className="vagas-resumo">
          {vagas.map((vaga) => (
            <div
              key={vaga.id}
              className="vaga-card"
              onClick={() => handleVagaClick(vaga)}
            >
              <span className="vaga-nome">{vaga.nomeVaga}</span>
            </div>
          ))}
        </div>

        <div className="vaga-detalhe">
          {vagaSelecionada ? (
            <VagaDetalhada
              nomeVaga={vagaSelecionada.nomeVaga}
              descricao={vagaSelecionada.descricao}
              salario={vagaSelecionada.Salario}
              homeOffice={vagaSelecionada.homeOffice ?? 'Não informado'}  // Verifica se homeOffice existe
              planoSaude={vagaSelecionada.planoSaude ?? 'Não informado'}  // Verifica se planoSaude existe
              ajudaCusto={vagaSelecionada.ajudaCusto ?? 'Não informado'}  // Verifica se ajudaCusto existeo

            />
          ) : (
            <p>Selecione uma vaga para ver os detalhes.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Trampos;
