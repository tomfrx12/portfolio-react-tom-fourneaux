import { useEffect, useState } from "react";

export function DarkMode() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } 
    else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme","light");
    }
  }, [isDark]);

  return {
    isDark,
    setIsDark
  };
};
