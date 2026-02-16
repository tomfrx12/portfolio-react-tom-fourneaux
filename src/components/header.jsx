import { useState } from "react";

import ButtonDarkMode from "./buttonDarkMode";
import HeaderNav from "./header_nav";

const Header = ({ itsDark, setItsDark }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <header className="bg-black sticky top-0 p-2 flex justify-between items-center z-100">
            <HeaderNav className="pl-0" link=""  onClick={() => { setMenuOpen(false); }}>
                <img src="/img/logo.png" alt="logo horizontal Fourneaux Tom" className="w-40"/>
            </HeaderNav>
            <nav className={`flex gap-10 h-full w-[250px] bg-black fixed lg:static lg:w-auto ${menuOpen ? "right-0 top-[60px] flex flex-col" : "right-[-250px] top-0 left-auto" }`}>
                <HeaderNav link="" onClick={() => { setMenuOpen(false); }}>Accueil</HeaderNav>
                <HeaderNav link="competences" onClick={() => { setMenuOpen(false); }}>Compétences</HeaderNav>
                <HeaderNav link="projets" onClick={() => { setMenuOpen(false); }}>Projets</HeaderNav>
                <HeaderNav link="me_contacter" onClick={() => { setMenuOpen(false); }}>Contact</HeaderNav>
                <button onClick={() => {setItsDark(!itsDark); setMenuOpen(false);}}>
                    <ButtonDarkMode itsDark={itsDark} />
                </button>
            </nav>
            <a onClick={() => {setMenuOpen(!menuOpen);}} className="block cursor-pointer top-20 right-80 lg:hidden">
                <span className={`${menuOpen ? 'hidden' : 'block'}`}> {/* Expression ternaire */}
                    <span className="block w-5 h-px bg-white my-1.5"></span>
                    <span className="block w-5 h-px bg-white my-1.5"></span>
                    <span className="block w-5 h-px bg-white my-1.5"></span>
                </span>
                <span className={`text-white text-4xl ${menuOpen ? 'block' : 'hidden'}`}>×</span>
            </a>
        </header>
    );
};

export default Header;