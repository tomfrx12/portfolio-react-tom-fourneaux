import { Link } from "react-router";

export default function footer() {
    return (
        <footer className="flex flex-col gap-4 bg-black px-5 py-5 text-base text-white sm:flex-row sm:items-center sm:justify-between sm:px-10">
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-white/80">
                <Link to="https://github.com/tomfrx12" className="hover:text-white">Github</Link>
                <Link to="https://www.linkedin.com/in/tom-fourneaux-4a8b31384/" className="hover:text-white">LinkedIn</Link>
                <Link to="https://www.instagram.com/fourneauxtom/" className="hover:text-white">Instagram</Link>
            </div>
            <div className="text-right leading-snug">
                Copyright © 2026 tom-fourneaux
                <br />
                <Link to="/mentions_legales" className="underline">Mentions légales</Link>
            </div>
        </footer>
    );
}