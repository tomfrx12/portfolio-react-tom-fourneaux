import PropTypes from "prop-types";

import { DarkMode } from "./darkmode";

import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
    const [itsDark, setItsDark] = DarkMode();
    return (
        <div className="flex flex-col min-h-screen bg-(--color-bg-grey) dark:bg-(--color-bg-grey-dark)">
            <Header itsDark={itsDark} setItsDark={setItsDark} />

            <main className="flex-1 items-center lg:mb-8 lg:flex lg:items-stretch lg:flex-col text-(--color-black) dark:text-(--color-white)">
                {(() => { //fonction auto-exécutée (IIFE)
                    if (typeof children === 'function') { //si le type de children est une fonction (Initialement dans le App le rendre prop définie comme une fonction)
                        return children({ itsDark, setItsDark }); //on l'appelle en lui passant les paramètres du dark mode
                    } 
                    else {
                        return children;
                    }
                })()}
            </main>

            <Footer />
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
