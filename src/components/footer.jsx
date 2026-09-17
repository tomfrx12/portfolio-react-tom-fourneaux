import { Link } from "react-router";

export default function footer() {
    return (
        <footer className="flex items-center justify-between bg-black px-10 py-5 text-base text-white">
            <div className="flex gap-5 text-white/80">
                <Link to="https://github.com/" className="hover:text-white">Github</Link>
                <Link to="https://linkedin.com/" className="hover:text-white">LinkedIn</Link>
                <Link to="https://instagram.com/" className="hover:text-white">Instagram</Link>
            </div>
            <div className="text-right leading-snug">
                Copyright © 2026 tom-fourneaux
                <br />
                <Link to="/mentions_legales" className="underline">Mentions légales</Link>
            </div>
        </footer>
    );
}