export const ModuloApi = {
   
    RealizarLogin : async (pEmail: String, pSenha: String) => {
        let response =
        await fetch('http://localhost:3001/usuarios/login',
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
        await fetch('http://localhost:3001/usuarios/login',
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
 
      /*00000000000000000000*/
    IncluirVaga : async (pNome: String, pSalario: String) => {
        let response =
        await fetch(' HTTPS://LOCALHOST/LOGIN  ',
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
                await fetch('http://localhost:3001/usuarios/',
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
                        'content-Type': 'application/json'
                    }
                }
            );
           
       let json = await response.json();
 
       return json;
        },
}