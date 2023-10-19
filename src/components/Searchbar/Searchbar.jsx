import styles from "./searchbar.module.css";
import SearchIcon from "../../assets/icons/SearchIcon";
import Dropdown from "../Dropdown/Dropdown";

const Searchbar = () => {
  const search = (e) => {
    e.preventDefault();
    e.target.searchInput.value.length > 0 &&
      console.log(e.target.searchInput.value);
  };

  return (
    <div className={styles.container}>
      <Dropdown />
      <form onSubmit={search}>
        <input
          type="search"
          className={styles.barra}
          name="searchInput"
          placeholder="Busca un artículo"
        />
        <button type="submit">
          <SearchIcon />
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
