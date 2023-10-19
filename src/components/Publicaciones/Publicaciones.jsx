import { useEffect, useState } from "react";
import Publicacion from "../Publicacion/Publicacion";
import publicaciones from "../../data/publicaciones";
import style from "./publicaciones.module.css";

const notasPromise = new Promise((response, reject) => {
  setTimeout(() => {
    publicaciones.length > 0
      ? response(publicaciones)
      : reject(new Error("No se encontraron publicaciones"));
  }, 500);
});

const Publicaciones = () => {
  const [notas, setNotas] = useState([]);

  useEffect(() => {
    notasPromise
      .then((notes) => setNotas(notes))
      .catch((error) => {
        console.error("Error:", error.message);
      });
  }, []);

  return (
    <div>
      <h3 className={style.title}>Publicaciones</h3>
      <div className={style.publicaciones}>
        {notas.length > 0 &&
          notas.map((nota, index) => (
            <Publicacion key={nota.id} nota={nota} index={index} />
          ))}
      </div>
    </div>
  );
};

export default Publicaciones;
