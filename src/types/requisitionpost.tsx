import { ChangeEvent, useState } from "react";
import { Usuario } from "../types/usuario";

function RequisicaoPost() {
  // Estados
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [addTitulo, setAddTitulo] = useState("");
  const [addDetalhe, setAddDetalhe] = useState("");

  // Handlers de input
  const HandleChangeTitulo = (info: ChangeEvent<HTMLInputElement>) => {
    setAddTitulo(info.target.value);
  };

  const HandleChangeDetalhe = (info: ChangeEvent<HTMLInputElement>) => {
    setAddDetalhe(info.target.value);
  };

  // Função para carregar usuários (GET)
  const CarregarUsuarios = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    if (response.ok) {
      const json = await response.json();
      const Dados = Array.isArray(json) ? json : [json];
      setUsuarios(Dados);
    } else {
      alert("Erro ao carregar os dados");
    }
  };

  // Função para adicionar usuários (POST)
  const AdicionarUsuarios = async () => {
    if (addTitulo && addDetalhe) {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/", {
        method: "POST",
        body: JSON.stringify({
          title: addTitulo,
          body: addDetalhe,
          userId: 1,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const json = await response.json();
        if (json.id) {
          alert("Post adicionado com sucesso!");
          setUsuarios((usuarios) => [...usuarios, json]);
        } else {
          alert("Ocorreu alguma falha ao processar o post");
        }
      } else {
        alert("Erro ao adicionar o usuário");
      }
    } else {
      alert("Preencha as informações");
    }
  };

  return (
    <div>
      <h1>Cadastro de Usuários</h1>
      <input type="text" placeholder="Título" onChange={HandleChangeTitulo} />
      <br />
      {addTitulo}
      <br />
      <input type="text" placeholder="Detalhe do Item" onChange={HandleChangeDetalhe} />
      <br />
      {addDetalhe}
      <br />
      <button onClick={CarregarUsuarios}>Carregar</button>
      <button onClick={AdicionarUsuarios}>Adicionar</button>

      {usuarios.map((item, index) => (
        <div key={index}>
          <h2>Dados de Usuário</h2>
          Título: {item.title} <br />
          UserId: {item.userId} <br />
          Id: {item.id} <br />
        </div>
      ))}
    </div>
  );
}

export default RequisicaoPost;
