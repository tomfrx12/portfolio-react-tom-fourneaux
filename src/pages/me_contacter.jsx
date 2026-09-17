import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from 'react';
import { Link } from "react-router";
import { Text } from "../components/texte";
import Title from "../components/title";

export default function Contact() {
    const YOUR_SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const YOUR_TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const YOUR_PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
    
    const form = useRef();
    const [messageSent, setMessageSent] = useState(false);
    const [errorSent, setErrorSent] = useState(false);
    const [cooldown, setCooldown] = useState(0);

    // cooldown dans le localstorage
    useEffect(() => {
        const lastSent = localStorage.getItem("email_last_sent");
        if (lastSent) {
            const timePassed = Math.floor((Date.now() - parseInt(lastSent, 10)) / 1000);
            const remaining = 120 - timePassed; // 120 secondes = 2 minutes
            if (remaining > 0) {
                setCooldown(remaining);
            }
        }
    }, []);

    // décompte
    useEffect(() => {
        if (cooldown <= 0) return;

        const timer = setInterval(() => {
            setCooldown((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [cooldown]);

    const sendEmail = (e) => {
        e.preventDefault();
        if (cooldown > 0) return;

        emailjs
            .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, {
                publicKey: YOUR_PUBLIC_KEY,
            })
            .then(
                () => {
                    setMessageSent(true);
                    setErrorSent(false);
                    form.current.reset();

                    // Démarrer le cooldown de 120s et enregistrer l'heure
                    setCooldown(120);
                    localStorage.setItem("email_last_sent", Date.now().toString());
                },
                (error) => {
                    setMessageSent(false);
                    setErrorSent(true);
                    console.log('FAILED...', error.text);
                },
            );
    };

    // temps restant en MM:SS
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return (
        <>
            <Title text="contact" />
            <div>
                <div className="grid grid-cols-1 lg:grid-cols-[380px_minmax(0,1fr)]">
                    <aside className="min-h-max flex flex-col gap-[30px] bg-[#0a0a0a] px-9 py-11">
                        <div>
                            <p className="mb-1 text-base text-white/55">Email</p>
                            <Link to="mail:tfourneaux@normandiewebschool.fr" className="text-[19px] hover:underline">tfourneaux@normandiewebschool.fr</Link>
                        </div>
                        <div>
                            <p className="mb-1 text-base text-white/55">Téléphone</p>
                            <Link to="tel:+33680501452" className="text-[22px] font-bold hover:underline"> +33 6 80 50 14 52</Link>
                        </div>
                        <div>
                            <p className="mb-1 text-base text-white/55">Ville</p>
                            <p className="text-[19px]">Rouen, Normandie</p>
                        </div>

                        <div className="h-px bg-white/15"></div>

                        <div className="flex gap-[22px]">
                            {[
                                { label: "Profil Github", src: "/img/qrcode/qrcode_github.png", href:"https://github.com/tomfrx12"},
                                { label: "Profil LinkedIn", src: "/img/qrcode/qrcode_linkedin.jpg", href: "https://www.linkedin.com/in/tom-fourneaux-078644332/"}
                            ].map((qr) => (
                                <Link key={qr.label} to={qr.href} className="flex flex-col items-center gap-2">
                                    <img src={qr.src} alt={qr.label} className="h-[130px] w-[130px] bg-white p-2" />
                                    <span className="text-base underline">{qr.label}</span>
                                </Link>
                            ))}
                        </div>
                    </aside>

                    <section className="px-12 py-11">
                        <h2 className="mb-5 text-[28px] font-bold">Formulaire de contact</h2>
                        <form className="flex flex-col gap-5" ref={form} onSubmit={sendEmail}>
                            <label className="flex flex-col gap-1.5">
                                <span className="text-[17px] text-white/70">Nom</span>
                                <input name="nom" type="text" placeholder="Votre nom" className="border border-white/30 bg-[#191919] px-3.5 py-3 text-[17px] text-white outline-none placeholder:text-white/55 focus:border-white" required />
                            </label>
                            <label className="flex flex-col gap-1.5">
                                <span className="text-[17px] text-white/70">Email</span>
                                <input name="email" type="email" placeholder="votre.email@exemple.fr" className="border border-white/30 bg-[#191919] px-3.5 py-3 text-[17px] text-white outline-none placeholder:text-white/55 focus:border-white" required />
                            </label>
                            <label className="flex flex-col gap-1.5">
                                <span className="text-[17px] text-white/70">Message</span>
                                <textarea name="message" rows={8} placeholder="Votre message" className="border border-white/30 bg-[#191919] px-3.5 py-3 text-[17px] text-white outline-none placeholder:text-white/55 focus:border-white resize-none" required />
                            </label>
                            
                            <button
                                type="submit"
                                disabled={cooldown > 0}
                                className={`relative group inline-block text-center no-underline select-none self-start text-white transition-opacity ${
                                    cooldown > 0 ? "cursor-not-allowed opacity-60" : "cursor-pointer"
                                }`}
                            >
                                <span className="relative block dark:bg-(--color-primary) bg-(--color-red-background-dark) px-5 py-2.5 text-[#EBEBEB] transition-all duration-500 rounded-xl">
                                    {cooldown > 0 ? `Patienter (${formatTime(cooldown)})` : "Envoyer"}
                                </span>
                                {cooldown === 0 && (
                                    <svg
                                        className="pointer-events-none rounded-xl absolute h-[calc(100%)] w-[calc(100%)] overflow-visible scale-y-[-1] transition-transform duration-1000 ease-in-out delay-0 group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:delay-800"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            x="-8"
                                            y="50"
                                            width="100%"
                                            height="100%"
                                            rx="12"
                                            fill="none"
                                            stroke="#EBEBEB"
                                            strokeWidth="2"
                                            pathLength="100"
                                            className="[stroke-dasharray:100] [stroke-dashoffset:100] rounded-xl transition-all duration-1000 ease-in-out group-hover:[stroke-dashoffset:0]"
                                        />
                                    </svg>
                                )}
                            </button>
                        </form>
                        {messageSent && (
                            <Text tag="p" name="p" size="base" align="center" className="text-green-600 mt-4">Votre message a bien été envoyé !</Text>
                        )}
                        {errorSent && (
                            <Text tag="p" name="p" size="base" align="center" className="text-red-600 mt-4">Votre message n'a pas été envoyé !</Text>
                        )}
                    </section>
                </div>
            </div>
        </>
    );
}