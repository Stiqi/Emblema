import style from "./searchbar.module.css";
import SearchIcon from "../../assets/icons/SearchIcon";

const Searchbar = () => {
  return (
    <div style={{ display: "flex", marginLeft: 16 }}>
      <input type="text" className={style.barra} />
      <SearchIcon />
    </div>
  );
};

export default Searchbar;
