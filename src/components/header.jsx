// import "/src/css/styles.css";

import "/src/assets/script.js"

import logo from "../assets/img/logo.png"

function Header() {
    return (
        <header className="bg-black sticky top-0 p-[0.5rem] flex justify-between items-center z-1">
        <a href="/">
            <img src={logo} alt="logo horizontal Fourneaux Tom" className="w-[10rem]"/>
        </a>
        <nav className="navig">
            <a href="/">Accueil</a>
            <a href="/competences">Compétences</a>
            <a href="/projets">Projets</a>
            <a href="/charte_graphique">Charte Graphique</a>
            <a href="/cv">CV</a>
            <a href="/me_contater">Contact</a>
        </nav>
        <a className="menu">
            <span className="burger-icon">
                <span></span>
                <span></span>
                <span></span>
            </span>
            <span className="close-menu">×</span>
        </a>
    </header>
    );
}

export default Header;