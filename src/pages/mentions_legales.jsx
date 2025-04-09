// import "/src/css/style-mentions_legales.css";

function Mentions_Legales() {
    return (
        <>
            <main>
                <h1>Mentions Légales</h1>
                <h2>Propriétaire du site:</h2>
                <ul className="infos">
                    <li>Nom: Tom Fourneaux</li>
                    <li>Statut: Etudiant Bachelor chef de projets digitaux<br/>Normandie Web School, Rouen</li>
                    <li>Email: tfourneaux@normandiewebschool.fr</li>
                    <li>Site web: <a href="https://tomfrx12.github.io/tom-fourneaux-portfolio/" className="link_portfolio"><br/>https://tomfrx12.github.io/tom-fourneaux-portfolio/</a></li>
                </ul>

                <h2>Propriété intellectuelle:</h2>
                <p>Le contenu de ce site (textes, images, code, etc.) est la propriété de Tom Fourneaux et est protégé par le droit d’auteur. Toute reproduction ou représentation sans autorisation préalable est interdite.</p>

                <h2>Protection des données personnelles:</h2>
                <p>Aucune donnée personnelle {"n'est"} collectée sur ce site, sauf si vous conctactez Tom Fourneaux grâce à la page <a href="/me_contacter">contact</a>. Les informations fournies ne seront utilisées que dans le cadre de la réponse à vos demandes. Vous avez un droit {"d'accès"}, de rectification et de suppression sur vos données personnelles.
                </p>
            </main> 
        </>
    );
}

export default Mentions_Legales;