import PropTypes from "prop-types";

import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-[var(--color-bg-grey)] dark:bg-[var(--color-bg-grey-dark)]">
            <Header />

            <main className="flex-1 items-center lg:mb-[2rem] lg:flex lg:items-stretch lg:flex-col text-[var(--color-black)] dark:text-[var(--color-white)]">{children}</main>

            <Footer />
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
