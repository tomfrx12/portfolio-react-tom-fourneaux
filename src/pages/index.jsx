import pptom from "../assets/img/tom.png";
import illustration_dev from "../assets/img/illustration presentation/illustration dev 1.png";
import petit_logo from "../assets/img/logo_des_projets/petit_logo.png";
import logo_club_st_sever from "../assets/img/logo_des_projets/logo-club-eco-st-sever.png";

import ButtonNav from "../components/a_button";
import { Text } from "../components/texte";
import Lamp from "../components/lamp_light";
import PropTypes from "prop-types";
import { PresentationIndex } from "../components/presentation_index";
import SeeMore from "../components/see_more";

function Index({ itsDark, setItsDark }) {
    return (
        <>
            <section className="flex flex-col h-[95vh] lg:flex-row">
                <div className="flex items-center lg:w-[40%] bg-[var(--color-white-background)] dark:bg-[var(--color-white-background-dark)]">
                    <img src={pptom} alt="photo de profil Tom FOURNEAUX" className="my-5 m-auto rounded-full w-[60%]"/>
                </div>
                <div className="h-full flex flex-col items-center lg:w-[60%] bg-[var(--color-red-background)] dark:bg-[var(--color-red-background-dark)]">
                    <div className="lg:flex lg:flex-col lg:items-center hidden">
                        <Lamp itsDark={itsDark} setItsDark={setItsDark} />
                    </div>
                    <div className="flex flex-col items-center m-auto lg:mt-[200px]">
                        <Text tag='h1' name='h1'>Tom Fourneaux</Text>
                        <Text tag='p' align='center' size="base">Etudiant et passionné de codage, voici mon portfolio</Text>
                        <ButtonNav link="me_contacter">Contactez moi</ButtonNav>
                    </div>
                </div>
            </section>
            <section className="flex flex-col items-center mx-5 lg:mx-20">
                <Text tag='h2' name='h2' className="mt-10 lg:mt-20">A PROPOS DE MOI</Text>
                <section>
                    <div className="lg:flex lg:flex-col">
                        <div>
                            <PresentationIndex>Je suis un jeune développeur web de 18 ans, actuellement étudiant à la Normandie Web School (NWS) de Rouen, où je suis inscrit en Bachelor Chef de Projets Digitaux. Passionné par le monde du développement web depuis mon plus jeune âge, j’ai naturellement orienté mes études et ma carrière vers ce domaine en constante évolution. Ce qui me motive avant tout, c’est la possibilité de créer des expériences numériques qui répondent aux besoins des utilisateurs tout en étant techniquement performantes et esthétiquement soignées.</PresentationIndex>
                            <PresentationIndex>Ma formation m’a permis de me familiariser avec plusieurs technologies essentielles, notamment HTML, CSS, et JavaScript, des langages que j’utilise au quotidien pour la création et l’optimisation de sites web. En parallèle, je me forme également à des frameworks modernes comme React, afin d’élargir mes compétences et d’être capable de réaliser des projets web plus complexes et dynamiques. Cette diversité de technologies me permet de m’adapter aux différents besoins des projets et de toujours offrir des solutions efficaces et innovantes.</PresentationIndex>
                        </div>
                        <img src={illustration_dev} alt="illustration developpeur web" className="m-auto max-w-[90%] p-[15px] lg:self-center lg:w-auto lg:max-w-[35%]"/>
                        <div>
                            <PresentationIndex>Au-delà de la technique, mon cursus à la NWS m’a aussi permis de me perfectionner dans des compétences transversales telles que la gestion de projet et la collaboration au sein d’équipes pluridisciplinaires. Je suis convaincu que la réussite d’un projet web ne réside pas seulement dans la qualité du code, mais aussi dans la capacité à communiquer, à organiser le travail et à respecter les délais tout en répondant aux attentes du client. C’est pourquoi je {"m'efforce d’allier"} expertise technique et sens de l’organisation pour garantir la réussite des projets auxquels je participe.</PresentationIndex>
                            <PresentationIndex>Aujourd’hui, je suis à la recherche d’un stage ou d’une alternance en développement web, afin de mettre en pratique mes connaissances et de continuer à apprendre au contact de professionnels expérimentés. Je suis particulièrement intéressé par les environnements de travail collaboratifs, où je pourrais à la fois apporter mes compétences et en acquérir de nouvelles. Vous pouvez consulter mon CV pour plus de détails sur mes compétences et expériences.</PresentationIndex>
                        </div>
                    </div>
                </section>  
                <div className="flex gap-[20px]">
                    <ButtonNav link="cv">Mon CV</ButtonNav>
                    <ButtonNav link="competences">Compétences</ButtonNav>
                </div>
            </section>
            <section className="flex flex-col items-center">
                <Text tag='h2' name='h2' className="mt-10 lg:mt-20">PROJETS</Text>
                <div className="my-10">
                    <div className="flex items-center my-5">
                        <img src={petit_logo} alt="Portfolio Tom Fourneaux" className="bg-white max-h-[5rem] my-[10px] mx-[20px]"/>
                        <div>
                            <Text tag="h3" name="h3" size="lg">Portfolio</Text>
                            <Text tag="p" size="base">Projet consistant à créer un portfolio.</Text>
                            <SeeMore link="projets#projet-portfolio"/>
                        </div>
                    </div>

                    <div className="flex items-center my-5">
                        <img src={logo_club_st_sever} alt="Club Eco Saint Sever" className="bg-white max-h-[5rem] my-[10px] mx-[20px]"/>
                        <div>
                            <Text tag="h3" name="h3" size="lg">Club Eco Saint Sever</Text>
                            <Text tag="p" size="base">Projet qui consistait à créer une identité visuelle pour le Club Eco de Saint Sever.</Text>
                            <SeeMore link="projets#projet-clubecosaintsever"/>
                        </div>
                    </div>
                </div>
                <ButtonNav link="projets">Mes projets</ButtonNav>
            </section>
        </>
    );
}

Index.propTypes = {
    itsDark: PropTypes.bool.isRequired,
    setItsDark: PropTypes.func.isRequired,
};

export default Index;
