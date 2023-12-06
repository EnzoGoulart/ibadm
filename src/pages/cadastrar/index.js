import { useState } from "react";
import "./cadastrar.css";
import {
  addDoc,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
} from "firebase/firestore";
import { db, storage } from "../../firebase";
import { toast } from "react-toastify";
import { ref, uploadBytes } from "firebase/storage";

export default function Cadastrar() {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [nome, setNome] = useState("");
  const [local, setLocal] = useState("");
  const [data, setData] = useState(""); 
  const [descri, setDescri] = useState('');

  const CadastrarEvento = async () => {
    try {
      let id = 0;
      const eventosRef = collection(db, "eventos");
      const q = query(eventosRef, orderBy("id", "desc"), limit(1));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const ultimoDocumento = querySnapshot.docs[0].data();
        id = ultimoDocumento.id + 1;
      }

      const uploadRef = ref(storage, `eventos/${id}/${image.name}`);
      await uploadBytes(uploadRef, image);

      const userDocRef = collection(db, "eventos");
      await addDoc(userDocRef, {
        id,
        nome,
        local,
        foto: image.name,
        data,
        ingressos: 0,
        descri
      });

      toast.success("Cadastrado com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar evento:", error);
      toast.error("Erro ao cadastrar evento.");
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(file);
        setUrl(e.target.result); // Alterado para e.target.result
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <p className="title">Cadastrar</p>
      <p className="subt">Foto</p>
      <div id="divImg">
        <div id="divInpImg">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            id="inpImg"
          />
        </div>
        {url ? <img id="img" src={url} alt="Preview" /> : <div id="img"></div>}
      </div>
      <div id="divCad">
        <p className="subt">Nome</p>
        <input
          className="inpCad"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <p className="subt">Descricao</p>
        <div className="setDescriCss">
          <textarea
          className="inpCadG"
          value={descri}
          onChange={(e) => setDescri(e.target.value)}
         />
        </div>
        <p className="subt">Local</p>
        <input
          className="inpCad"
          value={local}
          onChange={(e) => setLocal(e.target.value)}
        />
        <p className="subt">Data</p>
        <input
          className="inpCad"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
      </div>
      <div id="absolutebtn">
        <button className="btn" onClick={CadastrarEvento}>
          Cadastrar
        </button>
      </div>
    </div>
  );
}
