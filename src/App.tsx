import React from "react";
import "./App.css";
import "./reset.css";
import "./componentes/estaticos/navbar/Navbar";
import "./pages/sobre/Sobre.tsx";
import Navbar from "./componentes/estaticos/navbar/Navbar";
import Projetos from "./pages/projetos/Projetos";
import Contato from "./pages/contato/Contato";
import Sobre from "./pages/sobre/Sobre";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Projetos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </Router>
     
        
     
      
   
  );
}
export default App;
