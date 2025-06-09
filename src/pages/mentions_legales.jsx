import { Text } from "../components/texte";
import { Link } from "react-router";

function Mentions_Legales() {
    return (
        <>
            <Text tag="h1" name="h1" color="white" background="black" className="m-[20px] py-[10px] px-[20px]">Mentions Légales</Text>
            <Text tag="h2" name="h2" size="base" align="left" className="pl-[10px] mt-[40px] mx-[0px] mb-[10px]">Propriétaire du site:</Text>
            <Text tag="ul" size="base" className="list-none m-[0] pl-[2rem]">
                <Text tag="li" size="base">- Nom: Tom Fourneaux</Text>
                <Text tag="li" size="base">- Statut: Etudiant Bachelor chef de projets digitaux<br/>Normandie Web School, Rouen</Text>
                <Text tag="li" size="base">- Email: tfourneaux@normandiewebschool.fr</Text>
                <Text tag="li" size="base">- Site web: <Link to="https://tom-fourneaux.fr" className="underline text-xs lg:text-2xl"><br/>https://tom-fourneaux.fr</Link></Text>
            </Text>

            <Text tag="h2" name="h2" size="base" align="left" className="pl-[10px] mt-[40px] mx-[0px] mb-[10px]">Propriété intellectuelle:</Text>
            <Text tag="p" size="base" className="pr-[2rem] mr-auto pl-[2rem]">Le contenu de ce site (textes, images, code, etc.) est la propriété de Tom Fourneaux et est protégé par le droit d’auteur. Toute reproduction ou représentation sans autorisation préalable est interdite.</Text>

            <Text tag="h2" name="h2" size="base" align="left" className="pl-[10px] mt-[40px] mx-[0px] mb-[10px]">Protection des données personnelles:</Text>
            <Text tag="p" size="base" className="pr-[2rem] mr-auto pl-[2rem]">Aucune donnée personnelle {"n'est"} collectée sur ce site, sauf si vous conctactez Tom Fourneaux grâce à la page <Link to="/me_contacter" className="text-white">contact</Link>. Les informations fournies ne seront utilisées que dans le cadre de la réponse à vos demandes. Vous avez un droit {"d'accès"}, de rectification et de suppression sur vos données personnelles.</Text>
        </>
    );
}

export default Mentions_Legales;