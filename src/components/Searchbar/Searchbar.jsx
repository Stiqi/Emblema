import style from "./searchbar.module.css";
import SearchIcon from "../../assets/icons/SearchIcon";
import MenuIcon from "../../assets/icons/MenuIcon";

const Searchbar = () => {
  return (
    <div style={{ display: "flex" }}>
      <MenuIcon />
      <input type="text" className={style.barra} />
      <SearchIcon />
    </div>
  );
};

export default Searchbar;
