import "../../estilo/VagaResumo.css"
import { Vagas } from "../../types/interfaces";

interface DetalheVagasProps {
    vaga: Vagas;
  }
  
  function VagaResumo ({ vaga }: DetalheVagasProps) {
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
        </div>
      </div>
    );
  }

export default VagaResumo;