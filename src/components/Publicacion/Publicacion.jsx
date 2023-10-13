import style from "./publicacion.module.css";

const Publicacion = ({ nota, index }) => {
  return (
    <div className={`${style.container} ${index % 2 != 0 && style.par}`}>
      <div className={style["image-container"]}>
        <img src={nota.imagen} alt="" className={style.image} />
        <div className={style.info}>
          <h3>{nota.title}</h3>
        </div>
      </div>
      <div className={style["texto-container"]}>
        <h4>{nota.texto}</h4>
        <button>VER MÁS</button>
      </div>
    </div>
  );
};

export default Publicacion;
