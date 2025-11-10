import { useState } from "react";

import ButtonDarkMode from "./buttonDarkMode";
import HeaderNav from "./header_nav";

const Header = ({ itsDark, setItsDark }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <header className="bg-black sticky top-0 p-[0.5rem] flex justify-between items-center z-2">
            <HeaderNav className="pl-0" link=""  onClick={() => { setMenuOpen(false); }}>
                <img src="/src/assets/img/logo.png" alt="logo horizontal Fourneaux Tom" className="w-[10rem]"/>
            </HeaderNav>
            <nav className={`flex gap-10 h-full w-[250px] bg-black fixed lg:static lg:w-auto ${menuOpen ? "right-[0] top-[60px] flex flex-col" : "right-[-250px] top-[0] left-auto" }`}>
                <HeaderNav link="" onClick={() => { setMenuOpen(false); }}>Accueil</HeaderNav>
                <HeaderNav link="competences" onClick={() => { setMenuOpen(false); }}>Compétences</HeaderNav>
                <HeaderNav link="projets" onClick={() => { setMenuOpen(false); }}>Projets</HeaderNav>
                <HeaderNav link="me_contacter" onClick={() => { setMenuOpen(false); }}>Contact</HeaderNav>
                <button onClick={() => {setItsDark(!itsDark); setMenuOpen(false);}}>
                    <ButtonDarkMode itsDark={itsDark} />
                </button>
            </nav>
            <a onClick={() => {setMenuOpen(!menuOpen);}} className="block cursor-pointer top-[80px] right-[20rem] lg:hidden">
                <span className={`${menuOpen ? 'hidden' : 'block'}`}> {/* Expression ternaire */}
                    <span className="block w-[20px] h-px bg-white my-[6px]"></span>
                    <span className="block w-[20px] h-px bg-white my-[6px]"></span>
                    <span className="block w-[20px] h-px bg-white my-[6px]"></span>
                </span>
                <span className={`text-white text-4xl ${menuOpen ? 'block' : 'hidden'}`}>×</span>
            </a>
        </header>
    );
};

export default Header;