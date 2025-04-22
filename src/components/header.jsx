// import "/src/css/styles.css";

import "/src/assets/script.js"

import logo from "../assets/img/logo.png"

function Header() {
    return (
        <header className="bg-black sticky top-0 p-[0.5rem] flex justify-between items-center z-1">
        <a href="/">
            <img src={logo} alt="logo horizontal Fourneaux Tom" className="w-[10rem]"/>
        </a>
        <nav className="h-full w-250px fixed top-[0] right-[-250px] bg-black">
            <a className="text-colortext p-[0.5rem] pl-[2rem] no-underline" href="/">Accueil</a>
            <a className="text-white p-[0.5rem] pl-[2rem] no-underline" href="/competences">Compétences</a>
            <a className="text-white p-[0.5rem] pl-[2rem] no-underline" href="/projets">Projets</a>
            <a className="text-white p-[0.5rem] pl-[2rem] no-underline" href="/charte_graphique">Charte Graphique</a>
            <a className="text-white p-[0.5rem] pl-[2rem] no-underline" href="/cv">CV</a>
            <a className="text-white p-[0.5rem] pl-[2rem] no-underline" href="/me_contacter">Contact</a>
        </nav>
        <a className="menu">
            <span className="burger-icon">
                <span className="block w-[20px] h-px "></span>
                <span></span>
                <span></span>
            </span>
            <span className="close-menu">×</span>
        </a>
    </header>
    );
}

export default Header;