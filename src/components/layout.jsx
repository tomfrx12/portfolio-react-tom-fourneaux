import { useContext } from "react";
import PropTypes from "prop-types";

import Footer from "./footer";
import Header from "./header";
import { DarkModeContext } from "./DarkModeProvider";

const Layout = ({ children }) => {
    const {darkMode} = useContext(DarkModeContext);
    return (
        <div className={`flex flex-col min-h-screen text-white ${darkMode ? 'bg-[#111111]' : 'bg-[#bbbbbb]'}`}>
            <Header />

            <main className={`flex-1 text-black items-center lg:my-[2rem] lg:mx-[5rem] lg:flex lg:items-stretch lg:flex-col ${darkMode ? 'text-white' : 'text-black'}`}>{children}</main>

            <Footer />
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
