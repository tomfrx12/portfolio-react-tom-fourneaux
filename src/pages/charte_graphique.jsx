import "/src/css/style-charte-graphique.css";

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
            <main>
                <h1>Charte Graphique</h1>
                <section className="logotypes">
                    <h2>Logotype et ses déclinaisons :</h2>
                        <p>Version verticale :</p>
                        <img src={logo_vertical} className="logo-vertical" alt="Logo Vertical Charte Graphique"/>
                        <p>Versions horizontales :</p>
                        <div className="horizontal">
                            <img src={logo_horizontal} alt="Logo Horizontal Charte Graphique"/>
                            <img src={logo_horizontal_inverse} alt="Logo Horizontal inversé"/>
                        </div>
                </section>
                <section className="rules">
                    <h2>Régles pour utiliser le logo :</h2>
                    <ul>
                        <li>Ne pas déformer le logo</li>
                        <li>Ne pas mettre sur un fond noir {"s'il"} y a du noir dans le logo</li>
                        <li>Ne pas {"l'utiliser"} à de mauvaises fins</li>
                    </ul>
                </section>
                <section className="section3">
                    <h2>Interdits du logo :</h2>
                    <div className="interdit">
                        <h3>Versions verticales :</h3>
                        <div className="verticale">
                            <div className="bg-black">
                                <img src={bg_black} alt="Fond noir, partie du logo non voyante" />
                                <p>Fond Noir</p>
                            </div>
                            <div className="bg-red">
                                <p>Fond Rouge</p>
                                <img src={bg_red} alt="Fond rouge, partie du logo non voyante"/>
                            </div>
                            <div className="upside-down">
                                <img src={upside_down} alt="A l'envers"/>
                                <p>A {"l'envers"}</p>
                            </div>
                            <div className="supp-logo">
                                <p>Supprimer une partie du logo</p>
                                <img src={supp_logo} alt="Supprimer une partie du logo"/>
                            </div>
                        </div>
                        <h3>Versions horizontales :</h3>
                        <div className="horizontale">
                            <div className="supp-letters">
                                <img src={supp_letters} alt="Supprimer des lettres"/>
                                <p>Supprimer des lettres</p>
                            </div>
                            <div className="non-uniform">
                                <img src={non_uniform} alt="Couleurs non uniformes"/>
                                <p>Couleurs non uniformes</p>
                            </div>
                            <div className="merge">
                                <img src={merge} alt="Fusionner lettres et logo"/>
                                <p>Fusionner les lettres et le logo</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <h2>Palette de couleurs :</h2>
                    <div className="colors">
                        <div className="color">
                            <span>#e21823</span>
                        </div>
                        <div className="color">
                            <span>#000000</span>
                        </div>
                        <div className="color">
                            <span>#ffffff</span>
                        </div>
                    </div>
                </section>
                <div className="buttons">
                    <a href="../assets/img/charte_graphique/Charte-Graphique-Tom-Fourneaux.pdf" download className="a_button">Télécharger ma <br/>charte graphique</a>
                    <a href="../img/charte_graphique/Maquette Figma Portfolio.zip" download className="a_button">Télécharger ma <br/>maquette</a>
                </div>
            </main>
        </>
    );
}

export default Charte_Graphique;