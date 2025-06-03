import PropTypes from "prop-types";

import { DarkMode } from "./darkmode";

import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
    const [itsDark, setItsDark] = DarkMode();
    return (
        <div className="flex flex-col min-h-screen bg-[var(--color-bg-grey)] dark:bg-[var(--color-bg-grey-dark)]">
            <Header itsDark={itsDark} setItsDark={setItsDark} />

            <main className="flex-1 items-center lg:mb-[2rem] lg:flex lg:items-stretch lg:flex-col text-[var(--color-black)] dark:text-[var(--color-white)]">
                {children && typeof children === 'function'
                  ? children({ itsDark, setItsDark })
                  : children}
            </main>

            <Footer />
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
