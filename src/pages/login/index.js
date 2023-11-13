import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import "./login.css";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useEffect, useState } from "react";
export default function Login(){
    const [ senha, setSenha] = useState("")
    const navigate = useNavigate();
    useEffect(()=>{
        let senhals = localStorage.getItem("senha") 
        async function logAw(){
            await signInWithEmailAndPassword(auth, "admingbar@gmail.com", senhals)
            .then(() => { 
                localStorage.setItem("senha", senhals)
                navigate("/home")
            })
            .catch((e) => { 
                console.log(e)
            });
        }
        
        logAw()
    }, [])
    async function login(){ 
        await signInWithEmailAndPassword(auth, "admingbar@gmail.com", senha)
            .then(() => { 
                localStorage.setItem("senha", senha)
                navigate("/home")
            })
            .catch((e) => {  
                console.log(e)
            });
    }
    return(
        <div id="conlog">
            <input className="inplog"/> 
            <input className="inplog" value={senha} onChange={(e)=>setSenha(e.target.value)}/> 
            <input className="inplog"/> 
            <input className="inplog"/> 
            <input className="inplog"/> 
            <button className="inplog" onClick={login}></button> 
        </div>
    )
}