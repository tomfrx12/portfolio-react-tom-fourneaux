// import "/src/css/style-mentions_legales.css";

import { Link } from "react-router";

function Mentions_Legales() {
    return (
        <>
                <h1 className="self-center mt-[40px] mb-[0px] text-center bg-black max-w-[12.5rem] lg:text-3xl">Mentions Légales</h1>
                <h2 className="pl-[10px] mt-[40px] mx-[0px] mb-[10px] text-left text-base lg:text-3xl">Propriétaire du site:</h2>
                <ul className="list-none m-[0] text-xs pl-[2rem] lg:text-2xl ">
                    <li>- Nom: Tom Fourneaux</li>
                    <li>- Statut: Etudiant Bachelor chef de projets digitaux<br/>Normandie Web School, Rouen</li>
                    <li>- Email: tfourneaux@normandiewebschool.fr</li>
                    <li>- Site web: <Link to="https://tomfrx12.github.io/tom-fourneaux-portfolio/" className="text-[var(--color-grey)] text-xs lg:text-2xl"><br/>https://tomfrx12.github.io/tom-fourneaux-portfolio/</Link></li>
                </ul>

                <h2 className="pl-[10px] mt-[40px] mx-[0px] mb-[10px] text-left text-base lg:text-3xl">Propriété intellectuelle:</h2>
                <p className="text-xs m-[0px] pl-[2rem] lg:text-xl">Le contenu de ce site (textes, images, code, etc.) est la propriété de Tom Fourneaux et est protégé par le droit d’auteur. Toute reproduction ou représentation sans autorisation préalable est interdite.</p>

                <h2 className="pl-[10px] mt-[40px] mx-[0px] mb-[10px] text-left text-base lg:text-3xl">Protection des données personnelles:</h2>
                <p className="text-xs m-[0px] pl-[2rem] lg:text-xl">Aucune donnée personnelle {"n'est"} collectée sur ce site, sauf si vous conctactez Tom Fourneaux grâce à la page <Link to="/me_contacter" className="text-white">contact</Link>. Les informations fournies ne seront utilisées que dans le cadre de la réponse à vos demandes. Vous avez un droit {"d'accès"}, de rectification et de suppression sur vos données personnelles.
                </p>
        </>
    );
}

export default Mentions_Legales;