// Usuario

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


<<<<<<< HEAD
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
=======
// Empresas

export interface EmpresaInfo {
  nome: string;
  sobre: string;
  email: string;
  telefone: string;
  endereco: string;
  cidade: string;
  estado: string;
  cep: string;
  website: string;
  setor: string;
  tamanho: string;
  anoFundacao: string;
  foto: string;
  missao: string;
  visao: string;
  valores: string;
  facebook: string;
  twitter: string;
  linkedin: string;
  instagram: string;
}
>>>>>>> c4f9e44b84ef4000767c686d0729742f644f9c1a
