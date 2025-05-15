// import "/src/css/styles.css";

import github from "../assets/img/img_reseaux/github.png"
import linkedin from "../assets/img/img_reseaux/linkedin.png"
import instagram from "../assets/img/img_reseaux/instagram.png"

function Footer() {
    return (
        <footer className="mt-[20px] bg-black flex justify-center flex-col items-center lg:flex-row lg:justify-around lg:py-[10px]">
            <nav className="flex gap-[40px] mt-[20px] lg:m-[0]">
                <a href="https://github.com/tomfrx12" className="no-underline transition-transform duration-300 ease-in-out transform hover:scale-120">
                    <img className="max-h-[1.5rem] lg:max-h-[2.5rem]" src={github} alt="Logo de Github"/>
                </a>
                <a href="https://www.linkedin.com/in/tom-fourneaux-078644332/" className="no-underline transition-transform duration-300 ease-in-out transform hover:scale-120">
                    <img className="max-h-[1.5rem] lg:max-h-[2.5rem]" src={linkedin} alt="Logo de LinkedIn"/>
                </a>
                <a href="https://www.instagram.com/fourneauxtom/" className="no-underline transition-transform duration-300 ease-in-out transform hover:scale-120">
                    <img className="max-h-[1.5rem] lg:max-h-[2.5rem]" src={instagram} alt="Logo de Instagram"/>
                </a>
            </nav>
            <p className="text-center text-xs text-white lg:text-sm">Copyright © 2025 tom-fourneaux<br/>
                <a href="/mentions_legales" className="text-white">Mentions légales</a>
            </p>
        </footer>
    );
}

export default Footer;