import { json } from "stream/consumers";
import CadastroCandidatos from "./paginas/cadastro_candidato";
import Senha from "./paginas/esqueci_senha";
import { doc } from "prettier";

export const ModuloApi = {
   
    RealizarLogin : async (pEmail: String, pSenha: String) => {
        let response =
        await fetch('http://localhost:3000/usuarios/login',
            {
                method: 'POST',
                body: JSON.stringify
                ({
                    email: pEmail,
                    senha: pSenha
                 
                }),
                headers: {
                    'content-Type': 'application/json'
                }
            }
        );
 
       let json = await response.json();
 
       return json;
 
    },
   
 
    /*LOGIN_CANDIDATO*/
    IncluirUsuario : async (pEmail: String, pSenha: String) => {
        let response =
        await fetch('http://localhost:3000/usuarios/login',
            {
                method: 'POST',
                body: JSON.stringify
                ({
                    email: pEmail,
                    senha: pSenha
                }),
                headers: {
                    'content-Type': 'application/json'
                }
            }
        );
 
       let json = await response.json();
 
       return json;
 
    },
 

    CadastroCandidatos : async (pnome: string, pEmail: string, pSenha: string, pCpf: string,) =>  {
        let response =
        await fetch('http://localhost:3000/api/cadastro',
            {
                method: 'post',
                body: JSON.stringify
                ({
                    nome: pnome,
                    email: pEmail,
                    Senha: pSenha,
                    doc: pCpf,
                })
            }
        )
    },

      /*00000000000000000000*/
    IncluirVaga : async (pNome: String, pSalario: String) => {
        let response =
        await fetch('https://localhost/login',
            {
                method: 'POST',
                body: JSON.stringify
                ({
                    nome: pNome,
                    salario: pSalario
                 
                }),
                headers: {
                    'content-Type': 'application/json'
                }
            }
        );
 
       let json = await response.json();
 
       return json;
 
    },
 
    CarregarUsuarios: async() => {
        let response = await
        fetch('https://jsonplaceholder.typicode.com/todos/')
        let json = await response.json();
        return json;
    },
 
    /*Cadastro Candidato*/
    AdicionarUsuarios :
            async (pNome: string, pEmail: string, pSenha: string, pCpf: string) => {
 
            let response =
                await fetch('http://localhost:3000/usuarios/',
                {
                    method: 'POST',
                    body: JSON.stringify
                    ({
                        nome: pNome,
                        doc: pCpf,
                        email: pEmail, 
                        senha: pSenha
                        // nome: pNome,
                        // idade: 18,
                        // cidade: '',
                        // doc: pCpf,
                        // telefone: '14991075513',
                        // email: pEmail,
                        // email: pEmail, 
                        // senha: pSenha    
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
           
       let json = await response.json();
 
       return json;
        },
}