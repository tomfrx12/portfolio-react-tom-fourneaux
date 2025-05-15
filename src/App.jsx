import { BrowserRouter as Router, Routes, Route } from "react-router";

import Header from "./components/header";
import Footer from "./components/footer";

import Index from "./pages/index";
import Competences from "./pages/competences";
import Projets from "./pages/projets";
import Charte_Graphique from "./pages/charte_graphique";
import CV from "./pages/cv";
import Contact from "./pages/me_contacter";
import Mentions_Legales from "./pages/mentions_legales";

function App() {
    return (
        <div
            className="flex flex-col min-h-screen bg-[#111111]"
            style={{
                backgroundImage: "url('/src/assets/img/background-pattern.png')",
                backgroundSize: "100% 100%",
            }}
        >
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/competences" element={<Competences />} />
                    <Route path="/projets" element={<Projets />} />
                    <Route path="/charte_graphique" element={<Charte_Graphique />} />
                    <Route path="/cv" element={<CV />} />
                    <Route path="/me_contacter" element={<Contact />} />
                    <Route path="/mentions_legales" element={<Mentions_Legales />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}


export default App;