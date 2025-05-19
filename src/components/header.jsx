// import "/src/css/styles.css";
//import "/src/assets/script.js"

import { useState } from "react";
import logo from '../assets/img/logo.png'
import { Link } from "react-router"

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
                <Link to="/" className="text-white p-[0.5rem] pl-[2rem] text-2xl hover:text-grey" >Accueil</Link>
                <Link to="/competences" className="text-white p-[0.5rem] pl-[2rem] text-2xl hover:text-grey" >Compétences</Link>
                <Link to="/projets" className="text-white p-[0.5rem] pl-[2rem] text-2xl hover:text-grey" >Projets</Link>
                <Link to="/charte_graphique" className="text-white p-[0.5rem] pl-[2rem] text-2xl hover:text-grey" >Charte Graphique</Link>
                <Link to="/cv" className="text-white p-[0.5rem] pl-[2rem] text-2xl hover:text-grey" >CV</Link>
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