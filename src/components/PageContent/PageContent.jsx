import Welcome from "../Welcome/Welcome";
import Publicaciones from "../Publicaciones/Publicaciones";
import style from "./page.module.css";

const PageContent = () => {
  return (
    <main className={style.pagebody}>
      <Welcome />
      <Publicaciones />
    </main>
  );
};

export default PageContent;
