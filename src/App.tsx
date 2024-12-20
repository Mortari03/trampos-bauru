//Importes do React
import React from "react";
//Importes do Router-Dom
import { Routes, Route } from "react-router-dom";
//Importes de Icones
//Importes de CSS
import "./estilo/cabecalho.css";
//Importes de Paginas
import Trampos from "./paginas/trampos";
import ParaEmpresas from "./paginas/para_empresa";
import ParaCandidato from "./paginas/para_candidato";
import Suporte from "./paginas/suporte";
import PreLogin from "./paginas/prelogin";
import LoginEmpresa from "./paginas/login_empresa";
import LoginCandidato from "./paginas/login_candidato";
import CadastroCandidatos from "./paginas/cadastro_candidato";
import CadastroEmpresa from "./paginas/cadastro_empresa";
import Senha from "./paginas/esqueci_senha";
import CandidatoVagas from "./paginas/candidatos/candidato_minhas_vagas";
import CandidatoPerfil from "./paginas/candidatos/candidato_perfil";
import CandidatoConfiguracao from "./paginas/candidatos/candidato_configuracao";
import CandidatoEntrevistasAgendadas from "./paginas/candidatos/candidato_entrevistas_agendadas";
import EmpresasPerfil from "./paginas/empresas/empresas_perfil";
import EmpresasConfiguracao from "./paginas/empresas/empresas_configuracao";
import CandidatoDashboard from "./paginas/candidatos/candidato_dashboard";
import EmpresasVerVagas from "./paginas/empresas/empresas_ver_vagas";
import Quemsomos from "./paginas/quemsomos";
import PoliticaDePrivacidade from "./paginas/politicadeprivacidade";
import AvisoLegal from "./paginas/avisolegal";
import Rodape from "./componentes/rodape";
import EmpresaDashboard from "./paginas/empresas/empresa_dashboard";
import Candidato_logado from "./paginas/candidatos/candidato_logado";

function App() {
  return (
    <div>
      <Routes>
        {/* Rotas do Menu */}
        <Route
          path='/'
          element={<LoginCandidato />}
        />

        <Route
          path='/suporte'
          element={<Suporte />}
        />

        {/* Rotas do Porque Nos ? */}
        <Route
          path='/quemsomos'
          element={<Quemsomos />}
        />
        <Route
          path='/paraempresas'
          element={<ParaEmpresas />}
        />
        <Route
          path='/paracandidatos'
          element={<ParaCandidato />}
        />

          {/* Rotas de Login */}
        <Route
          path='/prelogin'
          element={<PreLogin />}
        />
        <Route
          path='/login_empresa'
          element={<LoginEmpresa />}
        />
        <Route
          path='/trampos'
          element={<Trampos />}
        />

        <Route path="candidato_logado"
          element={<Candidato_logado />} />

        {/* Rotas de Cadastro */}
        <Route
          path='/cadastro_candidatos'
          element={<CadastroCandidatos />}
        />
        <Route
          path='/cadastro_empresas'
          element={<CadastroEmpresa />}
        />

        {/* Rota de Esqueci a Senha */}
        <Route
          path='/esqueci_senha'
          element={<Senha />}
        />

        {/* Rota de Perfil Candidatos */}
        <Route
          path='/candidato_dashboard'
          element={<CandidatoDashboard />}
        />
        <Route
          path='/candidato_vagas'
          element={<CandidatoVagas />}
        />
        <Route
          path='/candidato_entrevistas'
          element={<CandidatoEntrevistasAgendadas />}
        />
        <Route
          path='/candidato_perfil'
          element={<CandidatoPerfil />}
        />
        <Route
          path='/candidato_configuracao'
          element={<CandidatoConfiguracao />}
        />

        {/* Rota de Perfil Empresa */}

        <Route
          path='/empresa_dashboard'
          element={<EmpresaDashboard />}
        />
        <Route
          path='/empresa_perfil'
          element={<EmpresasPerfil />}
        />
        <Route
          path='/empresa_vagas_cadastradas'
          element={<EmpresasVerVagas />}
        />
        <Route
          path='/empresa_configuracao'
          element={<EmpresasConfiguracao />}
        />
        {/* Rota de Politicas de Privacidades e outras leis */}
        <Route
          path='/politica_privacidade'
          element={<PoliticaDePrivacidade />}
        />

        <Route
          path='/aviso_legal'
          element={<AvisoLegal />}
        />
      </Routes>

      <div>
        <Rodape />
      </div>
    </div>
  );
}

export default App;
