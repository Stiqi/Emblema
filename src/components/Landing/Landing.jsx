import Welcome from "../Welcome/Welcome";
import Publicaciones from "../Publicaciones/Publicaciones";
import style from "./landing.module.css";

const Landing = () => {
  return (
    <main className={style.pagebody}>
      <Welcome />
      <Publicaciones />
    </main>
  );
};

export default Landing;
