import React from 'react';
import Home from './paginas/home';
import { Routes, Route } from 'react-router-dom';
import Cadastro from './paginas/cadastro';
import Candidato from './paginas/candidato';
import Empresa from './paginas/empresa';
import Detalhesobre from '../src/paginas/detalhesobre'
import './estilo/estilo.css';
function App() {
  return (
    <div>
      < Routes>

        < Route path="/" element={< Home />} />

        <Route path="/Cadastro" element={< Cadastro/>} />

        <Route path="/Candidato" element={< Candidato/>} />

        <Route path="/Empresa" element={< Empresa/>} />
        
      

      </Routes>
    </div>
  );
}

export default App;
