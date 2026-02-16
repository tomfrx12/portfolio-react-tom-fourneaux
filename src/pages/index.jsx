import { useState } from "react";

import ButtonNav from "../components/a_button";
import { Text } from "../components/texte";
import Lamp from "../components/lamp_light";
import { PresentationIndex } from "../components/presentation_index";
import SeeMore from "../components/see_more";

function Index({ itsDark, setItsDark }) { //le bool et la func qui est définie dans l'App, afin que la Lamp puisse modifier le dark mode

    const [ButtonClicker, setButtonClicker] = useState(false);
    const [NbClick, setNbClick] = useState(0);
    const [LinkClicker, setLinkClicker] = useState(false);
    
    function Clicker() {
        if ( ButtonClicker === false ) {
            setButtonClicker(!ButtonClicker);
        };
        setNbClick(NbClick + 1)
        if ( LinkClicker === false && NbClick == 29 ) {
            setLinkClicker(!LinkClicker);
        };
    };

    return (
        <div>
            <section className="flex flex-col h-[94vh] lg:flex-row">
                <div className="flex items-center justify-center flex-col lg:w-[40%] bg-(--color-white-background) dark:bg-(--color-white-background-dark)">
                    <button onClick={Clicker}>
                        <img src="/img/A2_Fourneaux_Tom.png" alt="photo de profil Tom FOURNEAUX" className="my-5 m-auto rounded-full"/>
                    </button>
                    {ButtonClicker && (
                        <Text tag="p" size="base">Nombre de click : {NbClick}</Text>
                    )}
                    {LinkClicker && (
                        <ButtonNav link="clicker">Help</ButtonNav>
                    )}
                </div>
                <div className="lg:block lg:w-[60%] lg:min-h-full hidden bg-(--color-red-background) dark:bg-(--color-red-background-dark)">
                    <Lamp itsDark={itsDark} setItsDark={setItsDark} />
                    {/* donne les infos du dark mode à la Lamp */}
                    <div className="flex flex-col items-center pt-40">
                        <Text tag='h1' name='h1'>Tom Fourneaux</Text>
                        <Text tag='p' align='center' size="base">Etudiant et passionné de codage, voici mon portfolio</Text>
                        <ButtonNav link="me_contacter">Contactez moi</ButtonNav>
                    </div>
                </div>
            </section>
            <div className="relative h-[350px] flex items-center justify-center">
                <div className="absolute inset-0 bg-[url(/img/illustration-index.png)] bg-fixed bg-cover bg-center blur-xs z-0"></div>
                <Text tag='h2' name='h2' className="relative z-10 text-white font-bold">
                    A PROPOS DE MOI
                </Text> 
            </div>
            <section className="flex flex-col items-center mx-5 lg:mx-20">
                <section>
                    <div className="lg:flex lg:flex-col">
                        <PresentationIndex>Je suis un jeune développeur web de 19 ans, actuellement étudiant à la Normandie Web School (NWS) de Rouen, où je suis inscrit en Bachelor Chef de Projets Digitaux. Passionné par le monde du développement web et le code depuis mon plus jeune âge, j’ai naturellement orienté mes études et ma carrière vers ce domaine en constante évolution.</PresentationIndex>
                        <img src="/img/illustration_presentation/illustration_dev.png" alt="illustration developpeur web" className="m-auto max-w-[90%] p-[15px] lg:self-center lg:w-auto lg:max-w-[35%]"/>
                    </div>
                </section>
                <div className="flex gap-5">
                    <ButtonNav link="cv">Mon CV</ButtonNav>
                    <ButtonNav link="competences">Compétences</ButtonNav>
                </div>
            </section>
            <section className="flex flex-col items-center">
                <Text tag='h2' name='h2' className="mt-10 lg:mt-20">PROJETS</Text>
                <div className="my-10">
                    <div className="flex items-center my-5">
                        <img src="\img\projets\img\logo-vertical.png" alt="Portfolio Tom Fourneaux" className="max-h-20 my-2.5 mx-5"/>
                        <div>
                            <Text tag="h3" name="h3" size="lg">Portfolio</Text>
                            <Text tag="p" size="base">Projet consistant à créer un portfolio.</Text>
                            <SeeMore link="projets#projet-portfolio"/>
                        </div>
                    </div>

                    <div className="flex items-center my-5">
                        <img src="/img/logo_des_projets/logo-club-eco-st-sever.png" alt="Club Eco Saint Sever" className="max-h-20 my-2.5 mx-5"/>
                        <div>
                            <Text tag="h3" name="h3" size="lg">Club Eco Saint Sever</Text>
                            <Text tag="p" size="base">Projet qui consistait à créer une identité visuelle pour le Club Eco de Saint Sever.</Text>
                            <SeeMore link="projets#projet-clubecosaintsever"/>
                        </div>
                    </div>
                </div>
                <ButtonNav link="projets">Mes projets</ButtonNav>
            </section>
        </div>
    );
}

export default Index;
