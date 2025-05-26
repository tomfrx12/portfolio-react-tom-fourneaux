import { useState } from "react";
import { Link } from "react-router";

import logo from '../assets/img/logo.png';

import { useContext } from 'react';
import { DarkModeContext } from './DarkModeProvider'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const {toggleDarkMode} = useContext(DarkModeContext);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleToggleDarkMode = () => {
        toggleDarkMode();
        setIsDark(!isDark);
    };

    return (
        <header className="bg-black sticky top-0 p-[0.5rem] flex justify-between items-center z-1">
            <a href="/">
                <img src={logo} alt="logo horizontal Fourneaux Tom" className="w-[10rem]"/>
            </a>
            <nav className={`h-full w-[250px] bg-black fixed lg:static lg:w-auto ${menuOpen ? "right-[0] top-[60px] flex flex-col" : "right-[-250px] top-[0] left-auto" }`}>
                <Link to="/" className="text-white p-[0.5rem] pl-[2rem] text-2xl hover:text-grey" onClick={() => { window.scrollTo(0, 0); setMenuOpen(false); }}>Accueil</Link>
                <Link to="/competences" className="text-white p-[0.5rem] pl-[2rem] text-2xl hover:text-grey" onClick={() => { window.scrollTo(0, 0); setMenuOpen(false); }}>Compétences</Link>
                <Link to="/projets" className="text-white p-[0.5rem] pl-[2rem] text-2xl hover:text-grey" onClick={() => { window.scrollTo(0, 0); setMenuOpen(false); }}>Projets</Link>
                <Link to="/charte_graphique" className="text-white p-[0.5rem] pl-[2rem] text-2xl hover:text-grey" onClick={() => { window.scrollTo(0, 0); setMenuOpen(false); }}>Charte Graphique</Link>
                <Link to="/cv" className="text-white p-[0.5rem] pl-[2rem] text-2xl hover:text-grey" onClick={() => { window.scrollTo(0, 0); setMenuOpen(false); }}>CV</Link>
                <Link to="/me_contacter" className="text-white p-[0.5rem] pl-[2rem] text-2xl hover:text-grey" onClick={() => { window.scrollTo(0, 0); setMenuOpen(false); }}>Contact</Link>
                <button className="cursor-pointer px-[2rem]" title="Mode nuit" onClick={() => { handleToggleDarkMode(); setMenuOpen(false); }}>
                    <span className="text-2xl">{isDark ? '🌙' : '☀️'}</span>
                </button>
            </nav>
            <a onClick={toggleMenu} className="block cursor-pointer top-[80px] right-[20rem] lg:hidden">
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