import { useEffect, useState } from "react";
import Publicacion from "../Publicacion/Publicacion";
import publicaciones from "../../data/publicaciones";
import style from "./publicaciones.module.css";
import { useParams } from "react-router-dom";

const notasPromise = new Promise((response, reject) => {
  setTimeout(() => {
    publicaciones.length > 0
      ? response(publicaciones)
      : reject(new Error("No se encontraron publicaciones"));
  }, 500);
});

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const Publicaciones = () => {
  const [notas, setNotas] = useState([]);
  const [filteredNotas, setFilteredNotas] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    notasPromise
      .then((notes) => setNotas(notes))
      .catch((error) => {
        console.error("Error:", error.message);
      });
  }, []);

  const filterNotas = (notas) => {
    categoryId
      ? setFilteredNotas(
          notas.filter((nota) => nota.category.includes(categoryId))
        )
      : setFilteredNotas(notas);
  };

  useEffect(() => {
    filterNotas(notas);
  }, [categoryId, notas]);

  return (
    <section id="publicaciones">
      <h3 className={style.title}>
        {categoryId ? capitalize(categoryId) : "Publicaciones"}
      </h3>
      <div className={style.publicaciones}>
        {filteredNotas.length > 0 &&
          filteredNotas.map((nota, index) => (
            <Publicacion key={nota.id} nota={nota} index={index} />
          ))}
      </div>
    </section>
  );
};

export default Publicaciones;
