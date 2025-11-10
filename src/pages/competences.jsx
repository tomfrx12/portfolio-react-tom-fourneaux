import { CardSkill } from "../components/card_skills";
import { Text } from "../components/texte";

import vscode from "../assets/img/cv/logo-outils/VSCode.png"
import wordpress from "../assets/img/cv/logo-outils/WordPress.png"
import canva from "../assets/img/cv/logo-outils/canva.png"
import photoshop from "../assets/img/cv/logo-outils/photoshop.png"
import illustrator from "../assets/img/cv/logo-outils/Illustrator.png"
import indesign from "../assets/img/cv/logo-outils/InDesign.png"
import python from "../assets/img/cv/logo-outils/python.png"
import html from "../assets/img/cv/logo-outils/HTML.png"
import css from "../assets/img/cv/logo-outils/CSS.png"
import js from "../assets/img/cv/logo-outils/JS.png"
import sql from "../assets/img/cv/logo-outils/SQL.png"
import php from "../assets/img/cv/logo-outils/PHP.png"
import react from "../assets/img/cv/logo-outils/React.webp"
import tailwindcss from "../assets/img/cv/logo-outils/tailwindcss.png"

function Competences() {
    return (
    <>
        <Text tag="h1" name="h1" color="white" background="black" className="m-[20px] py-[10px] px-[20px]">Mes compétences</Text>

        <div className="m-auto flex flex-row flex-wrap justify-around lg:max-w-[1516px]">
            <CardSkill
                img_illustr={python}
                alt_illustr="Python Logo"
                text_illustr="Python"
                description_illustr="Langage polyvalent, idéal pour le développement web, les scripts et l'IA."
            />

            <CardSkill
                img_illustr={html}
                alt_illustr="HTML Logo"
                text_illustr="HTML"
                description_illustr="Langage de balisage utilisé pour structurer les pages web."
            />

            <CardSkill
                img_illustr={css}
                alt_illustr="CSS Logo"
                text_illustr="CSS"
                description_illustr="Langage de style qui permet de mettre en forme les pages web."
            />

            <CardSkill
                img_illustr={js}
                alt_illustr="JavaScript Logo"
                text_illustr="JavaScript"
                description_illustr="Langage de programmation côté client pour rendre les pages interactives."
            />

            <CardSkill
                img_illustr={sql}
                alt_illustr="SQL Logo"
                text_illustr="SQL"
                description_illustr="Langage utilisé pour interroger et gérer des bases de données relationnelles."
            />

            <CardSkill
                img_illustr={php}
                alt_illustr="PHP Logo"
                text_illustr="PHP"
                description_illustr="Langage côté serveur pour créer des sites web dynamiques."
            />

            <CardSkill
                img_illustr={react}
                alt_illustr="React Logo"
                text_illustr="React"
                description_illustr="Bibliothèque JavaScript pour créer des interfaces utilisateur réactives."
            />

            <CardSkill
                img_illustr={tailwindcss}
                alt_illustr="TailwindCSS Logo"
                text_illustr="TailwindCSS"
                description_illustr="Framework CSS utilitaire pour créer des interfaces modernes rapidement."
            />

            <CardSkill
                img_illustr={vscode}
                alt_illustr="Visual Studio Code Logo"
                text_illustr="Visual Studio Code"
                description_illustr="Éditeur de code léger et puissant avec de nombreuses extensions."
            />

            <CardSkill
                img_illustr={wordpress}
                alt_illustr="Wordpress Logo"
                text_illustr="Wordpress"
                description_illustr="CMS populaire pour créer et gérer des sites web facilement."
            />

            <CardSkill
                img_illustr={canva}
                alt_illustr="Canva Logo"
                text_illustr="Canva"
                description_illustr="Outil de design graphique simple pour créer des visuels rapidement."
            />

            <CardSkill
                img_illustr={indesign}
                alt_illustr="InDesign Logo"
                text_illustr="InDesign"
                description_illustr="Logiciel de mise en page pour la création de documents imprimés."
            />

            <CardSkill
                img_illustr={illustrator}
                alt_illustr="Illustrator Logo"
                text_illustr="Illustrator"
                description_illustr="Outil professionnel pour la création de graphiques vectoriels."
            />

            <CardSkill
                img_illustr={photoshop}
                alt_illustr="Photoshop Logo"
                text_illustr="Photoshop"
                description_illustr="Logiciel de retouche photo et de création graphique avancée."
            />
        </div>
    </>
    );
}

export default Competences;
