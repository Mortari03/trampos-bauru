//Importes do React
//Importes do Router-Dom
//Importes de Icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
//Importes de CSS
import "../estilo/empresa-perfil-editar.css";

//Importes de Paginas

function EmpresaPerfilEditar() {
  return(

    <div className="conteiner_editar_empresa">
      <div className="nome_empresa">
        <div id="logo"></div>
        <div className="h1_empresa">
          <h1>Nome da empresa </h1> 
        </div>
        <div>
          <FontAwesomeIcon icon={faFloppyDisk} />
        </div>
      </div>

      <div className="wave-bar"></div>

      <div>
        <h1>Foto da empresa</h1>
        <input type="file"/>
      </div>

      <div>
        <label>Nome <input type="text" placeholder="Alterar o Nome"/></label>
      </div>

      <div>
        <label>Sobre <input type="text" placeholder="Alterar o Nome"/></label>
      </div>

      <div>
        <label>Missão <input type="text" placeholder="Alterar o Nome"/></label>
      </div>

      <div>
        <label>Visão <input type="text" placeholder="Alterar o Nome"/></label>
      </div>

      <div>
        <label>Valores <input type="text" placeholder="Alterar o Nome"/></label>
      </div>

      <div>
        <label>Setor <input type="text" placeholder="Alterar o Nome"/></label>
      </div>

      <div>
        <label>Tamanho <input type="text" placeholder="Alterar o Nome"/></label>
      </div>

      <div>
        <label>Fundação <input type="text" placeholder="Alterar o Nome"/></label>
      </div>

      <div>
        <label>Email <input type="text" placeholder="Alterar o Nome"/></label>
      </div>

      <div>
        <label>Telefone <input type="text" placeholder="Alterar o Nome"/></label>
      </div>

      <div>
        <label>Endereço <input type="text" placeholder="Alterar o Nome"/></label>
      </div>

      <div>
        <label>Cidade <input type="text" placeholder="Alterar o Nome"/></label>
      </div>

      <div>
        <label>Estado <input type="text" placeholder="Alterar o Nome"/></label>
      </div>

      <div>
        <label>CEP <input type="text" placeholder="Alterar o Nome"/></label>
      </div>

      <div>
        <label>Facebook <input type="text" placeholder="Alterar o Nome"/></label>
      </div>

      <div>
        <label>Twitter <input type="text" placeholder="Alterar o Nome"/></label>
      </div>

      <div>
        <label>Linkedin <input type="text" placeholder="Alterar o Nome"/></label>
      </div>

      <div>
        <label>Instagram <input type="text" placeholder="Alterar o Nome"/></label>
      </div>

      <div>
        <button>Salvar</button>
        <button>Cancelar</button>
      </div>



    </div>
  
  )
    
}

export default EmpresaPerfilEditar;