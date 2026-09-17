import { Link, useLocation } from "react-router";
import ButtonDarkMode from "./buttonDarkMode";

export default function Header({ itsDark, setItsDark, active = "" }) {
    const { pathname } = useLocation();

    const handleClick = (event) => {
        window.scrollTo(0, 0);
        if (onClick) onClick(event); //s'il y a un onClick passé en ...props, alors il est aussi appélé
    };

    const links = [
        { label: "Accueil", path: "/" },
        { label: "Compétences", path: "/competences" },
        { label: "Projets", path: "/projets" },
        { label: "Contact", path: "/me_contacter" },
    ];
    const currentActive = active || links.find(({ path }) => path === pathname)?.label;
    
    return (
        <header className="fixed min-w-full flex h-16 items-center justify-between bg-black px-10 z-100">
            <Link to="/" className="flex items-center gap-2.5">
                <img src="/img/logo.png" alt="logo horizontal Fourneaux Tom" className="w-40"/>
            </Link>
            <nav className="flex items-center gap-[34px] text-base text-white">
                {links.map(({ label, path }) => (
                    <Link 
                        key={label} 
                        to={path}
                        className={`font-bold hover:underline ${currentActive === label ? "underline" : ""}`}
                        onClick={handleClick}
                    >
                        {label}
                    </Link>
                ))}
                <button onClick={() => {setItsDark(!itsDark);}}>
                    <ButtonDarkMode itsDark={itsDark} />
                </button>
            </nav>
        </header>
    );
};