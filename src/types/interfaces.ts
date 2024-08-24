// src/types/interfaces.ts

import { ReactNode } from "react";

export interface Projeto {
  nome: string;
  descricao: string;
  link: string;
}

export interface UltimoEmprego {
  cargo: string;
  empresa: string;
  duracao: string;
  descricao: string;
}

export interface Educacao {
  instituicao: string;
  grau: string;
  dataConclusao: string;
}

export interface Usuario {
  nome: string;
  bio: string;
  email: string;
  telefone: string;
  endereco: string;
  cidade: string;
  estado: string;
  cep: string;
  foto: string;
  ultimoEmprego: UltimoEmprego;
  educacao: Educacao[];
  habilidades: string[];
  certificacoes: string[];
  cursos: string[];
  projetos: Projeto[];
  areasInteresse: string[];
  curriculo: File | null;
}


export interface Vagas {
  Nomevaga: string;
  Cidade: string[];
  Estado: string[];
  Salario: string;
  Tipocontrato: string[];
  Modelotrabalho: string[];
  Turno: string;
  Beneficios: string[];
  DescricaoVaga: string; 
}
