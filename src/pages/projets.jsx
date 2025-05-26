import { useEffect, useContext } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router";

import logo_handisup from "../assets/img/projets/img/handisup/logo-handisup.png";
import logo_handisup_noir_et_blanc from "../assets/img/projets/img/handisup/logo-handisup-noir-et-blanc.png";
import logo_vertical from "../assets/img/projets/img/logo-vertical.png";
import alternative_banniere from "../assets/img/projets/img/alternative bannière.png";
import maquette from "../assets/img/projets/img/maquette/maquette.png";
import maquette1 from "../assets/img/projets/img/maquette/maquette1.png";
import maquette2 from "../assets/img/projets/img/maquette/maquette2.png";
import maquette3 from "../assets/img/projets/img/maquette/maquette3.png";
import maquette4 from "../assets/img/projets/img/maquette/maquette4.png";
import maquette5 from "../assets/img/projets/img/maquette/maquette5.png";
import banniere from "../assets/img/projets/img/bannière.png";
import fiches from "../assets/img/projets/img/interview/Fiches.png";
import banniere_bde from "../assets/img/projets/img/banniere.png";
import e_commerce from"../assets/img/projets/img/E-commerce.png"
import figma from "../assets/img/logo_des_projets/figma-logo.webp"

import { DarkModeContext } from "../components/DarkModeProvider";

