//Importes do React
import React from "react";
//Importes do Router-Dom
import { Routes, Route } from "react-router-dom";
//Importes de Icones
//Importes de CSS
import "./estilo/cabecalho.css";
//Importes de Paginas
import Trampos from "./paginas/trampos";
import Carreiras from "./paginas/carreiras";
import QuemSomos from "./paginas/quemsomos";
import ParaEmpresas from "./paginas/para_empresa";
import ParaCandidato from "./paginas/para_candidato";
import Suporte from "./paginas/suporte";
import PreLogin from "./paginas/prelogin";
import LoginEmpresa from "./paginas/login_empresa";
import LoginCandidato from "./paginas/login_candidato";
import CadastroCandidatos from "./paginas/cadastro_candidato";
import CadastroEmpresa from "./paginas/cadastro_empresa";
import Senha from "./paginas/esqueci_senha";
import CandidatoVagas from "./paginas/candidato_vagas";
import CandidatoPerfil from "./paginas/candidato_perfil";
import CandidatoConfiguracao from "./paginas/candidato_configuracao";
import EmpresasCadastrarVagas from "./paginas/empresas_cadastrar_vagas";
import EmpresasPerfil from "./paginas/empresas_perfil";
import EmpresasVagas from "./paginas/empresas_vagas";
import EmpresasConfiguracao from "./paginas/empresas_configuracao";
import Cabecalho_Empresa from "./componentes/cabecalho_empresa";
import Cabecalho_Candidato from "./componentes/cabecalho_candidato";

function App() {
  return (
    <div>

      <Routes>
        {/* Rotas do Menu */}
        <Route path="/" element={<Trampos />} />
        <Route path="/carreiras" element={<Carreiras />} />
        <Route path="/suporte" element={<Suporte />} />
        {/* Rotas do Porque Nos ? */}


        <Route path="/quemsomos" element={<QuemSomos />} />
        <Route path="/paraempresas" element={<ParaEmpresas />} />
        <Route path="/paracandidatos" element={<ParaCandidato />} />
        {/* Rotas de Login */}


        <Route path="/prelogin" element={<PreLogin />} />
        <Route path="/login_empresa" element={<LoginEmpresa />} />
        <Route path="/login_candidato" element={<LoginCandidato />} />
        {/* Rotas de Cadastro */}


        <Route path="/cadastro_candidatos" element={<CadastroCandidatos />} />
        <Route path="/cadastro_empresas" element={<CadastroEmpresa />} />
        {/* Rota de Esqueci a Senha */}


        <Route path="/esqueci_senha" element={<Senha />} />
        {/* Rota de Perfil Candidatos */}


        <Route path="/candidato_vagas" element={<CandidatoVagas />} />
        <Route path="/candidato_perfil" element={<CandidatoPerfil />} />
        <Route
          path="/candidato_configuracao"
          element={<CandidatoConfiguracao />}
        />
        {/* Rota de Perfil Empresa */}

        <Route path="/cabecalho_empresa" element={<Cabecalho_Empresa />} />
        {/*importe de cabeçalho de empresa logada*/}
          
        <Route path="/empresas_configuracao" element={<EmpresasConfiguracao />} />
        { /*configuraçao do cabecalho de empresas*/ }

        <Route path="cabecalho_candidato" element={<Cabecalho_Candidato />} />
        {/*Configuração do cabecalho candidato*/}

        <Route
          path="/empresa_cadastrar_vagas"
          element={<EmpresasCadastrarVagas />}
        />
        <Route path="/empresa_perfil" element={<EmpresasPerfil />} />
        <Route path="/empresa_vagas" element={<EmpresasVagas />} />
        <Route
          path="/empresa_configuracao"
          element={<EmpresasConfiguracao />}
        />
    




      </Routes>
    </div>
  );
}

export default App;
