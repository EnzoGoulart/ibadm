import { collection, deleteDoc, getDocs, query, where } from "firebase/firestore";
import { useState } from "react";
import { toast } from "react-toastify";
import { db } from "../../firebase";

export default function Excluir() {
    const [id, setId] = useState("")
    async function excluirEvento(){ 
        try {
            const eventosRef = collection(db, "eventos"); 
            const q = query(eventosRef, where("id", "==", id));
            const querySnapshot = await getDocs(q);  
            if (!querySnapshot.empty) { 
              querySnapshot.forEach(async (doc) => { 
                await deleteDoc(doc.ref);
                toast.success(`Evento excluído.`);
              });
            } else {
              toast.error(`Nenhum documento encontrado com o nome.`);
            }
          } catch (error) {
            toast.error("Erro ao excluir evento:", error);
          }
    }
  return (
    <div>
      <p className="title">Excluir</p>
      <div id="divCad">
        <p className="subt">Id</p>
        <input className="inpCad" value={id} onChange={e=>setId(e.target.value)}/>
      </div>
      <div id="absolutebtn"> 
      <button className="btn" onClick={excluirEvento}>Confirmar</button>
      </div>
    </div>
  );
}
