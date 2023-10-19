import { Link } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";
import style from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={style.container}>
      <div className={style.naving}>
        <Link to={"/"}>
          <h1 className={style.brand}>EMBLEMA</h1>
        </Link>
        <Searchbar />
      </div>
    </nav>
  );
};

export default Navbar;
