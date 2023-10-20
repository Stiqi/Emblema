import { NavLink } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";
import style from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={style.container}>
      <div className={style.naving}>
        <NavLink to={"/"}>
          <h1 className={style.brand}>EMBLEMA</h1>
        </NavLink>
        <Searchbar />
      </div>
    </nav>
  );
};

export default Navbar;
