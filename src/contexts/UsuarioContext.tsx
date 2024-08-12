// src/contexts/UsuarioContext.tsx

import React, { createContext, useContext, useState, ReactNode } from "react";
import { Usuario } from "../types/interfaces";

interface UsuarioContextType {
  userInfo: Usuario;
  setUserInfo: React.Dispatch<React.SetStateAction<Usuario>>;
}

const UsuarioContext = createContext<UsuarioContextType | undefined>(undefined);

export const UsuarioProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userInfo, setUserInfo] = useState<Usuario>({
    nome: "João Silva",
    bio: "Desenvolvedor Frontend apaixonado por criar interfaces intuitivas.",
    email: "joao.silva@email.com",
    telefone: "(11) 1234-5678",
    endereco: "Rua Exemplo, 123",
    cidade: "São Paulo",
    estado: "SP",
    cep: "01234-567",
    foto: "https://via.placeholder.com/150?text=Foto+de+Perfil",
    ultimoEmprego: {
      cargo: "Desenvolvedor Frontend",
      empresa: "Tech Solutions",
      duracao: "Jan 2020 - Presente",
      descricao: "Desenvolvimento de aplicações web e mobile com React.",
    },
    educacao: [
      {
        instituicao: "Universidade de São Paulo",
        grau: "Bacharel em Ciência da Computação",
        dataConclusao: "2020",
      },
    ],
    habilidades: ["JavaScript", "React", "CSS", "TypeScript"],
    certificacoes: ["Certificação React", "Certificação Frontend"],
    cursos: ["Curso de React Avançado", "Curso de UX/UI"],
    projetos: [
      {
        nome: "Projeto A",
        descricao: "Um projeto incrível de desenvolvimento web.",
        link: "https://example.com/projeto-a",
      },
    ],
    areasInteresse: ["Desenvolvimento Web", "Design de Interfaces"],
    curriculo: null,
  });

  return (
    <UsuarioContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UsuarioContext.Provider>
  );
};

export const useUsuario = () => {
  const context = useContext(UsuarioContext);
  if (!context) {
    throw new Error("useUsuario must be used within a UsuarioProvider");
  }
  return context;
};
