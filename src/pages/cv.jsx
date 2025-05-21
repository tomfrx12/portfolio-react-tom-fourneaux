import { Link } from "react-router"

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

import ButtonNav from "../components/a_button"



function CV() {
    return (
        <>
            <h1 className="text-center m-[20px] py-[10px] px-[20px] bg-black lg:text-2xl">Mon CV</h1>
            <div className="lg:grid lg:grid-cols-2">
                <section className="flex flex-col text-center border-5 border-solid border-[var(--color-cv-primary)]">
                    <div>
                        <img src={TOM} alt="Photo de Profil CV Tom Fourneaux" className="justify-self-center max-w-[40%] rounded-full border-5 border-solid border-[var(--color-cv-primary)]"/>
                        <h1 className="mt-[40px] mb-[10px]">TOM FOURNEAUX</h1>
                        <h2>DEVELOPPEUR WEB</h2>
                        <div className="text-center my-[20px] mx-[0px] p-[10px] bg-[var(--color-cv-primary)] inline-block rounded-[5px] shadow[5px_5px_5px_white]">
                            <p className="text-xs lg:text-2xl">Recherche stage alterné non rémunéré</p>
                            <p className="text-xs lg:text-2xl">Du 10 mars au 20 juin 2025</p>
                        </div>
                    </div>
                    <div className="text-left">
                        <ul className="list-none pl-[20px]">
                            <li className="my-[20px] mx-[0px]"><p>Âge<br/>18 ans</p></li>
                            <li className="my-[20px] mx-[0px]"><p>E-mail<br/><span className="text-xs lg:text-2xl">tfourneaux@normandiewebschool.fr</span></p></li>
                            <li className="my-[20px] mx-[0px]"><p>Mobile<br/>06 80 50 14 52</p></li>
                            <li className="my-[20px] mx-[0px]"><p>Adresse<br/>799 rue du château,<br/>Bois-Héroult</p></li>
                            <li className="my-[20px] mx-[0px]"><p>Langue<br/>Anglais</p></li>
                            <li className="my-[20px] mx-[0px]"><p>Permis<br/>B + Véhicule</p></li>
                        </ul>
                        <div>
                            <h3 className="mt-[40px] ml-[10px]">CENTRES {"D'INTÉRÊT"}</h3>
                            <ul className="list-none pl-[30px]">
                                <li>Jeux-vidéos</li>
                                <li>Codage</li>
                                <li>Numérique</li>
                                <li>Construction</li>
                                <li>Basket Ball</li>
                                <li>Collections en<br/>tout genres</li>
                            </ul>
                        </div>
                        <div className="my-[50px] mx-[20px] flex justify-around text-center lg:text-left lg:gap-[40px]">
                            <div className="max-w-[50%] lg:max-w-full">
                                <p>LinkedIn</p>
                                <img className="max-w-[50%] lg:max-w-[200px] lg:w-[200px]" src={qrcode_linkedin} alt="qrcode LinkedIn"/>
                            </div>
                            <div className="max-w-[50%] lg:max-w-full">
                                <p>Github</p>
                                <img className="max-w-[50%] lg:max-w-[200px] lg:w-[200px]" src={qrcode_github} alt="qrcode Github"/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content-end">
                    <h3 className="mt-[40px] ml-[10px]">COMPÉTENCES</h3>
                    <div>
                        <ul className="list-none mb-[30px]">
                            <li className="my-[0px] mx-[20px]">- SEO</li>
                            <li className="my-[0px] mx-[20px]">- CMS création {"d'un"} site web</li>
                            <li className="my-[0px] mx-[20px]">- Développer le site en fonction des cahiers des charges</li>
                            <li className="my-[0px] mx-[20px]">- Savoir comment utiliser Git et Github</li>
                            <li className="my-[0px] mx-[20px]">- Pratiques de développement W3c et débogage</li>
                        </ul>
                    </div>
                    <h3 className="mt-[40px] ml-[10px]">EXPÉRIENCE :</h3>
                    <div>
                        <ul className="list-none mb-[30px]">
                            <li className="my-[0px] mx-[20px]"><b>- Création Portfolio: </b>2024<Link href="/" className="pl-[20px]">Mon portfolio</Link></li>
                            <li className="my-[0px] mx-[20px]"><b>- Club Eco Saint Sever: </b>2024</li>
                            <li className="my-[0px] mx-[20px]"><b>- Projet BDE, organisation voyage Dublin: </b>2024</li>
                        </ul>
                        <ButtonNav link="projets">Mes projets</ButtonNav>
                    </div>
                    <h3 className="mt-[40px] ml-[10px]">FORMATION :</h3>
                    <div>
                        <ul className="list-none mb-[30px]">
                            <li className="my-[10px] mx-[20px]"><b>- Bachelor chef de projet digitaux</b><br/>Normandie Web School (NWS)<br/>Développement Web<br/>Rouen<br/>2024-2027</li>
                            <li className="my-[10px] mx-[20px]"><b>- Baccalauréat Général Spécialités NSI et Maths</b><br/>Lycée Delamarre Debouteville<br/>Forges les eaux<br/>2021-2024</li>
                        </ul>
                    </div>
                    <div className="bg-[var(--color-cv-primary)] rounded-[20px] p-[10px] m-[10px] shadow-[5px_5px_5px_var(--color-grey)]">
                        <h3 className="mt-[40px] ml-[10px]">Mes Outils :</h3>
                        <div>
                            <ul className="lg:inline-block lg:max-w-[40%]">
                                <li className="flex items-center my-[10px] mx-[0px]">
                                    <img className="max-w-[10%] lg:max-w-[20%]" src={vscode} alt="logo visual studio code"/>
                                    <span className="ml-[20px]">Visual Studio Code</span>
                                </li>
                                <li className="flex items-center my-[10px] mx-[0px]">
                                    <img className="max-w-[10%] lg:max-w-[20%]" src={wordpress} alt="logo wordpress"/>
                                    <span className="ml-[20px]">WordPress</span>
                                </li>
                                <li className="flex items-center my-[10px] mx-[0px]">
                                    <img className="max-w-[10%] lg:max-w-[20%]" src={canva} alt="logo canva" id="canva"/>
                                    <span className="ml-[20px]">Canva</span>
                                </li>
                            </ul>
                            <ul className="lg:inline-block lg:max-w-[40%]">
                                <li className="flex items-center my-[10px] mx-[0px]">
                                    <img className="max-w-[10%] lg:max-w-[20%]" src={photoshop} alt="logo photoshop"/>
                                    <span className="ml-[20px]">Photoshop</span>
                                </li>
                                <li className="flex items-center my-[10px] mx-[0px]">
                                    <img className="max-w-[10%] lg:max-w-[20%]" src={illustrator} alt="logo illustrator"/>
                                    <span className="ml-[20px]">Illustrator</span>
                                </li>
                                <li className="flex items-center my-[10px] mx-[0px]">
                                    <img className="max-w-[10%] lg:max-w-[20%]" src={indesign} alt="logo indesign"/>
                                    <span className="ml-[20px]">InDesign</span>
                                </li>
                            </ul>
                        </div>
                        <ButtonNav link="competences">Mes Compétences</ButtonNav>
                        <h3 className="mt-[40px] ml-[10px]">Langages :</h3>
                        <div>
                            <ul className="lg:inline-block lg:max-w-[40%]">
                                <li className="flex items-center my-[10px] mx-[0px]">
                                    <img className="max-w-[10%] lg:max-w-[20%]" src={python} alt="logo python"/>
                                    <span className="ml-[20px]">Python</span>
                                </li>
                                <li className="flex items-center my-[10px] mx-[0px]">
                                    <img className="max-w-[10%] lg:max-w-[20%]" src={html} alt="logo html"/>
                                    <span className="ml-[20px]">HTML</span>
                                </li>
                                <li className="flex items-center my-[10px] mx-[0px]">
                                    <img className="max-w-[10%] lg:max-w-[20%]" src={css} alt="logo css"/>
                                    <span className="ml-[20px]">CSS</span>
                                </li>
                                <li className="flex items-center my-[10px] mx-[0px]">
                                    <img className="max-w-[10%] lg:max-w-[20%]" src={js} alt="logo javascript"/>
                                    <span className="ml-[20px]">JavaScript</span>
                                </li>
                            </ul>
                            <ul className="lg:inline-block lg:max-w-[40%]">
                                <li className="flex items-center my-[10px] mx-[0px]">
                                    <img className="max-w-[10%] lg:max-w-[20%]" src={sql} alt="logo my sql"/>
                                    <span className="ml-[20px]">MySQL</span>
                                </li>
                                <li className="flex items-center my-[10px] mx-[0px]">
                                    <img className="max-w-[10%] lg:max-w-[20%]" src={php} alt="logo php"/>
                                    <span className="ml-[20px]">PHP</span>
                                </li>
                                <li className="flex items-center my-[10px] mx-[0px]">
                                    <img className="max-w-[10%] lg:max-w-[20%]" src={react} alt="logo react.js"/>
                                    <span className="ml-[20px]">React.js</span>
                                </li>
                                <li className="flex items-center my-[10px] mx-[0px]">
                                    <img className="max-w-[10%] lg:max-w-[20%]" src={tailwindcss} alt="logo tailwind css"/>
                                    <span className="ml-[20px]">TailwindCSS</span>
                                </li>
                            </ul>
                        </div>
                        <ButtonNav link="competences">Mes Compétences</ButtonNav>
                    </div>
                </section>
            </div>
            <a href="../assets/img/cv/CV Tom Fourneaux InDesign.pdf" download className="mb-[40px] mx-[0px] mt-[50px] p-[10px] bg-black text-white no-underline font-bold text-center transition:transform duration:200 linear lg:self-center" title="Télécharger mon cv">Télécharger mon CV</a>
        </>
    );
}

export default CV;
