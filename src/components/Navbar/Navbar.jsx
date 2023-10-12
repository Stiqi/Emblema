import Searchbar from "../Searchbar/Searchbar";
import style from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={style.container}>
      <div className={style.naving}>
        <a href="#">
          <h1 className={style.brand}>EMBLEMA</h1>
        </a>
        <div className={style["right-nav"]}>
          <p>Menu</p>
          <Searchbar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
