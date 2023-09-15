import React, { useContext } from "react";
import styles from "./Header.module.css";
import { DarkModeContext } from "../../context/DarkModeContext";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

export default function Header({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <header className={styles.header}>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              className={`${styles.filter} ${
                filter === value && styles.selected
              }`}
              onClick={() => onFilterChange(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
      <div className={styles.darkmode} onClick={() => toggleDarkMode()}>
        {darkMode ? <MdLightMode size="30px" /> : <MdDarkMode size="30px" />}
      </div>
    </header>
  );
}
