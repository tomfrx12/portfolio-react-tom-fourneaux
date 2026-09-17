import { Link, useLocation } from "react-router";
import { useState } from "react";
import ButtonDarkMode from "./buttonDarkMode";

export default function Header({ itsDark, setItsDark, active = "" }) {
    const { pathname } = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = (event) => {
        window.scrollTo(0, 0);
        setMenuOpen(false);
    };

    const links = [
        { label: "Accueil", path: "/" },
        { label: "Compétences", path: "/competences" },
        { label: "Projets", path: "/projets" },
        { label: "Contact", path: "/me_contacter" },
    ];
    const currentActive = active || links.find(({ path }) => path === pathname)?.label;
    
    return (
        <header className="fixed z-100 w-full bg-black px-5 py-3 text-white sm:px-8">
            <div className="flex min-h-10 items-center justify-between">
            <Link to="/" className="flex items-center gap-2.5">
                <img src="/img/logo.png" alt="logo horizontal Fourneaux Tom" className="w-32 sm:w-40"/>
            </Link>
            <button
                type="button"
                className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-white/60 sm:hidden"
                aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((open) => !open)}
            >
                <span className="h-0.5 w-5 bg-white"></span>
                <span className="h-0.5 w-5 bg-white"></span>
                <span className="h-0.5 w-5 bg-white"></span>
            </button>
            <nav className={`${menuOpen ? "flex" : "hidden"} absolute left-0 top-full w-full flex-col items-stretch gap-0 border-t border-white/15 bg-black px-5 py-3 text-base sm:static sm:flex sm:w-auto sm:flex-row sm:items-center sm:gap-6 sm:border-0 sm:bg-transparent sm:p-0`}>
                {links.map(({ label, path }) => (
                    <Link
                        key={label}
                        to={path}
                        className={`border-b border-white/10 py-3 font-bold hover:underline sm:border-0 sm:py-0 ${currentActive === label ? "underline" : ""}`}
                        onClick={handleClick}
                    >
                        {label}
                    </Link>
                ))}
                <button className="self-start py-3 sm:self-auto sm:py-0" onClick={() => setItsDark(!itsDark)}>
                    <ButtonDarkMode itsDark={itsDark} />
                </button>
            </nav>
            </div>
        </header>
    );
};