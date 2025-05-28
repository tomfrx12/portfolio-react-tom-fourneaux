import { useEffect, useState } from "react";

export function DarkMode() {
  const [itsDark, setItsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark"; 
  });

  useEffect(() => {
    if (itsDark) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [itsDark]);

  return [itsDark, setItsDark]
}