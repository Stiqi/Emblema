import style from "./Welcome.module.css";
import Monumento from "../../assets/imgs/monumento.webp";

const Welcome = () => {
  return (
    <div className={style["welcome-container"]}>
      <div className={style.welcome}>
        <h2>Bienvenidx!</h2>
        <p>
          este es un blog autogestivo que busca explorar e informar sobre
          diversos temas de la cultura y sociedad rosarina.
        </p>
      </div>
      <img
        src={Monumento}
        alt="Monumento a la bandera"
        className={style["welcome-img"]}
      />
    </div>
  );
};

export default Welcome;
