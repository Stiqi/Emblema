import { useState } from "react";
import styles from "./dropdown.module.css";
import MenuIcon from "../../assets/icons/MenuIcon";
import { Link } from "react-router-dom";
import publicaciones from "../../data/publicaciones";

const getCategories = () => {
  let a = publicaciones.map((i) => i.categoria);
  return [...new Set(a)];
};

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdown}>
      <button type="button" onClick={toggleDropdown}>
        <MenuIcon />
      </button>
      <ul
        className={`${styles["dropdown-content"]} ${
          isOpen ? `${styles.show}` : ""
        }`}
      >
        {getCategories().map((cat, index) => {
          return (
            <Link key={index} to={`/category/${cat}`}>
              <li>{capitalize(cat)}</li>
            </Link>
          );
        })}
        <Link to={"/contacto"}>
          <li style={{ backgroundColor: "rgba(255,255,255,.1)" }}>
            <strong>Contacto</strong>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Dropdown;
