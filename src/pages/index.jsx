import "/src/css/style-index.css";

import pptom from "../assets/img/tom.png";
import illustration_dev from "../assets/img/illustration presentation/illustration dev 1.png";
import petit_logo from "../assets/img/logo_des_projets/petit_logo.png";
import logo_club_st_sever from "../assets/img/logo_des_projets/logo-club-eco-st-sever.png";

function Index() {
    return (
        <>
            <main>
                <section className="me">
                    <div className="debut-presta">
                            <img src={pptom} alt="photo de profil Tom FOURNEAUX"/>
                            <h1>Tom Fourneaux</h1>
                            <p className="pres">Etudiant et passionné de codage, voici mon portfolio</p>
                            <a href="/me_contater" className="a_button">Contactez moi</a>
                    </div>
                        <h2>A PROPOS DE MOI</h2>
                        <section className="presentation">
                            <div className="text-image">
                                <div className="text">
                                    <p>Je suis un jeune développeur web de 18 ans, actuellement étudiant à la Normandie Web School (NWS) de Rouen, où je suis inscrit en Bachelor Chef de Projets Digitaux. Passionné par le monde du développement web depuis mon plus jeune âge, j’ai naturellement orienté mes études et ma carrière vers ce domaine en constante évolution. Ce qui me motive avant tout, c’est la possibilité de créer des expériences numériques qui répondent aux besoins des utilisateurs tout en étant techniquement performantes et esthétiquement soignées.</p>
                        
                                    <p>Ma formation m’a permis de me familiariser avec plusieurs technologies essentielles, notamment HTML, CSS, et JavaScript, des langages que j’utilise au quotidien pour la création et l’optimisation de sites web. En parallèle, je me forme également à des frameworks modernes comme React, afin d’élargir mes compétences et d’être capable de réaliser des projets web plus complexes et dynamiques. Cette diversité de technologies me permet de m’adapter aux différents besoins des projets et de toujours offrir des solutions efficaces et innovantes.</p>
                                </div>
                                <img src={illustration_dev} alt="illustration developpeur web"/>
                                <div className="text">
                                    <p>Au-delà de la technique, mon cursus à la NWS m’a aussi permis de me perfectionner dans des compétences transversales telles que la gestion de projet et la collaboration au sein d’équipes pluridisciplinaires. Je suis convaincu que la réussite d’un projet web ne réside pas seulement dans la qualité du code, mais aussi dans la capacité à communiquer, à organiser le travail et à respecter les délais tout en répondant aux attentes du client. C’est pourquoi je {"m'efforce d’allier"} expertise technique et sens de l’organisation pour garantir la réussite des projets auxquels je participe.</p>
                        
                                    <p>Aujourd’hui, je suis à la recherche d’un stage ou d’une alternance en développement web, afin de mettre en pratique mes connaissances et de continuer à apprendre au contact de professionnels expérimentés. Je suis particulièrement intéressé par les environnements de travail collaboratifs, où je pourrais à la fois apporter mes compétences et en acquérir de nouvelles. Vous pouvez consulter mon CV pour plus de détails sur mes compétences et expériences.</p>
                                </div>
                            </div>
                        </section>  
                        <div className="buttons">
                            <a href="/cv" className="a_button">Mon CV</a>
                            <a href="/competences" className="a_button">Compétences</a>
                        </div>
                </section>
                <section className="xp">
                    <h2>PROJETS</h2>
                    <div className="4carte">
                        <div className="carte">
                            <img src={petit_logo} alt="Portfolio Tom Fourneaux"/>
                            <div className="text">
                                <h3>Portfolio</h3>
                                <p>Projet consistant à créer un portfolio.</p>
                                <a href="#" className="a_button_projet">Voir plus</a>
                            </div>
                        </div>

                        <div className="carte">
                            <img src={logo_club_st_sever} alt="Club Eco Saint Sever"/>
                            <div className="text">
                                <h3>Club Eco Saint Sever</h3>
                                <p>Projet qui consistait à créer une identité visuelle pour le Club Eco de Saint Sever.</p>
                                <a href="#" className="a_button_projet">Voir plus</a> 
                            </div>
                        </div>
                    </div>
                    <a href="/projets" className="a_button">Mes projets</a>
                </section>
            </main>
        </>
    );
}

export default Index;
