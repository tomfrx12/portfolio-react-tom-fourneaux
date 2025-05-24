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



function Charte_Graphique() {
    return (
        <>
            <h1 className="text-white text-center m-[20px] py-[10px] px-[20px] bg-black text-base lg:text-3xl">Charte Graphique</h1>
            <section className="flex flex-col">
                <h2 className="mt-[50px] ml-[10px] text-base lg:text-3xl" >Logotype et ses déclinaisons :</h2>
                    <p className="text-xs my-[5px] ml-[20px] lg:text-2xl lg:my-[5px] lg:mx-[40px]">Version verticale :</p>
                    <img src={logo_vertical} className="self-center max-w-[10rem] m-[10px] bg-white p-[10px] rounded-[10px]" alt="Logo Vertical Charte Graphique"/>
                    <p className="text-xs my-[5px] ml-[20px] lg:text-2xl lg:my-[5px] lg:mx-[40px]">Versions horizontales :</p>
                    <div className="flex justify-around">
                        <img className="max-w-[145px] m-[5px] p-[2px] bg-white rounded-[5px] lg:max-w-[20rem]" src={logo_horizontal} alt="Logo Horizontal Charte Graphique"/>
                        <img className="max-w-[145px] m-[5px] p-[2px] bg-white rounded-[5px] lg:max-w-[20rem]" src={logo_horizontal_inverse} alt="Logo Horizontal inversé"/>
                    </div>
            </section>
            <section>
                <h2 className="mt-[50px] ml-[10px] text-base lg:text-3xl" >Régles pour utiliser le logo :</h2>
                <ul className="list-none m-[0px] text-xs p-[0px] ml-[20px] lg:text-2xl lg:ml-[40px]">
                    <li>- Ne pas déformer le logo</li>
                    <li>- Ne pas mettre sur un fond noir {"s'il"} y a du noir dans le logo</li>
                    <li>- Ne pas {"l'utiliser"} à de mauvaises fins</li>
                </ul>
            </section>
            <section className="section3">
                <h2 className="mt-[50px] ml-[10px] text-base lg:text-3xl" >Interdits du logo :</h2>
                <div className="interdit">
                    <h3 className="text-xs ml-[20px] lg:text-2xl lg:ml-[40px]">Versions verticales :</h3>
                    <div className="flex flex-col gap-[25px] lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:justify-items-center lg:m-[20px]">
                        <div className="flex justify-around max-w-[400px] w-[400px] bg-white mb-[0px] m-[20px] p-[20px] rounded-[20px] shadow-[5px_5px_5px_var(--color-grey)] transition:transform duration:300 hover:-translate-y-2 lg:gap-[20px]">
                            <img className="max-w-[100px] lg:max-w-[200px]" src={bg_black} alt="Fond noir, partie du logo non voyante" />
                            <p className="self-center text-xs text-black text-center m-[0] lg:text-2xl">Fond Noir</p>
                        </div>
                        <div className="flex justify-around max-w-[400px] w-[400px] bg-white mb-[0px] m-[20px] p-[20px] rounded-[20px] shadow-[5px_5px_5px_var(--color-grey)] transition:transform duration:300 hover:-translate-y-2 lg:gap-[20px]">
                            <p className="self-center text-xs text-black text-center m-[0] lg:text-2xl">Fond Rouge</p>
                            <img className="max-w-[100px] lg:max-w-[200px]" src={bg_red} alt="Fond rouge, partie du logo non voyante"/>
                        </div>
                        <div className="flex justify-around max-w-[400px] w-[400px] bg-white mb-[0px] m-[20px] p-[20px] rounded-[20px] shadow-[5px_5px_5px_var(--color-grey)] transition:transform duration:300 hover:-translate-y-2 lg:gap-[20px]">
                            <img className="max-w-[100px] lg:max-w-[200px]" src={upside_down} alt="A l'envers"/>
                            <p className="self-center text-xs text-black text-center m-[0] lg:text-2xl">A {"l'envers"}</p>
                        </div>
                        <div className="flex justify-around max-w-[400px] w-[400px] bg-white mb-[0px] m-[20px] p-[20px] rounded-[20px] shadow-[5px_5px_5px_var(--color-grey)] transition:transform duration:300 hover:-translate-y-2 lg:gap-[20px]">
                            <p className="self-center text-xs text-black text-center m-[0] lg:text-2xl">Supprimer une partie du logo</p>
                            <img className="max-w-[100px] max-h-[100px] lg:max-w-[200px] lg:max-h-[200px]" src={supp_logo} alt="Supprimer une partie du logo"/>
                        </div>
                    </div>
                    <h3 className="text-xs ml-[20px] lg:text-2xl lg:ml-[40px]">Versions horizontales :</h3>
                    <div className="flex flex-col lg:justify-center lg:flex-row">
                        <div className="flex flex-col items-center bg-white mb-[0px] m-[20px] rounded-[20px] shadow-[5px_5px_10px_white] transition:transform duration:300 hover:-translate-y-2">
                            <img className="max-w-[250px] p-[10px] lg:max-w-[20rem]" src={supp_letters} alt="Supprimer des lettres"/>
                            <p className="text-black m-[10px]">Supprimer des lettres</p>
                        </div>
                        <div className="flex flex-col items-center bg-white mb-[0px] m-[20px] rounded-[20px] shadow-[5px_5px_10px_white] transition:transform duration:300 hover:-translate-y-2">
                            <img className="max-w-[250px] p-[10px] lg:max-w-[20rem]" src={non_uniform} alt="Couleurs non uniformes"/>
                            <p className="text-black m-[10px]">Couleurs non uniformes</p>
                        </div>
                        <div className="flex flex-col items-center bg-white mb-[0px] m-[20px] rounded-[20px] shadow-[5px_5px_10px_white] transition:transform duration:300 hover:-translate-y-2">
                            <img className="max-w-[250px] p-[10px] lg:max-w-[20rem]" src={merge} alt="Fusionner lettres et logo"/>
                            <p className="text-black m-[10px]">Fusionner les lettres et le logo</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h2 className="mt-[50px] ml-[10px] text-base lg:text-3xl" >Palette de couleurs :</h2>
                <div className="flex justify-around">
                    <div className="justify-items-center text-center w-[5rem] h-[5rem] bg-[#e21823] lg:flex lg:justify-center lg:w-[10rem] lg:h-[10rem]">
                        <span className="self-center">#e21823</span>
                    </div>
                    <div className="text-white justify-items-center text-center w-[5rem] h-[5rem] bg-black lg:flex lg:justify-center lg:w-[10rem] lg:h-[10rem]">
                        <span className="self-center">#000000</span>
                    </div>
                    <div className="justify-items-center text-center w-[5rem] h-[5rem] bg-white text-black lg:flex lg:justify-center lg:w-[10rem] lg:h-[10rem]">
                        <span className="self-center">#ffffff</span>
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