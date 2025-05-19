import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
    return (
        <div
            className="flex flex-col min-h-screen bg-[#111111]"
            style={{
                backgroundImage: "url('/src/assets/img/background-pattern.png')",
                backgroundSize: "100% 100%",
            }}
        >o
            <Header />

            <main className="flex-1 text-white lg:my-[2rem] lg:mx-[5rem]">{children}</main>

            <Footer />
        </div>
    );
};

export default Layout;