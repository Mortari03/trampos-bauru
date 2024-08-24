import "../../estilo/DetalheVaga.css"
import { Vagas } from "../../types/interfaces"; // Corrija o caminho se necessário

interface DetalheVagasProps {
  vaga: Vagas;
}

function DetalheVagas({ vaga }: DetalheVagasProps) {
  return (
    <div className="Conteiner-detalhe-vagas">
      <div className="tela-detalhe">
      <h1>{vaga.Nomevaga}</h1>
      <h3>{vaga.Cidade}, {vaga.Estado}</h3>
      <p>Salário: {vaga.Salario}</p>
      <p>Tipo de Contrato: {vaga.Tipocontrato}</p>
      <p>Modelo de Trabalho: {vaga.Modelotrabalho}</p>
      <p>Turno: {vaga.Turno}</p>
      <h4>Benefícios:</h4>
      <ul>
        {vaga.Beneficios.map((beneficio, index) => (
          <li key={index}>{beneficio}</li>
        ))}
      </ul>
      <h4>Descrição da Vaga:</h4>
      <p>{vaga.DescricaoVaga}</p>
      </div>
    </div>
  );
}

export default DetalheVagas;
