// import "/src/css/styles.css";

import github from "../assets/img/img_reseaux/github.png"
import linkedin from "../assets/img/img_reseaux/linkedin.png"
import instagram from "../assets/img/img_reseaux/instagram.png"
import { Link } from "react-router";

const Footer = () => {
    return (
        <footer className="mt-[20px] bg-black flex justify-center flex-col items-center lg:flex-row lg:justify-around lg:py-[10px]">
            <nav className="flex gap-[40px] mt-[20px] lg:m-[0]">
                <Link to="https://github.com/tomfrx12" className="no-underline transition-transform duration-300 ease-in-out transform hover:scale-120">
                    <img className="max-h-[1.5rem] lg:max-h-[2.5rem]" src={github} alt="Logo de Github"/>
                </Link>
                <Link to="https://www.linkedin.com/in/tom-fourneaux-078644332/" className="no-underline transition-transform duration-300 ease-in-out transform hover:scale-120">
                    <img className="max-h-[1.5rem] lg:max-h-[2.5rem]" src={linkedin} alt="Logo de LinkedIn"/>
                </Link>
                <Link to="https://www.instagram.com/fourneauxtom/" className="no-underline transition-transform duration-300 ease-in-out transform hover:scale-120">
                    <img className="max-h-[1.5rem] lg:max-h-[2.5rem]" src={instagram} alt="Logo de Instagram"/>
                </Link>
            </nav>
            <p className="text-center text-xs text-white lg:text-2xl">Copyright © 2025 tom-fourneaux<br/>
                <Link to="/mentions_legales" className="text-white">Mentions légales</Link>
            </p>
        </footer>
    );
}

export default Footer;