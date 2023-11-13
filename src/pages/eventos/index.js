import { useEffect, useState } from "react";
import "./eventos.css";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../firebase";
export default function Eventos() {
  const [loading, setLoading] = useState(false);
  const [dados, setDados] = useState([]);
  useEffect(() => {
    async function mostragrid() {
      setLoading(true);
      try {
        const postsRef = collection(db, "eventos");
        const q = query(postsRef);
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const data = querySnapshot.docs.map((doc) => doc.data());
          setDados(data);
        } else {
          console.log("Documento não encontrado no Firestore.");
        }
      } catch (error) {
        console.error("Erro ao obter usuário:", error);
      } finally {
        setLoading(false);
      }
    }
    mostragrid();
  }, []);
  if (loading) {
    return <div>carregando</div>;
  }
  return (
    <div>
      <p className="title">Eventos</p>
      <div id="grd">
        <div id="headerGrd">
          <div id="idGrdh">
            <p>id</p>
          </div>
          <div id="nomeGrdh">
            <p>nome</p>
          </div>
          <div id="dataGrdh">
            <p>data</p>
          </div>
          <div id="localGrdh">
            <p>local</p>
          </div>
          <div id="ingressosGrdh">
            <p>ing</p>
          </div>
        </div>
        {dados.map((e) => {
          return (
            <div id="contentGrd" key={e.id}>
              <div id="idGrdh">
                <p>{e.id}</p>
              </div>
              <div id="nomeGrdh">
                <p>{e.nome}</p>
              </div> 
              <div id="dataGrd">
                <p>{e.data}</p>
              </div>
              <div id="localGrd">
                <p>{e.local}</p>
              </div>
              <div id="ingressosGrdh">
                <p>{e.ingressos}</p>
              </div>
              <img src={e.foto}/>
            </div>
          );
        })}
      </div>
    </div>
  );
}
