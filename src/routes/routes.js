import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Private from "./private";
import Home from "../pages/home";
import Cadastrar from "../pages/cadastrar";
import Excluir from "../pages/Excluir";
import Comprar from "../pages/comprar";
import Vender from "../pages/vender";
import Eventos from "../pages/eventos";
function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Private><Login/></Private>} />  
          <Route path="/home" element={<Private><Home/></Private>} /> 
          <Route path="/cadastrar" element={<Private><Cadastrar/></Private>} /> 
          <Route path="/excluir" element={<Private><Excluir/></Private>} /> 
          <Route path="/eventos" element={<Private><Eventos/></Private>} /> 
          <Route path="/comprar" element={<Private><Comprar/></Private>} /> 
          <Route path="/venda" element={<Private><Vender/></Private>} />  
      </Routes> 
    </BrowserRouter>
  );
}
export default RoutesApp;
//IngBar#Bolso22!