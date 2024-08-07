//Importes do React
import React from "react";
//Importes do Router-Dom
//Importes de Icones
//Importes de CSS
import "../estilo/empresas_cadastrar_vagas.css";
//Importes de Paginas

function EmpresasCadastrarVagas() {
  return (
    <div className='conteiner-princ'>
      <form className='form'>
        <div className='h2'>
          <h2>Cadastrar Vagas</h2>
        </div>

        <div className='nome-vaga'>
          <label>
            Nome da Vaga
            <input
              type='text'
              placeholder='Digite o nome da vaga'
            />
          </label>
        </div>

        <div className='regiao'>
          <label>
            Cidade
            <input
              type='text'
              placeholder='Digite a cidade'
            />
          </label>
          <label>
            Estado{" "}
            <input
              type='text'
              placeholder='Selecione o Estado'
            />
          </label>
        </div>

        <div className='salario'>
          <label>
            Salário{" "}
            <input
              type='text'
              placeholder='Digite o salário fixo'
            />
          </label>
        </div>

        <div className='btn-salario'>
          <button>Ocultar Salário</button>
        </div>

        <div className='modalidade-modelo'>
          <label>
            Modalidade de Contratação{" "}
            <input
              type='text'
              placeholder='Selecione a Modalidade'
            />
          </label>
          <label>
            Modelo de Trabalho
            <input
              type='text'
              placeholder='Selecione o Modelo'
            />
          </label>
        </div>

        <div className='horario-trabalho'>
          <label>
            Horário de Trabalho{" "}
            <input
              type='text'
              placeholder='Digite o horário de trabalho'
            />
          </label>
        </div>

        <div className='beneficio1'>
          <div className='beneficio'>
            <label>
              Benefícios{" "}
              <input
                type='text'
                placeholder='Digite o Benefício'
              />
            </label>
          </div>
          <div className='btn-remover'>
            <button>Remover</button>
          </div>
        </div>

        <div className='btn-adicionar'>
          <button>Adicionar Benefício</button>
        </div>

        <div className='descricao-vaga'>
          <label>Descrição Completa da Vaga</label>
          <textarea
            name='message'
            placeholder='Descreva a vaga'
          ></textarea>
        </div>

        <div className='ocultar-informcao'>
          <input type='checkbox' />
          <label>Deseja ocultar as informações da empresa contrate ?</label>
        </div>

        <div className='btn-confirmacao-final'>
          <button>Publicar vaga</button>
          <button>Cancelar</button>
        </div>
      </form>
    </div>
  );
}

export default EmpresasCadastrarVagas;