function Projets() {
    const location = useLocation();

    useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

    const {darkMode} = useContext(DarkModeContext);

    return (
        <>
            <h1 className="text-white text-center m-[20px] py-[10px] px-[20] bg-black lg:text-3xl">Projet</h1>
            <section className="projets">
                {/* <div class="carte">
                    <img src="" alt="">
                    <div class="text">
                        <h2>Refonte portfolio</h2>
                        <p>Suite a la création de mon portfolio en HTML CSS, j'ai appris qu'il existaits React.js et TailwindCSS. Donc je souhaite par la suite de mon portfolio le faire subir une refonte avec ces framework.</p>
                    </div>
                </div> */}

                <div className={`bg-[var(--color-grey)] rounded-[10px] m-[20px] flex flex-col lg: p-[20px] lg:items-center lg:justify-around lg:mb-[40px] lg:mt-[40px] ${darkMode ? 'shadow-[10px_10px_10px_white]' : 'shadow-[10px_10px_10px_black]'}`}>
                    <img className="m-[30px] max-w-full max-h-max text-center" src={e_commerce} alt="page produit site e-commerce"/>
                    <div className="flex flex-col lg:w-[50%] lg:justify-center">
                        <div>
                            <h2 className="m-[0] text-center lg:text-2xl lg:font-black">Création site E-commerce</h2>
                            <p className="m-[10px]">Pendant deux semaines de cours que {"j'ai"} eu pendant mon apprentisage {"j'ai"} appris à utiliser WordPress et Figma afin de créer un site e-commerce et de créer une maquette sur figma avec un wireframe et des composants (malheuresement il {"n'est"} {"qu'en"} local)</p>
                        </div>
                        <p className="mb-[0px] ml-[10px]">Lien vers la maquette figma</p>
                        <Link to="https://www.figma.com/design/xQuzIs2UGqYwRKOxep17rb/Maquettage?node-id=0-1&t=gZJTag1SQ0CL5CcZ-1" title="Création site e-commerce" className="max-w-[40px] max-h-[40px] bg-white text-black rounded-[20px] p-[5px] my-[5px] text-center self-center transition-transform duration-300 ease-in-out shadow-[0px_0px_50px_black] hover:scale-105 lg:flex lg:justify-center lg:hover:scale-115">
                            <img className="h-[25px] max-w-full" src={figma} alt="logo figma"/>
                        </Link>
                    </div>
                </div>

                <div className={`bg-[var(--color-grey)] rounded-[10px] m-[20px] flex flex-col lg: p-[20px] lg:items-center lg:justify-around lg:mb-[40px] lg:mt-[40px] ${darkMode ? 'shadow-[10px_10px_10px_white]' : 'shadow-[10px_10px_10px_black]'}`}>
                    <img className="m-[30px] text-center lg:w-[200px]" src={logo_handisup} alt="logo handisup"/>
                    <div className="flex flex-col lg:w-[50%] lg:justify-center">
                        <div>
                            <h2 className="m-[0] text-center lg:text-2xl lg:font-black">Refonte Handisup</h2>
                            <p className="m-[10px]">Lors de mon apprentisage à la NWS, {"j'ai"} eu la chance de crée avec un groupe {"d'autres"} éléves, uen refonte de tout le site de {"l'association"} Handisup est une association qui conseille les lycéens, les étudiants et les jeunes diplômés en situation de handicap de Haute-Normandie pour qu’ils puissent réussir leurs études et trouver un emploi à la hauteur de leurs attentes et de leurs compétences.</p>
                        </div>
                        <p className="mb-[0px] ml-[10px]">Page principal :</p>
                        <Link to="https://handisup5.normandieweb.school/" title="site refonte Handisup" className="max-w-[40px] max-h-[40px] bg-white text-black rounded-[20px] p-[5px] my-[5px] text-center self-center transition-transform duration-300 ease-in-out shadow-[0px_0px_50px_black] hover:scale-105 lg:flex lg:justify-center lg:hover:scale-115">
                            <img className="h-[25px] max-w-full" src={logo_handisup_noir_et_blanc} alt="logo handisup noir et blanc"/>
                        </Link>
                    </div>
                </div>

                <div id="projet-portfolio" className={`bg-[var(--color-grey)] rounded-[10px] m-[20px] flex flex-col lg: p-[20px] lg:items-center lg:justify-around lg:mb-[40px] lg:mt-[40px] ${darkMode ? 'shadow-[10px_10px_10px_white]' : 'shadow-[10px_10px_10px_black]'}`}>
                    <img className="m-[30px] max-w-full max-h-max text-center lg:max-w-[20%]" src={logo_vertical} alt="illustration pour projet portfolio"/>
                    <div className="flex flex-col lg:w-[50%] lg:justify-center">
                        <div className="text">
                            <h2 className="m-[0] text-center lg:text-2xl lg:font-black" >Portfolio</h2>
                            <p className="m-[10px]" >Ceci est la création de mon portfolio, vous êtes actuellement sur celui-ci. Il a été crée en HTML CSS et JavaScript.</p>
                        </div>
                        <p className="mb-[0px] ml-[10px]" >Page principal :</p>
                        <Link to="/" title="Home portfolio" className="max-w-[40px] max-h-[40px] bg-white text-black rounded-[20px] p-[5px] my-[5px] text-center self-center transition-transform duration-300 ease-in-out shadow-[0px_0px_50px_black] hover:scale-105 lg:flex lg:justify-center lg:hover:scale-115">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 24 24">
                                <path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 10 21 L 10 14 L 14 14 L 14 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z"></path>
                            </svg>
                        </Link>
                    </div>
                </div>

                    <div id="projet-clubecosaintsever" className={`bg-[var(--color-grey)] rounded-[10px] m-[20px] flex flex-col lg: p-[20px] lg:items-center lg:justify-around lg:mb-[40px] lg:mt-[40px] ${darkMode ? 'shadow-[10px_10px_10px_white]' : 'shadow-[10px_10px_10px_black]'}`}>
                        <img className="m-[30px] max-w-full max-h-max text-center" src={alternative_banniere} alt="illustration pour projet club eco saint sever"/>
                        <div className="flex flex-col lg:w-[50%] lg:justify-center">
                            <div className="text">
                                <h2 className="m-[0] text-center lg:text-2xl lg:font-black" >Club Eco Saint Sever</h2>
                                <p className="m-[10px]" >A la NWS et avec {"l'aide"} de la Mission Locale Agglomération de Rouen, {"j'ai"} eu la chance avec un groupe {"d'élèves"}, de mettre en place une nouvelle charte graphique du Club Eco Saint Sever qui est une association à but non lucratif qui regroupe des entreprises pour des actions communues à Saint Sever comme {"l'écologie"}.</p>
                            </div>
                            <p className="mb-[0px] ml-[10px]" >En voir plus :</p>
                            <a href="assets/img/projets/downloads/Présentation_Club_Eco_St_Sever.pdf" title="projet site Club Eco Saint Sever" download className="max-w-[40px] max-h-[40px] bg-white text-black rounded-[20px] p-[5px] my-[5px] text-center self-center transition-transform duration-300 ease-in-out shadow-[0px_0px_50px_black] hover:scale-105 lg:flex lg:justify-center lg:hover:scale-115">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 32 32">
                                    <path d="M 19 3 C 13.488281 3 9 7.488281 9 13 C 9 15.394531 9.839844 17.589844 11.25 19.3125 L 3.28125 27.28125 L 4.71875 28.71875 L 12.6875 20.75 C 14.410156 22.160156 16.605469 23 19 23 C 24.511719 23 29 18.511719 29 13 C 29 7.488281 24.511719 3 19 3 Z M 19 5 C 23.429688 5 27 8.570313 27 13 C 27 17.429688 23.429688 21 19 21 C 14.570313 21 11 17.429688 11 13 C 11 8.570313 14.570313 5 19 5 Z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className={`bg-[var(--color-grey)] rounded-[10px] m-[20px] flex flex-col lg: p-[20px] lg:items-center lg:justify-around lg:mb-[40px] lg:mt-[40px] ${darkMode ? 'shadow-[10px_10px_10px_white]' : 'shadow-[10px_10px_10px_black]'}`}>
                        <img className="block m-[30px] max-w-full max-h-max text-center lg:hidden" src={maquette} alt="illustration projet maquette figma"/>
                        <div className="hidden lg:block lg:max-h-[300px] lg:overflow-y-scroll lg:scroll-smooth">
                            <div className="lg:flex"><img src={maquette1} alt="maquette figma" className="lg:max-w-[200%] lg:mr-[10px]"/></div>
                            <div className="lg:flex"><img src={maquette2} alt="maquette figma" className="lg:max-w-[200%] lg:mr-[10px]"/></div>
                            <div className="lg:flex"><img src={maquette3} alt="maquette figma" className="lg:max-w-[200%] lg:mr-[10px]"/></div>
                            <div className="lg:flex"><img src={maquette4} alt="maquette figma" className="lg:max-w-[200%] lg:mr-[10px]"/></div>
                            <div className="lg:flex"><img src={maquette5} alt="maquette figma" className="lg:max-w-[200%] lg:mr-[10px]"/></div>
                        </div>
                        <div className="flex flex-col lg:w-[50%] lg:justify-center">
                            <div className="text">
                                <h2 className="m-[0] text-center lg:text-2xl lg:font-black" >Maquette Figma</h2>
                                <p className="m-[10px]" >Je devais reproduire en HTML CSS, une maquette figma au pixel perfect en ajoutant des éléments utilisateur, comme un mode jour nuit en JavaScript.</p>
                            </div>
                            <p className="mb-[0px] ml-[10px]" >En voir plus :</p>
                            <Link to="https://tomfrx12.github.io/controle-html-css/" title="Maquette Figma pixel perfect github" className="max-w-[40px] max-h-[40px] bg-white text-black rounded-[20px] p-[5px] my-[5px] text-center self-center transition-transform duration-300 ease-in-out shadow-[0px_0px_50px_black] hover:scale-105 lg:flex lg:justify-center lg:hover:scale-115">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 30 30">
                                    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div className={`bg-[var(--color-grey)] rounded-[10px] m-[20px] flex flex-col lg: p-[20px] lg:items-center lg:justify-around lg:mb-[40px] lg:mt-[40px] ${darkMode ? 'shadow-[10px_10px_10px_white]' : 'shadow-[10px_10px_10px_black]'}`}>
                        <img className="m-[30px] max-w-full max-h-max text-center" src={banniere} alt="illustration projet bibliothèque vidéos"/>
                        <div className="flex flex-col lg:w-[50%] lg:justify-center">
                            <div className="text">
                                <h2 className="m-[0] text-center lg:text-2xl lg:font-black" >Bibliothèque vidéos</h2>
                                <p className="m-[10px]" >Le but était de concevoir un site de partage de contenus collaboratif en groupe suite a des cours {"d'intégration"} web de {"j'ai"} eu lors que mon apprentisage à la NWS.</p>
                            </div>
                            <p className="mb-[0px] ml-[10px]" >En voir plus :</p>
                            <Link to="https://github.com/Quentin-SAMSON-NWS/Projet-bibliotheque-video" title="projet de bibliothèque video github" className="max-w-[40px] max-h-[40px] bg-white text-black rounded-[20px] p-[5px] my-[5px] text-center self-center transition-transform duration-300 ease-in-out shadow-[0px_0px_50px_black] hover:scale-105 lg:flex lg:justify-center lg:hover:scale-115">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 30 30">
                                    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div className={`bg-[var(--color-grey)] rounded-[10px] m-[20px] flex flex-col lg: p-[20px] lg:items-center lg:justify-around lg:mb-[40px] lg:mt-[40px] ${darkMode ? 'shadow-[10px_10px_10px_white]' : 'shadow-[10px_10px_10px_black]'}`}>
                        <img className="m-[30px] max-w-full max-h-max text-center lg:max-w-full" src={fiches} alt="illustration interview"/>
                        <div className="flex flex-col lg:w-[50%] lg:justify-center">
                            <div className="text">
                                <h2 className="m-[0] text-center lg:text-2xl lg:font-black" >Interview</h2>
                                <p className="m-[10px]" >{"J'ai"} eu la chance lors de mon apprentisages {"d'interviewé"} un élève de troisième année dans ma spécialités, donc le développement web.</p>
                            </div>
                            <p className="mb-[0px] ml-[10px]" >Voir plus :</p>
                            <a href="assets/img/projets/downloads/Fiches_interview.pdfpdf" title="google docs presentation interview A3" download className="max-w-[40px] max-h-[40px] bg-white text-black rounded-[20px] p-[5px] my-[5px] text-center self-center transition-transform duration-300 ease-in-out shadow-[0px_0px_50px_black] hover:scale-105 lg:flex lg:justify-center lg:hover:scale-115">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 32 32">
                                    <path d="M 19 3 C 13.488281 3 9 7.488281 9 13 C 9 15.394531 9.839844 17.589844 11.25 19.3125 L 3.28125 27.28125 L 4.71875 28.71875 L 12.6875 20.75 C 14.410156 22.160156 16.605469 23 19 23 C 24.511719 23 29 18.511719 29 13 C 29 7.488281 24.511719 3 19 3 Z M 19 5 C 23.429688 5 27 8.570313 27 13 C 27 17.429688 23.429688 21 19 21 C 14.570313 21 11 17.429688 11 13 C 11 8.570313 14.570313 5 19 5 Z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className={`bg-[var(--color-grey)] rounded-[10px] m-[20px] flex flex-col lg: p-[20px] lg:items-center lg:justify-around lg:mb-[40px] lg:mt-[40px] ${darkMode ? 'shadow-[10px_10px_10px_white]' : 'shadow-[10px_10px_10px_black]'}`}>
                        <img className="m-[30px] max-w-full max-h-max text-center" src={banniere_bde} alt="illustrator projet bde"/>
                        <div className="flex flex-col lg:w-[50%] lg:justify-center">
                            <div className="text">
                                <h2 className="m-[0] text-center lg:text-2xl lg:font-black" >Projet BDE</h2>
                                <p className="m-[10px]" >Suite à ma rentrée dans {"l'école"} NWS en octobre, mon premier projet était de proposé une idée {"d'activité"} que les élèves de {"l'école"} pourrais effectuer, par la suite {"l'organisé"} et la presenté au BDE de {"l'école"}. Mon groupe et moi-même {"d'avions"} désidé {"d'essayer"} {"d'organisé"} un voyage à Dublin en Irlande.</p>
                            </div>
                            <p className="mb-[0px] ml-[10px]" >En voir plus :</p>
                            <Link to="https://gamma.app/docs/Voyage-a-Dublin-bdop9hv6473b9r3?mode=doc" title="Projet BDE Dublin" className="max-w-[40px] max-h-[40px] bg-white text-black rounded-[20px] p-[5px] my-[5px] text-center self-center transition-transform duration-300 ease-in-out shadow-[0px_0px_50px_black] hover:scale-105 lg:flex lg:justify-center lg:hover:scale-115">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 32 32">
                                    <path d="M 19 3 C 13.488281 3 9 7.488281 9 13 C 9 15.394531 9.839844 17.589844 11.25 19.3125 L 3.28125 27.28125 L 4.71875 28.71875 L 12.6875 20.75 C 14.410156 22.160156 16.605469 23 19 23 C 24.511719 23 29 18.511719 29 13 C 29 7.488281 24.511719 3 19 3 Z M 19 5 C 23.429688 5 27 8.570313 27 13 C 27 17.429688 23.429688 21 19 21 C 14.570313 21 11 17.429688 11 13 C 11 8.570313 14.570313 5 19 5 Z"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </section>
        </>
    );
}

export default Projets;