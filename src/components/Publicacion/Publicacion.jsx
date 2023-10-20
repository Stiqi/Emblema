import { Link } from "react-router-dom";
import styles from "./publicacion.module.css";

const Publicacion = ({ nota, index }) => {
  return (
    <article className={`${styles.container} ${index % 2 != 0 && styles.par}`}>
      <div className={styles["image-container"]}>
        <img src={nota.imagen} alt="" className={styles.image} />
        <div className={styles.info}>
          <h3>{nota.title}</h3>
        </div>
      </div>
      <div className={styles["texto-container"]}>
        <h4>{nota.texto}</h4>
        <Link to={`/nota/${nota.id}`} className={styles["ver-mas"]}>
          Ver Más
        </Link>
      </div>
    </article>
  );
};

export default Publicacion;
