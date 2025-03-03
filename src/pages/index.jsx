import Footer from "../components/footer";
import Header from "../components/header";

import pptom from "../assets/img/tom.JPG"

function Index() {
    return (
        <>
            <Header/>
            <main>
                <section className="me">
                    <div className="debut-presta">
                            <img src={pptom} alt="photo de profil Tom FOURNEAUX"/>
                            <h1>Tom Fourneaux</h1>
                            <p className="presentation">Etudiant et passionné de codage, voici mon portfolio</p>
                            <a href="me_contater.html" className="a_button">Contactez moi</a>
                    </div>
                        <h2>A PROPOS DE MOI</h2>
                        <p className="presentation">Je suis un jeune développeur web de 18 ans étudiant à la Normandie Web School (NWS) de Rouen en Bachelor Chef de Projets digitaux. Je suis passionné par le développement web et, actuellement, je me forme aux technologies telles que HTML, CSS, JavaScript, etc... tout en découvrant des frameworks comme React. Mon objectif est d’acquérir une expertise technique tout en améliorant mes compétences en gestion de projets et en collaboration au sein d’équipes de développement. Je suis actuellement en recherche {"d'un"}stage ou {"d'une"} alternance dans le développement web. Pour plus de précision, mon cv est disponible</p>
                        <div className="buttons">
                            <a href="cv.html" className="a_button">Mon CV</a>
                            <a href="competences.html" className="a_button">Compétences</a>
                        </div>
                </section>
                <section className="xp">
                    <h2>PROJETS</h2>
                    <div className="4carte">
                        <div className="carte">
                            <img src="assets/img/logo_des_projets/petit_logo.png" alt="Portfolio Tom Fourneaux"/>
                            <div className="text">
                                <h3>Portfolio</h3>
                                <p>Projet consistant à créer un portfolio.</p>
                                <a href="#" className="a_button_projet">Voir plus</a>
                            </div>
                        </div>

                        <div className="carte">
                            <img src="assets/img/logo_des_projets/logo-club-eco-st-sever.png" alt="Club Eco Saint Sever"/>
                            <div className="text">
                                <h3>Club Eco Saint Sever</h3>
                                <p>Projet qui consistait à créer une identité visuelle pour le Club Eco de Saint Sever.</p>
                                <a href="#" className="a_button_projet">Voir plus</a> 
                            </div>
                        </div>
                    </div>
                    <a href="projets.html" className="a_button">Mes projets</a>
                </section>
            </main>
            <Footer/>
        </>
    );
}

export default Index;
