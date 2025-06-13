import { BrowserRouter as Router, Routes, Route } from "react-router";

import Layout from "./components/layout";

import Index from "./pages/index";
import Competences from "./pages/competences";
import Projets from "./pages/projets";
import Charte_Graphique from "./pages/charte_graphique";
import CV from "./pages/cv";
import Contact from "./pages/me_contacter";
import Mentions_Legales from "./pages/mentions_legales";
import Error from "./pages/error";


function App() {
    return (
        <Router>
            <Layout>
                {({ itsDark, setItsDark }) => ( //fonction qui reçoit l'état du dark mode (bool) et la fonction pour la changer (func). Afin que toutes les pages puissent avoir accès au dark mode ( c'est le "render prop")
                    <Routes>
                        <Route path="/" element={<Index itsDark={itsDark} setItsDark={setItsDark} />} />
                        <Route path="/competences" element={<Competences />} />
                        <Route path="/projets" element={<Projets />} />
                        <Route path="/charte_graphique" element={<Charte_Graphique />} />
                        <Route path="/cv" element={<CV />} />
                        <Route path="/me_contacter" element={<Contact />} />
                        <Route path="/mentions_legales" element={<Mentions_Legales />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                )}
            </Layout>
        </Router>
    );
}


export default App;