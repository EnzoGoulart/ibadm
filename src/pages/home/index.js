import { useEffect } from "react"
import "./home.css"
import { useNavigate } from "react-router-dom"
export default function Home(){
    const navigate = useNavigate()
    return(
        <div id="conhom">
            <button onClick={()=>navigate("/cadastrar")} className="btnhom">Cadastrar</button>
            <button onClick={()=>navigate("/excluir")}  className="btnhom">Excluir</button>
            <button onClick={()=>navigate("/eventos")}  className="btnhom">Eventos</button>
            <button  onClick={()=>navigate("/compra")} className="btnhom">Compra</button>
            <button onClick={()=>navigate("/venda")}  className="btnhom">Venda</button> 
        </div>
    )
}