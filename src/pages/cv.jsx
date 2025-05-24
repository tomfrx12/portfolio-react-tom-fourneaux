import { Link } from "react-router"

import TOM from "../assets/img/tom.png"
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
            <h1 className="text-white text-center m-[20px] py-[10px] px-[20px] bg-black lg:text-2xl">Mon CV</h1>
            <div className="lg:grid lg:grid-cols-2">
                <section className="flex flex-col text-center border-5 border-solid border-[var(--color-cv-primary)]">
                    <div>
                        <img src={TOM} alt="Photo de Profil CV Tom Fourneaux" className="justify-self-center max-w-[40%] mt-[20px] rounded-full border-5 border-solid border-[var(--color-cv-primary)]"/>
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
                            <div className="max-w-[50%] flex flex-col items-center lg:max-w-full">
                                <p>LinkedIn</p>
                                <Link to="https://www.linkedin.com/in/tom-fourneaux-078644332/" className="flex justify-center">
                                    <img className="items-center max-w-[70%] lg:max-w-[200px] lg:w-[200px]" src={qrcode_linkedin} alt="qrcode LinkedIn"/>
                                </Link>
                            </div>
                            <div className="max-w-[50%] flex flex-col items-center lg:max-w-full">
                                <p>Github</p>
                                <Link to="https://github.com/tomfrx12" className="flex justify-center">
                                    <img className="max-w-[70%] lg:max-w-[200px] lg:w-[200px]" src={qrcode_github} alt="qrcode Github"/>
                                </Link>
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
                            <li className="my-[0px] mx-[20px]"><b>- Création Portfolio: </b>2024<p className="underline"><Link href="/" className="pl-[20px]">Mon portfolio</Link></p></li>
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
                    <div className="flex flex-col gap-[50px] bg-[var(--color-cv-primary)] rounded-[20px] p-[10px] m-[10px] shadow-[5px_5px_5px_var(--color-grey)]">
                        <div>
                            <h3>Mes Outils :</h3>
                            <div className="flex justify-around h-34 lg:h-auto lg:mb-[20px]">
                                <ul className="grid content-between lg:gap-[20px]">
                                    <li className="flex items-center">
                                        <img className="w-[30px] lg:w-[50px]" src={vscode} alt="logo visual studio code"/>
                                        <span className="mx-5">Visual Studio Code</span>
                                    </li>
                                    <li className="flex items-center">
                                        <img className="w-[30px] lg:w-[50px]" src={wordpress} alt="logo wordpress"/>
                                        <span className="mx-5">WordPress</span>
                                    </li>
                                    <li className="flex items-center">
                                        <img className="w-[30px] lg:w-[50px]" src={canva} alt="logo canva" id="canva"/>
                                        <span className="mx-5">Canva</span>
                                    </li>
                                </ul>
                                <ul className=" grid content-between lg:gap-[20px]">
                                    <li className="flex items-center">
                                        <img className="w-[30px] lg:w-[50px]" src={photoshop} alt="logo photoshop"/>
                                        <span className="mx-5">Photoshop</span>
                                    </li>
                                    <li className="flex items-center">
                                        <img className="w-[30px] lg:w-[50px]" src={illustrator} alt="logo illustrator"/>
                                        <span className="mx-5">Illustrator</span>
                                    </li>
                                    <li className="flex items-center">
                                        <img className="w-[30px] lg:w-[50px]" src={indesign} alt="logo indesign"/>
                                        <span className="mx-5">InDesign</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex justify-center">
                                <ButtonNav link="competences">Mes Compétences</ButtonNav>
                            </div>
                        </div>
                        <div>
                            <h3>Langages :</h3>
                            <div className="flex justify-around h-34 lg:h-auto lg:mb-[20px]">
                                <ul className="grid content-between lg:gap-[20px]">
                                    <li className="flex items-center">
                                        <img className="w-[30px] lg:w-[50px]" src={python} alt="logo python"/>
                                        <span className="mx-5">Python</span>
                                    </li>
                                    <li className="flex items-center">
                                        <img className="w-[30px] lg:w-[50px]" src={html} alt="logo html"/>
                                        <span className="mx-5">HTML</span>
                                    </li>
                                    <li className="flex items-center">
                                        <img className="w-[30px] lg:w-[50px]" src={css} alt="logo css"/>
                                        <span className="mx-5">CSS</span>
                                    </li>
                                    <li className="flex items-center">
                                        <img className="w-[30px] lg:w-[50px]" src={js} alt="logo javascript"/>
                                        <span className="mx-5">JavaScript</span>
                                    </li>
                                </ul>
                                <ul className="grid content-between lg:gap-[20px]">
                                    <li className="flex items-center">
                                        <img className="w-[30px] lg:w-[50px]" src={sql} alt="logo my sql"/>
                                        <span className="mx-5">MySQL</span>
                                    </li>
                                    <li className="flex items-center">
                                        <img className="w-[30px] lg:w-[50px]" src={php} alt="logo php"/>
                                        <span className="mx-5">PHP</span>
                                    </li>
                                    <li className="flex items-center">
                                        <img className="w-[30px] lg:w-[50px]" src={react} alt="logo react.js"/>
                                        <span className="mx-5">React.js</span>
                                    </li>
                                    <li className="flex items-center">
                                        <img className="w-[30px] lg:w-[50px]" src={tailwindcss} alt="logo tailwind css"/>
                                        <span className="mx-5">TailwindCSS</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex justify-center">
                                <ButtonNav link="competences">Mes Compétences</ButtonNav>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <a href="../assets/img/cv/CV Tom Fourneaux InDesign.pdf" download className="flex justify-center self-center bg-white text-black rounded-[20px] m-[10px] px-[10px] transition:transform duration:300 ease-in-out hover:scale-105 lg:py-[10px] lg:px-[15x]">Télécharger mon CV</a>
        </>
    );
}

export default CV;
