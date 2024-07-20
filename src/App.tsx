import React from 'react';
import Home from './paginas/home';
import { Routes, Route } from 'react-router-dom';
import Cadastro from './paginas/cadastro';
import Candidato from './paginas/candidato';
import Empresa from './paginas/empresa';
import './estilo/estilo.css';
import Trampos from './paginas/trampos';
import Suporte from './paginas/suporte';
import Carreiras from './paginas/carreiras';
import Quemsomos from './paginas/quemsomos';

function App() {
  return (
    <div>
      < Routes>
      
        < Route path="/" element={< Home />} />

        <Route path="/cadastro" element={< Cadastro />} />

        <Route path="/candidato" element={< Candidato />} />

        <Route path="/empresa" element={< Empresa />} />

        <Route path='/trampos' element= {< Trampos />} />

        <Route path='/suporte' element= {< Suporte />} />

        <Route path='/carreiras' element= {< Carreiras />} />

        <Route path='/quemsomos' element= {< Quemsomos />} />

      </Routes>
    </div>
  );
}

export default App;
