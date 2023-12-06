import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Private({ children }) {
    
    const navigate = useNavigate();
    useEffect(()=>{ 
        async function logAw(){
            let senha  = localStorage.getItem("senha");  
            await signInWithEmailAndPassword(auth, "admingbar@gmail.com", senha)
            .then(() => {  
                return children;
            }).catch(e => {  
                return navigate("/");
            })
        }
        
        logAw()
    },[])

    return children 
}