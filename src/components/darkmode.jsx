import { useEffect, useState } from "react";
import ButtonDarkMode from "./buttonDarkMode";

// export function DarkMode() {
//   const [isDark, setIsDark] = useState(false);

//   useEffect(() => {
//     if (isDark) {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } 
//     else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme","light");
//     }
//   }, [isDark]);

//   return [
//     isDark,
//     setIsDark
//   ];
// };

export function DarkMode() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  <ButtonDarkMode isDark={isDark}/>

  return [isDark, setIsDark];
}
