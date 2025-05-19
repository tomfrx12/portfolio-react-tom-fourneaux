// import "/src/css/style-me_contacter.css";

import { Link } from "react-router";
import qrcode_github from "../assets/img/qrcode/qrcode_github.png"
import qrcode_linkedin from "../assets/img/qrcode/qrcode_linkedin.jpg"

function Contact() {
    return (
        <>
                <h1>Me contacter</h1>
                <div className="text">
                    <p className="contact">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V8l8 5l8-5zm-8-7L4 6h16z"/>
                        </svg>
                        <Link to="mailto:tfourneaux@normandiewebschool.fr">tfourneaux@normandiewebschool.fr</Link>
                    </p>
                    <p className="contact">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"/>
                        </svg>
                        <Link to="tel:0680501452">+33 6 80 50 14 52</Link>
                    </p>
                </div>
                <div className="qrcodes">
                    <div className="qrcode">
                        <p>Profil <a href="https://github.com/tomfrx12">Github</a></p>
                        <img src={qrcode_github} alt="QR Code Github"/>
                    </div>
                    <div className="qrcode">
                        <p>Profil <Link to="https://www.linkedin.com/in/tom-fourneaux-078644332/">LinkedIn</Link></p>
                        <img src={qrcode_linkedin} alt="QR Code LinkedIn"/>
                    </div>
                </div>
        </>
    );
}

export default Contact;