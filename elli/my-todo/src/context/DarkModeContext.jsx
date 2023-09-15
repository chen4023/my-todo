import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext(); // 필요한 데이터를 담고 있음

export function DarkModeProvider({ children }) {
  // 데이터를 보여주는 우산 컴포넌트
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode);
  };
  // 자식 컴포넌트에 제공할 value값

  useEffect(() => {
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDark);
    updateDarkMode(isDark);
  }, []);
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

//dark라는 클래스를 넣을래말래 ?
function updateDarkMode(darkMode) {
  if (darkMode) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
}
