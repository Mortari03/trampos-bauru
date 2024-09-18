
export const ModuloApi = {
    

    /*LOGIN_CANDIDATO*/ 
    IncluirUsuario : async (pEmail: String, pSenha: String) => {
        let response = 
        await fetch('http://localhost:3001/usuarios/login     ',
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

    
    CarregarUusuarios: async() => {
        let response = await
        fetch('https://jsonplaceholder.typicode.com/todos/')
        let json = await response.json();
        return json;
    },

    AdicionarUsuarios : 
            async (title: string, body: string, userID:number) => {
            let response = 
            await fetch('https://jsonplaceholder.typicode.com/posts',
                {
                    method: 'POST',
                    body: JSON.stringify
                    ({
                        title,
                        body,
                        userID: 1
                    }),
                    headers: {
                        'content-Type': 'application/json'
                    }
                }
            );
        },


}