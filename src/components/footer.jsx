import { Link } from "react-router";

export default function Footer() {
    return (
        <footer className="flex flex-col gap-4 bg-black px-5 py-5 text-base text-white sm:flex-row sm:items-center sm:justify-between sm:px-10">
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-white/80">
                <a href="https://github.com/tomfrx12" className="hover:text-white">Github</a>
                <a href="https://www.linkedin.com/in/tom-fourneaux-4a8b31384/" className="hover:text-white">LinkedIn</a>
                <a href="https://www.instagram.com/fourneauxtom/" className="hover:text-white">Instagram</a>
            </div>
            <div className="text-right leading-snug">
                Copyright © {new Date().getFullYear()} tom-fourneaux
                <br />
                <Link to="/mentions_legales" className="underline">Mentions légales</Link>
            </div>
        </footer>
    );
}