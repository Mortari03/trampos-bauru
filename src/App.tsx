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
import Porquenos from './paginas/porquenos';

function App() {
  return (
    <div>
      < Routes>
      
        < Route path="/" element={< Home />} />

        <Route path="/Cadastro" element={< Cadastro />} />

        <Route path="/Candidato" element={< Candidato />} />

        <Route path="/Empresa" element={< Empresa />} />

        <Route path='/Trampos' element= {< Trampos />} />

        <Route path='/Suporte' element= {< Suporte />} />

        <Route path='/Carreiras' element= {< Carreiras />} />

        <Route path='/porquenos' element= {< Porquenos />} />

      </Routes>
    </div>
  );
}

export default App;
