// import "/src/css/styles.css";
//import "/src/assets/script.js"

import { useState } from "react";
import logo from '../assets/img/logo.png'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="bg-black sticky top-0 p-[0.5rem] flex justify-between items-center z-1">
            <a href="/">
                <img src={logo} alt="logo horizontal Fourneaux Tom" className="w-[10rem]"/>
            </a>
            <nav className={`lg:w-auto lg:flex lg:static ${menuOpen ? "flex flex-col top-[60px] right-0":"h-full w-[250px] fixed top-[0] right-[-250px] bg-black"}`}>
                <a href="/" className="text-white p-[0.5rem] pl-[2rem] text-2xl hover:text-grey" >Accueil</a>
                <a href="./competences" className="text-white p-[0.5rem] pl-[2rem] text-2xl hover:text-grey" >Compétences</a>
                <a href="./projets" className="text-white p-[0.5rem] pl-[2rem] text-2xl hover:text-grey" >Projets</a>
                <a href="./charte_graphique" className="text-white p-[0.5rem] pl-[2rem] text-2xl hover:text-grey" >Charte Graphique</a>
                <a href="./cv" className="text-white p-[0.5rem] pl-[2rem] text-2xl hover:text-grey" >CV</a>
            </nav>
            <a onClick={toggleMenu} className="block cursor-pointer top-[80px] right-[20rem] lg:hidden">
                <span className={`${menuOpen ? 'hidden' : 'block'}`}>
                    <span className="block w-[20px] h-px bg-white my-[6px]"></span>
                    <span className="block w-[20px] h-px bg-white my-[6px]"></span>
                    <span className="block w-[20px] h-px bg-white my-[6px]"></span>
                </span>
                <span className={`text-white ${menuOpen ? 'block' : 'hidden'}`}>×</span>
            </a>
        </header>
    );
}

export default Header;