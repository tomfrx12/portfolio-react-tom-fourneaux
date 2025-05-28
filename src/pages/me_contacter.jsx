import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { Link } from "react-router";

import qrcode_github from "../assets/img/qrcode/qrcode_github.png";
import qrcode_linkedin from "../assets/img/qrcode/qrcode_linkedin.jpg";

const Contact = () => {
    const YOUR_SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const YOUR_TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const YOUR_PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
    
    const form = useRef();
    const [messageSent, setMessageSent] = useState(false);
    const [errorSent, setErrorSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

    emailjs
        .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, {
            publicKey: YOUR_PUBLIC_KEY,
        })
        .then(
            () => {
                setMessageSent(true);
                setErrorSent(false);
                console.log('SUCCESS!');
            },
            (error) => {
                setMessageSent(false);
                setErrorSent(true);
                console.log('FAILED...', error.text);
            },
        );
    };

    return (
        <>
            <h1 className="text-white text-center m-[20px] py-[10px] px-[20px] bg-black text-base lg:text-3xl">Me contacter</h1>
            <div className="my-[50px]">
                <p className="flex justify-center text-center text-sm transition:transform duration:300 ease-in-out lg:text-3xl">
                    <svg className="lg:m-[10px]" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V8l8 5l8-5zm-8-7L4 6h16z"/>
                    </svg>
                    <Link className="self-center hover:scale-105" to="mailto:tfourneaux@normandiewebschool.fr">tfourneaux@normandiewebschool.fr</Link>
                </p>
                <p className="flex justify-center text-center text-sm transition:transform duration:300 ease-in-out lg:text-3xl">
                    <svg className="lg:m-[10px]" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"/>
                    </svg>
                    <Link className="self-center hover:scale-105" to="tel:0680501452">+33 6 80 50 14 52</Link>
                </p>
            </div>
            <div className="mx-10 flex flex-col gap-20 lg:flex-row lg:justify-around">
                <div className="flex flex-wrap justify-between lg:flex-col lg:gap-10">
                    <div className="qrcode">
                        <p className='text-center'>Profil <Link className="underline" to="https://github.com/tomfrx12">Github</Link></p>
                        <Link to="https://github.com/tomfrx12">
                            <img className="max-w-[100px] max-h-[100px] lg:max-w-[150px] lg:max-h-[150px]" src={qrcode_github} alt="QR Code Github"/>
                        </Link>
                    </div>
                    <div className="qrcode">
                        <p className='text-center'>Profil <Link className="underline" to="https://www.linkedin.com/in/tom-fourneaux-078644332/">LinkedIn</Link></p>
                        <Link to="https://www.linkedin.com/in/tom-fourneaux-078644332/">
                            <img className="max-w-[100px] max-h-[100px] lg:max-w-[150px] lg:max-h-[150px]" src={qrcode_linkedin} alt="QR Code LinkedIn"/>
                        </Link>
                    </div>
                </div>
                <div className='flex items-center'>
                    <form className='bg-[var(--color-bg-grey)] rounded-[10px] flex flex-col p-5 lg:py-20' ref={form} onSubmit={sendEmail}>
                        <label className='self-center'>Nom</label>
                        <input className='bg-[var(--color-white)] text-[var(--color-black)] p-2 lg:w-80' type="text" name="user_name" placeholder='Nom' required/>
                        <label className='self-center'>Email</label>
                        <input className='bg-[var(--color-white)] text-[var(--color-black)] p-2 lg:w-80' type="email" name="user_email" placeholder='Email' required/>
                        <label className='self-center'>Message</label>
                        <textarea className='bg-[var(--color-white)] text-[var(--color-black)] p-2 lg:w-80' name="message" placeholder='Message' required/>
                        <input className='bg-[var(--color-white)] text-[var(--color-black)] rounded-[10px] mt-5' type="submit" value="Envoyer"/>
                    </form>
                    {messageSent && ( //évaluation conditionnelle logique
                        <p className="text-green-600 text-center mt-4">Votre message a bien été envoyé !</p>
                    )}
                    {errorSent && ( //évaluation conditionnelle logique
                        <p className="text-red-600 text-center mt-4">Votre message {"n'a"} pas été envoyé !</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default Contact;