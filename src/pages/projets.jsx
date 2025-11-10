import { useEffect } from "react";
import { useLocation } from "react-router";

import { CardProjet } from "../components/card_projet";
import { Text } from "../components/texte";

function Projets() {
    const location = useLocation(); //récupére les objets de localisation de la page

    useEffect(() => {
    if (location.hash) { //s'il possède un hash ( avec le #)
      const id = location.hash.replace("#", ""); //le supprimer
      const element = document.getElementById(id);
      if (element) {  //s'il y a un id
        element.scrollIntoView({ behavior: "smooth" }); //y scooler en smooth
      }
    }
  }, [location]); //relance le hook à chaque fois que la localisation change

    return (
        <>
            {/* Template Projects
            
            <CardProjet 
                className_img=""
                img_illustr={} 
                alt_illustr="" 
                title_text="" 
                text="" 
                text_link="" 
                link=""
                img_link={}
                alt_link=""
            /> */}

            <Text tag="h1" name="h1" color="white" background="black" className="m-[20px] py-[10px] px-[20px]">Projet</Text>
            <section className="projets">
                {/* <div class="carte">
                    <img src="" alt="">
                    <div class="text">
                        <h2>Refonte portfolio</h2>
                        <p>Suite a la création de mon portfolio en HTML CSS, j'ai appris qu'il existaits React.js et TailwindCSS. Donc je souhaite par la suite de mon portfolio le faire subir une refonte avec ces framework.</p>
                    </div>
                </div> */}

                <CardProjet
                    className_img="m-[30px] max-w-full max-h-max text-center"
                    img_illustr="/public/img/projets/img/E-commerce.png"
                    alt_illustr="Page produit site E-commerce" 
                    title_text="Création site E-commerce" 
                    text="Pendant deux semaines de cours que j'ai eu pendant mon apprentisage j'ai appris à utiliser WordPress et Figma afin de créer un site e-commerce et de créer une maquette sur figma avec un wireframe et des composants (malheuresement il n'est qu'en local)" 
                    link="https://www.figma.com/design/xQuzIs2UGqYwRKOxep17rb/Maquettage?node-id=0-1&t=gZJTag1SQ0CL5CcZ-1"
                    title_link="Création site e-commerce"
                    img_link="/public/img/logo_des_projets/figma-logo.webp"
                    alt_link="Logo Figma"
                />

                <CardProjet 
                    className_img="m-[30px] text-center lg:w-[200px]"
                    img_illustr="/public/img/projets/img/handisup/logo-handisup.png"
                    alt_illustr="Logo Handisup" 
                    title_text="Refonte Handisup" 
                    text="Lors de mon apprentisage à la NWS, j'ai eu la chance de crée avec un groupe d'autres éléves, uen refonte de tout le site de l'association Handisup est une association qui conseille les lycéens, les étudiants et les jeunes diplômés en situation de handicap de Haute-Normandie pour qu’ils puissent réussir leurs études et trouver un emploi à la hauteur de leurs attentes et de leurs compétences." 
                    link="https://handisup5.normandieweb.school/"
                    title_link="Site refonte Handisup"
                    img_link="/public/img/projets/img/handisup/logo-handisup-noir-et-blanc.png"
                    alt_link="Logo Handisup noir et blanc"
                />

                <CardProjet
                    id="projet-portfolio"
                    className_img="bg-white p-1 rounded-[10px] m-[30px] max-w-full max-h-max text-center lg:max-w-[20%]"
                    img_illustr="/public/img/projets/img/logo-vertical.png"
                    alt_illustr="illustration pour projet portfolio" 
                    title_text="Portfolio" 
                    text="Ceci est la création de mon portfolio, vous êtes actuellement sur celui-ci. Il a été crée en HTML CSS et JavaScript." 
                    link="/"
                    title_link="Home portfolio"
                    img_link="/public/svg/home.svg"
                />

                <CardProjet
                    id_project="projet-clubecosaintsever"
                    className_img="m-[30px] max-w-full max-h-max text-center"
                    img_illustr="/public/img/projets/img/alternative bannière.png"
                    alt_illustr="illustration pour projet club eco saint sever" 
                    title_text="Club Eco Saint Sever" 
                    text="A la NWS et avec l'aide de la Mission Locale Agglomération de Rouen, j'ai eu la chance avec un groupe d'élèves, de mettre en place une nouvelle charte graphique du Club Eco Saint Sever qui est une association à but non lucratif qui regroupe des entreprises pour des actions communues à Saint Sever comme l'écologie."
                    link="/Presentation_Club_Eco_St_Sever.pdf"
                    title_link=""
                    img_link="/public/svg/magnifying_glass.svg"
                    alt_link=""
                    // download="Présentation Club Eco St Sever"
                />

                {/* <a href="assets/img/projets/downloads/Présentation_Club_Eco_St_Sever.pdf" title="projet site Club Eco Saint Sever" download className="max-w-[40px] max-h-[40px] bg-white text-black rounded-[20px] p-[5px] my-[5px] text-center self-center transition-transform duration-300 ease-in-out shadow-[0px_0px_50px_black] hover:scale-105 lg:flex lg:justify-center lg:hover:scale-115"></a> */}

                <CardProjet 
                    className_img="m-[30px] max-w-full max-h-max text-center"
                    img_illustr="/public/img/projets/img/maquette/maquette.png"
                    alt_illustr="illustration projet maquette figma" 
                    title_text="" 
                    text="Je devais reproduire en HTML CSS, une maquette figma au pixel perfect en ajoutant des éléments utilisateur, comme un mode jour nuit en JavaScript."
                    link="https://tomfrx12.github.io/controle-html-css/"
                    title_link="Projet maquette HTML CSS"
                    img_link="/public/svg/github.svg"
                />

                <CardProjet 
                    className_img="m-[30px] max-w-full max-h-max text-center"
                    img_illustr="/public/img/projets/img/bannière.png" 
                    alt_illustr="illustration projet bibliothèque vidéos" 
                    title_text="Bibliothèque vidéos" 
                    text="Le but était de concevoir un site de partage de contenus collaboratif en groupe suite a des cours d'intégration web de j'ai eu lors que mon apprentisage à la NWS." 
                    link="https://github.com/Quentin-SAMSON-NWS/Projet-bibliotheque-video"
                    title_link="Projet de bibliothèque video github"
                    img_link="/public/svg/github.svg"
                    alt_link=""
                />

                <CardProjet 
                    className_img="m-[30px] max-w-full max-h-max text-center lg:max-w-full"
                    img_illustr="/public/img/projets/img/interview/Fiches.png"
                    alt_illustr="illustration interview" 
                    title_text="Interview" 
                    text="J'ai eu la chance lors de mon apprentisages d'interviewé un élève de troisième année dans ma spécialités, donc le développement web." 
                    link=""
                    title_link="google docs presentation interview A3"
                    img_link="/public/svg/magnifying_glass.svg"
                    alt_link=""
                />

                {/* <a href="assets/img/projets/downloads/Fiches_interview.pdf" title="google docs presentation interview A3" download className="max-w-[40px] max-h-[40px] bg-white text-black rounded-[20px] p-[5px] my-[5px] text-center self-center transition-transform duration-300 ease-in-out shadow-[0px_0px_50px_black] hover:scale-105 lg:flex lg:justify-center lg:hover:scale-115"></a> */}

                <CardProjet 
                    className_img="m-[30px] max-w-full max-h-max text-center"
                    img_illustr="/public/img/projets/img/banniere.png"
                    alt_illustr="illustrator projet bde" 
                    title_text="Projet BDE" 
                    text="Suite à ma rentrée dans l'école NWS en octobre, mon premier projet était de proposé une idée d'activité que les élèves de l'école pourrais effectuer, par la suite l'organisé et la presenté au BDE de l'école. Mon groupe et moi-même d'avions désidé d'essayer d'organisé un voyage à Dublin en Irlande." 
                    link="https://gamma.app/docs/Voyage-a-Dublin-bdop9hv6473b9r3?mode=doc"
                    title_link="Projet BDE Dublin"
                    img_link="/public/svg/magnifying_glass.svg"
                />
            </section>
        </>
    );
}

export default Projets;