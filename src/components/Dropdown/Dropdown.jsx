import { useState } from "react";
import styles from "./dropdown.module.css";
import MenuIcon from "../../assets/icons/MenuIcon";
import { NavLink } from "react-router-dom";
import publicaciones from "../../data/publicaciones";

const getCategories = () => {
  let a = publicaciones.map((i) => i.category);
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
            <NavLink
              key={index}
              to={`/category/${cat}`}
              onClick={toggleDropdown}
            >
              <li>{capitalize(cat)}</li>
            </NavLink>
          );
        })}
        <NavLink to={"/contacto"}>
          <li className={styles.highlighted} onClick={toggleDropdown}>
            Contacto
          </li>
        </NavLink>
        <NavLink to={"/about"}>
          <li className={styles.highlighted} onClick={toggleDropdown}>
            Sobre Nosotros
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Dropdown;
