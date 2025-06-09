import logo_vertical from "../assets/img/charte-graphique/logo-versions/logo-vertical.png"
import logo_horizontal from "../assets/img/charte-graphique/logo-versions/logo-horizontal.png"
import logo_horizontal_inverse from "../assets/img/charte-graphique/logo-versions/logo-horizontal-inverse.png"
import bg_black from "../assets/img/charte-graphique/interdits/bg-black.jpg"
import bg_red from "../assets/img/charte-graphique/interdits/bg-red.jpg"
import upside_down from "../assets/img/charte-graphique/interdits/upside-down.jpg"
import supp_logo from "../assets/img/charte-graphique/interdits/supp-logo.jpg"
import supp_letters from "../assets/img/charte-graphique/interdits/supp-letters.jpg"
import non_uniform from "../assets/img/charte-graphique/interdits/non-uniform.jpg"
import merge from "../assets/img/charte-graphique/interdits/merge.jpg"

import { Text } from "../components/texte";

function Charte_Graphique() {
    return (
        <>
            <Text tag="h1" name="h1" color="white" background="black" className="m-[20px] py-[10px] px-[20px]">Charte Graphique</Text>
            <section className="flex flex-col">
                <Text tag="h2" name="h2" align="left" className="ml-2 mt-20">Logotypes et ses déclinaisons :</Text>
                <Text tag="p" size="base" className="my-[5px] ml-[20px] lg:my-[5px] lg:mx-[40px]">Version verticale :</Text>
                <img src={logo_vertical} className="self-center max-w-[10rem] m-[10px] bg-white p-[10px] rounded-[10px]" alt="Logo Vertical Charte Graphique"/>
                <Text tag="p" size="base" className="my-[5px] ml-[20px] lg:my-[5px] lg:mx-[40px]">Versions horizontales :</Text>
                <div className="flex items-center justify-around flex-col lg:flex-row">
                    <img className="max-w-[145px] m-[5px] p-[2px] bg-white rounded-[5px] lg:max-w-[20rem]" src={logo_horizontal} alt="Logo Horizontal Charte Graphique"/>
                    <img className="max-w-[145px] m-[5px] p-[2px] bg-white rounded-[5px] lg:max-w-[20rem]" src={logo_horizontal_inverse} alt="Logo Horizontal inversé"/>
                </div>
            </section>
            <section>
                <Text tag="h2" name="h2" align="left" className="ml-2 mt-20">Régles pour utiliser le logo :</Text>
                <ul className="list-none m-[0px] text-xs p-[0px] ml-[20px] lg:text-2xl lg:ml-[40px]">
                    <li>- Ne pas déformer le logo</li>
                    <li>- Ne pas mettre sur un fond noir {"s'il"} y a du noir dans le logo</li>
                    <li>- Ne pas {"l'utiliser"} à de mauvaises fins</li>
                </ul>
            </section>
            <section>
                <Text tag="h2" name="h2" align="left" className="ml-2 mt-20">Interdits du logo :</Text>
                <div className="interdit">
                    <Text tag="h3" name="h3" align="left" className="ml-4 lg:ml-16 mt-2">Versions verticales :</Text>
                    <div className="flex flex-col gap-[10px] lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:justify-items-center lg:m-[20px]">
                        <div className="flex justify-around bg-white mb-[0px] mt-[10px] m-[20px] p-[20px] rounded-[20px] transition:transform duration:300 hover:-translate-y-2 lg:gap-[20px] lg:max-w-[400px] lg:w-[400px] shadow-[10px_10px_5px_black]">
                            <img className="max-w-[100px] lg:max-w-[200px]" src={bg_black} alt="Fond noir, partie du logo non voyante" />
                            <p className="self-center text-xs text-black text-center m-[0] lg:text-2xl">Fond Noir</p>
                        </div>
                        <div className="flex justify-around bg-white mb-[0px] m-[20px] p-[20px] rounded-[20px] transition:transform duration:300 hover:-translate-y-2 lg:gap-[20px] lg:max-w-[400px] lg:w-[400px] shadow-[10px_10px_5px_black]">
                            <p className="self-center text-xs text-black text-center m-[0] lg:text-2xl">Fond Rouge</p>
                            <img className="max-w-[100px] lg:max-w-[200px]" src={bg_red} alt="Fond rouge, partie du logo non voyante"/>
                        </div>
                        <div className="flex justify-around bg-white mb-[0px] m-[20px] p-[20px] rounded-[20px] transition:transform duration:300 hover:-translate-y-2 lg:gap-[20px] lg:max-w-[400px] lg:w-[400px] shadow-[10px_10px_5px_black]">    
                            <img className="max-w-[100px] lg:max-w-[200px]" src={upside_down} alt="A l'envers"/>
                            <p className="self-center text-xs text-black text-center m-[0] lg:text-2xl">A {"l'envers"}</p>
                        </div>
                        <div className="flex justify-around bg-white mb-[0px] m-[20px] p-[20px] rounded-[20px] transition:transform duration:300 hover:-translate-y-2 lg:gap-[20px] lg:max-w-[400px] lg:w-[400px] shadow-[10px_10px_5px_black]">
                            <p className="self-center text-xs text-black text-center m-[0] lg:text-2xl">Supprimer une partie du logo</p>
                            <img className="max-w-[100px] max-h-[100px] lg:max-w-[200px] lg:max-h-[200px]" src={supp_logo} alt="Supprimer une partie du logo"/>
                        </div>
                    </div>
                    <Text tag="h3" name="h3" align="left" className="ml-4 lg:ml-16 mt-2">Versions horizontales :</Text>
                    <div className="flex flex-col gap-[10px] lg:justify-center lg:flex-row">
                        <div className="flex flex-col items-center bg-white mt-[5px] mb-[0px] m-[20px] rounded-[20px] transition:transform duration:300 hover:-translate-y-2 shadow-[10px_10px_5px_black]">
                            <img className="p-[10px] lg:max-w-[20rem]" src={supp_letters} alt="Supprimer des lettres"/>
                            <p className="text-black m-[10px]">Supprimer des lettres</p>
                        </div>
                        <div className="flex flex-col items-center bg-white mb-[0px] m-[20px] rounded-[20px] transition:transform duration:300 hover:-translate-y-2 shadow-[10px_10px_5px_black]">
                            <img className="p-[10px] lg:max-w-[20rem]" src={non_uniform} alt="Couleurs non uniformes"/>
                            <p className="text-black m-[10px]">Couleurs non uniformes</p>
                        </div>
                        <div className="flex flex-col items-center bg-white mb-[0px] m-[20px] rounded-[20px] transition:transform duration:300 hover:-translate-y-2 shadow-[10px_10px_5px_black]">    
                            <img className="p-[10px] lg:max-w-[20rem]" src={merge} alt="Fusionner lettres et logo"/>
                            <p className="text-black m-[10px]">Fusionner les lettres et le logo</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <Text tag="h2" name="h2" align="left" className="ml-2 mt-20">Palette de couleurs :</Text>
                <div className="flex justify-around items-center flex-col gap-[10px] lg:flex-row">
                    <div className="justify-items-center text-center w-[5rem] h-[5rem] bg-[#e21823] lg:flex lg:justify-center lg:w-[10rem] lg:h-[10rem]">
                        <Text tag="span" size="base" className="self-center">#e21823</Text>
                    </div>
                    <div className="text-white justify-items-center text-center w-[5rem] h-[5rem] bg-black lg:flex lg:justify-center lg:w-[10rem] lg:h-[10rem]">
                        <Text tag="span" size="base" className="self-center">#000000</Text>
                    </div>
                    <div className="justify-items-center text-center w-[5rem] h-[5rem] bg-white text-black lg:flex lg:justify-center lg:w-[10rem] lg:h-[10rem]">
                        <Text tag="span" size="base" className="self-center">#ffffff</Text>
                    </div>
                </div>
            </section>
            <div className="flex flex-col gap-[20px] m-[40px_50px_0px_50px] py-[10px] px-[20px] lg:flex-row lg:justify-center">
                <a href="../assets/img/charte_graphique/Charte-Graphique-Tom-Fourneaux.pdf" download className="flex justify-center self-center bg-white text-black rounded-[20px] m-[10px] px-[10px] transition:transform duration:300 ease-in-out hover:scale-105 lg:py-[10px] lg:px-[15x]">Télécharger ma charte graphique</a>
                <a href="../img/charte_graphique/Maquette Figma Portfolio.zip" download className="flex justify-center self-center bg-white text-black rounded-[20px] m-[10px] px-[10px] transition:transform duration:300 ease-in-out hover:scale-105 lg:py-[10px] lg:px-[15x]">Télécharger ma maquette</a>
            </div>
        </>
    );
}

export default Charte_Graphique;