import { CardSkill } from "../components/card_skills";
import { Text } from "../components/texte";

import vscode from "../assets/img/cv/logo outils/VSCode.png"
import wordpress from "../assets/img/cv/logo outils/WordPress.png"
import canva from "../assets/img/cv/logo outils/canva.png"
import photoshop from "../assets/img/cv/logo outils/photoshop.png"
import illustrator from "../assets/img/cv/logo outils/Illustrator.png"
import indesign from "../assets/img/cv/logo outils/InDesign.png"
import python from "../assets/img/cv/logo outils/python.png"
import html from "../assets/img/cv/logo outils/HTML.png"
import css from "../assets/img/cv/logo outils/CSS.png"
import js from "../assets/img/cv/logo outils/JS.png"
import sql from "../assets/img/cv/logo outils/SQL.png"
import php from "../assets/img/cv/logo outils/PHP.png"
import react from "../assets/img/cv/logo outils/React.webp"
import tailwindcss from "../assets/img/cv/logo outils/tailwindcss.png"

// export const CardSkill = ({img_illustr, alt_illustr, text_illustr, description_illustr}) => {
//     return (
//         <div className="relative w-[80px] h-[100px] lg:w-[195px] lg:h-[285px] bg-[#313131] rounded-[20px] flex flex-col items-center justify-center text-white transition-all duration-200 ease-in-out group overflow-hidden shadow-lg hover:scale-105 hover:-rotate-1">
//             <img src={img_illustr} alt={alt_illustr} className="absolute top-1/2 left-1/2 w-[60%] max-h-[65%] -translate-x-1/2 -translate-y-1/2 transition-all duration-200 group-hover:blur-sm group-hover:w-[80%] group-hover:max-h-[80%]"/>
//             <div className="relative z-20 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
//                 <Text tag="p" size="lg" color="white">{text_illustr}</Text>
//                 <Text tag="span" size="base" color="white">{description_illustr}</Text>
//             </div>
//         </div>
//     );
// };

function Competences() {
    return (
    <>
        <Text tag="h1" name="h1" color="white" background="black" className="m-[20px] py-[10px] px-[20px]">Mes compétences</Text>

        <div className="m-auto flex flex-row flex-wrap justify-around">
            <CardSkill
                img_illustr={python}
                alt_illustr="Python Logo"
                text_illustr="Python"
                description_illustr="Lorem Ipsum"
            />

            <CardSkill
                img_illustr={html}
                alt_illustr="HTML Logo"
                text_illustr="HTML"
                description_illustr="Lorem Ipsum"
            />

            <CardSkill
                img_illustr={css}
                alt_illustr="CSS Logo"
                text_illustr="CSS"
                description_illustr="Lorem Ipsum"
            />

            <CardSkill
                img_illustr={js}
                alt_illustr="JavaScript Logo"
                text_illustr="JavaScript"
                description_illustr="Lorem Ipsum"
            />

            <CardSkill
                img_illustr={sql}
                alt_illustr="SQL Logo"
                text_illustr="SQL"
                description_illustr="Lorem Ipsum"
            />

            <CardSkill
                img_illustr={php}
                alt_illustr="PHP Logo"
                text_illustr="PHP"
                description_illustr="Lorem Ipsum"
            />

            <CardSkill
                img_illustr={react}
                alt_illustr="React Logo"
                text_illustr="React"
                description_illustr="Lorem Ipsum"
            />

            <CardSkill
                img_illustr={tailwindcss}
                alt_illustr="TailwindCSS Logo"
                text_illustr="TailwindCSS"
                description_illustr="Lorem Ipsum"
            />

            <CardSkill
                img_illustr={vscode}
                alt_illustr="Visual Studio Code Logo"
                text_illustr="Visual Studio Code"
                description_illustr="Lorem Ipsum"
            />

            <CardSkill
                img_illustr={wordpress}
                alt_illustr="Wordpress Logo"
                text_illustr="Wordpress"
                description_illustr="Lorem Ipsum"
            />

            <CardSkill
                img_illustr={canva}
                alt_illustr="Canva Logo"
                text_illustr="Canva"
                description_illustr="Lorem Ipsum"
            />

            <CardSkill
                img_illustr={indesign}
                alt_illustr="InDesign Logo"
                text_illustr="InDesign"
                description_illustr="Lorem Ipsum"
            />

            <CardSkill
                img_illustr={illustrator}
                alt_illustr="Illustrator Logo"
                text_illustr="Illustrator"
                description_illustr="Lorem Ipsum"
            />

            <CardSkill
                img_illustr={photoshop}
                alt_illustr="Photoshop Logo"
                text_illustr="Photoshop"
                description_illustr="Lorem Ipsum"
            />
        </div>
    </>
    );
}

export default Competences;
