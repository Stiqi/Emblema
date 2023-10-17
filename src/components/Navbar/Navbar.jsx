import Searchbar from "../Searchbar/Searchbar";
import style from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={style.container}>
      <div className={style.naving}>
        <a href="#">
          <h1 className={style.brand}>EMBLEMA</h1>
        </a>
        <Searchbar />
      </div>
    </nav>
  );
};

export default Navbar;
