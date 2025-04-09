// import "/src/css/styles.css";

import github from "../assets/img/img_reseaux/github.png"
import linkedin from "../assets/img/img_reseaux/linkedin.png"
import instagram from "../assets/img/img_reseaux/instagram.png"

function Footer() {
    return (
        <footer>
            <nav>
                <a href="https://github.com/tomfrx12" className="logo">
                    <img src={github} alt="Logo de Github"/>
                </a>
                <a href="https://www.linkedin.com/in/tom-fourneaux-078644332/" className="logo">
                    <img src={linkedin} alt="Logo de LinkedIn"/>
                </a>
                <a href="https://www.instagram.com/fourneauxtom/" className="logo">
                    <img src={instagram} alt="Logo de Instagram"/>
                </a>
            </nav>
            <p>Copyright © 2025 tom-fourneaux<br/>
                <a href="/mentions_legales" className="mentions_legales">Mentions légales</a>
            </p>
        </footer>
    );
}

export default Footer;