import { useEffect, useState } from "react";
import Publicacion from "../Publicacion/Publicacion";
import style from "./publicaciones.module.css";

const publicaciones = [
  {
    title: "La noche de las peatonales",
    id: "nochepeatonales",
    texto: "Estuvo re piola jaja",
    imagen: "src/assets/imgs/img1.jpeg",
    categoria: "eventos",
    fecha: "3/10/2022",
    autor: "Flor",
  },
  {
    title: "Testeando shit",
    id: "testing",
    texto: "Esto es un test 1 2 3 probando jkajajajkajka xd",
    imagen: "src/assets/imgs/img2.jpeg",
    categoria: "eventos",
    fecha: "3/10/2022",
    autor: "Flor",
  },

  {
    title: "Ecocidio en el Delta del Paraná",
    id: "ecocidio",
    texto:
      "En casi tres años y con una pandemia de por medio, los incendios han arrasado mas de 95 mil hectáreas de humedales en el territorio que abarca las provincias de Entre Ríos, Santa Fe y Buenos Aires. ¿Qué se oculta detrás de todo esto?",
    imagen: "src/assets/imgs/img3.jpeg",
    categoria: "eventos",
    fecha: "3/10/2022",
    autor: "Flor",
  },
];

const Publicaciones = () => {
  const [notas, setNotas] = useState([]);

  const notasPromise = new Promise((response, reject) => {
    setTimeout(() => {
      publicaciones.length > 0
        ? response(publicaciones)
        : reject(new Error("No se encontraron publicaciones"));
    }, 500);
  });

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
