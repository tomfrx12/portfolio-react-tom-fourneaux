import { Link } from "react-router";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black flex justify-center flex-col items-center lg:flex-row lg:justify-around lg:py-2.5">
            <nav className="flex gap-10 my-5 lg:m-0">
                <Link to="https://github.com/tomfrx12" className="no-underline transition-transform duration-300 ease-in-out transform hover:scale-120">
                    <img className="max-h-6 lg:max-h-10" src="/img/img_reseaux/github.png" alt="Logo de Github"/>
                </Link>
                <Link to="https://www.linkedin.com/in/tom-fourneaux-078644332/" className="no-underline transition-transform duration-300 ease-in-out transform hover:scale-120">
                    <img className="max-h-6 lg:max-h-10" src="/img/img_reseaux/linkedin.png" alt="Logo de LinkedIn"/>
                </Link>
                <Link to="https://www.instagram.com/fourneauxtom/" className="no-underline transition-transform duration-300 ease-in-out transform hover:scale-120">
                    <img className="max-h-6 lg:max-h-10" src="/img/img_reseaux/instagram.png" alt="Logo de Instagram"/>
                </Link>
            </nav>
            <p className="text-center text-xs text-white lg:text-2xl">Copyright © {currentYear} tom-fourneaux<br/>
                <Link to="/mentions_legales" className="text-white underline" onClick={() => { window.scrollTo(0, 0); }}>Mentions légales</Link>
            </p>
        </footer>
    );
}