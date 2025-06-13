import { useEffect, useState } from "react";

export function DarkMode() {
  const [itsDark, setItsDark] = useState(() => { //initialise l'état du dark mode, et regarde si le thème est "dark"
    return localStorage.getItem("theme") === "dark"; //si true, active le dark mode
  });

  useEffect(() => {
    if (itsDark) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [itsDark]); //relance le hook a chaque fois que le dark mode est modifier

  return [itsDark, setItsDark]
}