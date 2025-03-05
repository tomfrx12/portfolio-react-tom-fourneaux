import "/src/css/style-cv.css";

import TOM from "../assets/img/cv/TOM.jpeg"
import qrcode_linkedin from "../assets/img/qrcode/qrcode_linkedin.jpg"
import qrcode_github from "../assets/img/qrcode/qrcode_github.png"
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



function CV() {
    return (
        <>
            <main>
                <div className="contenue">
                    <section className="header-cv">
                        <div className="text">
                            <img src={TOM} alt="Photo de Profil CV Tom Fourneaux" className="tom"/>
                            <h1>TOM FOURNEAUX</h1>
                            <h2>DEVELOPPEUR WEB</h2>
                            <div className="stage">
                                <p>Recherche stage alterné non rémunéré</p>
                                <p>Du 10 mars au 20 juin 2025</p>
                            </div>
                        </div>
                        <div className="gauche">
                            <ul className="infos">
                                <li><p>Âge<br/>18 ans</p></li>
                                <li><p>E-mail<br/><span className="mail">tfourneaux@normandiewebschool.fr</span></p></li>
                                <li><p>Mobile<br/>06 80 50 14 52</p></li>
                                <li><p>Adresse<br/>799 rue du château,<br/>Bois-Héroult</p></li>
                                <li><p>Langue<br/>Anglais</p></li>
                                <li><p>Permis<br/>B + Véhicule</p></li>
                            </ul>
                            <div>
                                <h3>CENTRES {"D'INTÉRÊT"}</h3>
                                <ul className="centre-dinteret">
                                    <li>Jeux-vidéos</li>
                                    <li>Codage</li>
                                    <li>Numérique</li>
                                    <li>Construction</li>
                                    <li>Basket Ball</li>
                                    <li>Collections en<br/>tout genres</li>
                                </ul>
                            </div>
                            <div className="qrcodes">
                                <div className="linkedin">
                                    <p>LinkedIn</p>
                                    <img src={qrcode_linkedin} alt="qrcode LinkedIn"/>
                                </div>
                                <div className="github">
                                    <p>Github</p>
                                    <img src={qrcode_github} alt="qrcode Github"/>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="main-cv">
                        <h3>COMPÉTENCES</h3>
                        <div>
                            <ul className="competences">
                                <li>SEO</li>
                                <li>CMS création {"d'un"} site web</li>
                                <li>Développer le site en fonction des cahiers des charges</li>
                                <li>Savoir comment utiliser Git et Github</li>
                                <li>Pratiques de développement W3c et débogage</li>
                            </ul>
                        </div>
                        <h3>EXPÉRIENCE :</h3>
                        <div>
                            <ul className="experience">
                                <li><b>Création Portfolio: </b>2024<br/><a href="/">mon portfolio</a></li>
                                <li><b>Club Eco Saint Sever: </b>2024</li>
                                <li><b>Projet BDE, organisation voyage Dublin: </b>2024</li>
                            </ul>
                            <a href="/projets" className="a_button" title="Projets">Mes projets</a>
                        </div>
                        <h3>FORMATION :</h3>
                        <div>
                            <ul className="formation">
                                <li><b>Bachelor chef de projet digitaux</b><br/>Normandie Web School (NWS)<br/>Développement Web<br/>Rouen<br/>2024-2027</li>
                                <li><b>Baccalauréat Général Spécialités NSI et Maths</b><br/>Lycée Delamarre Debouteville<br/>Forges les eaux<br/>2021-2024</li>
                            </ul>
                        </div>
                        <div className="outils-langages">
                            <h3>Mes Outils :</h3>
                            <div className="outils">
                                <ul className="list-outils-langages">
                                    <li>
                                        <img src={vscode} alt="logo visual studio code"/>
                                        <span>Visual Studio Code</span>
                                    </li>
                                    <li>
                                        <img src={wordpress} alt="logo wordpress"/>
                                        <span>WordPress</span>
                                    </li>
                                    <li>
                                        <img src={canva} alt="logo canva" id="canva"/>
                                        <span>Canva</span>
                                    </li>
                                </ul>
                                <ul className="list-outils-langages">
                                    <li>
                                        <img src={photoshop} alt="logo photoshop"/>
                                        <span>Photoshop</span>
                                    </li>
                                    <li>
                                        <img src={illustrator} alt="logo illustrator"/>
                                        <span>Illustrator</span>
                                    </li>
                                    <li>
                                        <img src={indesign} alt="logo indesign"/>
                                        <span>InDesign</span>
                                    </li>
                                </ul>
                            </div>
                            <a href="/competences" className="a_button" title="Compétences">Mes Compétences</a>
                            <h3>Langages :</h3>
                            <div className="langages">
                                <ul className="list-outils-langages">
                                    <li>
                                        <img src={python} alt="logo python"/>
                                        <span>Python</span>
                                    </li>
                                    <li>
                                        <img src={html} alt="logo html"/>
                                        <span>HTML</span>
                                    </li>
                                    <li>
                                        <img src={css} alt="logo css"/>
                                        <span>CSS</span>
                                    </li>
                                    <li>
                                        <img src={js} alt="logo javascript"/>
                                        <span>JavaScript</span>
                                    </li>
                                </ul>
                                <ul className="list-outils-langages">
                                    <li>
                                        <img src={sql} alt="logo my sql"/>
                                        <span>MySQL</span>
                                    </li>
                                    <li>
                                        <img src={php} alt="logo php"/>
                                        <span>PHP</span>
                                    </li>
                                    <li>
                                        <img src={react} alt="logo react.js"/>
                                        <span>React.js</span>
                                    </li>
                                    <li>
                                        <img src={tailwindcss} alt="logo tailwind css"/>
                                        <span>TailwindCSS</span>
                                    </li>
                                </ul>
                            </div>
                            <a href="/competences" className="a_button" title="Compétences">Mes Compétences</a>
                        </div>
                    </section>
                </div>
                <a href="../assets/img/cv/CV Tom Fourneaux InDesign.pdf" download className="download-button" title="Télécharger mon cv">Télécharger mon CV</a>
            </main>
        </>
    );
}

export default CV;