import { useState } from "react";
import { motion } from "framer-motion";

import ButtonNav from "../components/a_button";
import { Text } from "../components/texte";
import Lamp from "../components/lamp_light";
import SeeMore from "../components/see_more";
import { fadeUp, fadeDown, fadeRight, fadeLeft, opacityOn  } from "../components/anime_motion";
import projets from '../data/projets.json';

function Index({ itsDark, setItsDark }) { //le bool et la func qui est définie dans l'App, afin que la Lamp puisse modifier le dark mode

    const [ButtonClicker, setButtonClicker] = useState(false);
    const [NbClick, setNbClick] = useState(0);
    const [LinkClicker, setLinkClicker] = useState(false);
    
    function Clicker() {
        if ( ButtonClicker === false ) {
            setButtonClicker(!ButtonClicker);
        };
        setNbClick(NbClick + 1)
        if ( LinkClicker === false && NbClick == 29 ) {
            setLinkClicker(!LinkClicker);
        };
    };

    return (
        <div>
            <section className="flex flex-col h-[94vh] lg:flex-row">
                <div className="flex items-center justify-center flex-col lg:w-[40%] bg-(--color-white-background) dark:bg-(--color-white-background-dark)">
                    <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.5 }}>
                        <motion.button 
                            onClick={Clicker}
                            className="cursor-pointer"
                            whileTap={{ y: 7 }}
                        >
                            <img src="/img/A2_Fourneaux_Tom.png" alt="photo de profil Tom FOURNEAUX" className="my-5 m-auto rounded-full"/>
                        </motion.button>
                    </motion.div>
                    {ButtonClicker && (
                        <motion.div variants={fadeDown}  initial="hidden" whileInView="visible" transition={{ duration: 2 }}>
                            <Text tag="p" size="base">
                                Nombre de click :{" "}
                                <motion.span
                                    key={NbClick}
                                    initial={{ y: 8, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.2 }}
                                    className="inline-block"
                                >
                                    {NbClick}
                                </motion.span>
                            </Text>
                        </motion.div>
                    )}
                    {LinkClicker && (
                        <motion.div className="flex" variants={fadeDown}  initial="hidden" whileInView="visible">
                            <ButtonNav link="clicker">Clicker</ButtonNav>
                        </motion.div>
                    )}
                </div>
                <div className="lg:block lg:w-[60%] lg:min-h-full hidden bg-(--color-red-background) dark:bg-(--color-red-background-dark)">
                    <Lamp itsDark={itsDark} setItsDark={setItsDark} />
                    {/* donne les infos du dark mode à la Lamp */}
                    <div className="relative z-10 flex flex-col items-center pt-40">
                        <motion.div variants={opacityOn} initial="hidden" animate="visible" transition={{ delay: 0.5, duration: 0.5 }}>
                            <Text tag='h1' name='h1' color="white" font="bold">Tom Fourneaux</Text>
                        </motion.div>
                        <motion.div variants={opacityOn} initial="hidden" animate="visible" transition={{ delay: 1.0, duration: 0.5 }}>
                            <Text tag='p' align='center' size="base">Etudiant et passionné de codage, voici mon portfolio</Text>
                        </motion.div>
                        <motion.div className="flex" variants={opacityOn} initial="hidden" animate="visible" transition={{ delay: 1.5, duration: 0.5 }}>
                            <ButtonNav link="me_contacter">Contactez moi</ButtonNav>
                        </motion.div>
                    </div>
                </div>
            </section>

            <motion.div
                className="relative h-[350px] flex items-center justify-center overflow-hidden"
                variants={fadeUp}
                initial="hidden" whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="absolute inset-0 bg-[url(/img/illustration-index.png)] bg-fixed bg-cover bg-center blur-xs z-0"></div>
                <motion.div
                    className="absolute inset-0 z-1"
                    animate={{
                        background: [
                            `${itsDark ? "linear-gradient(400deg, rgba(175,30,21,0.72) -100%, rgba(44,17,82,0.72) 100%)" : "linear-gradient(200deg, rgba(175,30,21,0.72) 0%, rgba(44,17,82,0.72) 100%)"}`
                        ]
                    }}
                ></motion.div>
                <motion.div className="relative z-10 text-center" initial={{ opacity: 0, letterSpacing: "0.5em" }} whileInView={{ opacity: 1, letterSpacing: "0.2em" }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }}>
                    <Text tag="h2" name="h2" className="text-white font-black text-3xl lg:text-5xl uppercase">a propos de moi</Text>
                </motion.div>
            </motion.div>

            <section className="flex flex-col justify-center items-center h-[94vh] mx-5 lg:mx-20 py-10">
                <div className="lg:flex lg:flex-row lg:gap-12 lg:items-center w-full">    
                    <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <Text tag="p" size="base" className="border-l-5 border-l-[#ff6347] m-[0px 0px 20px 20px] px-[15px] mt-10">Je suis un jeune développeur web de 19 ans, actuellement étudiant à la Normandie Web School (NWS) de Rouen, où je suis inscrit en Bachelor Chef de Projets Digitaux. Passionné par le monde du développement web et le code depuis mon plus jeune âge, j’ai naturellement orienté mes études et ma carrière vers ce domaine en constante évolution.</Text>
                    </motion.div>
                    <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <img src="/img/illustration_presentation/illustration_dev.png" alt="illustration developpeur web" className="m-auto max-w-[90%] p-[15px] lg:self-center lg:w-auto"/>
                    </motion.div>
                </div>
                <motion.div className="flex gap-5" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <ButtonNav link="cv">Mon CV</ButtonNav>
                    <ButtonNav link="competences">Compétences</ButtonNav>
                </motion.div>
            </section>

            <motion.div
                className="relative h-[350px] flex items-center justify-center overflow-hidden"
                variants={fadeUp}
                initial="hidden" whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="absolute inset-0 bg-[url(/img/illustration-index.png)] bg-fixed bg-cover bg-center blur-xs z-0"></div>
                <motion.div
                    className="absolute inset-0 z-1"
                    animate={{
                        background: [
                            `${itsDark ? "linear-gradient(400deg, rgba(175,30,21,0.72) -100%, rgba(44,17,82,0.72) 100%)" : "linear-gradient(200deg, rgba(175,30,21,0.72) 0%, rgba(44,17,82,0.72) 100%)"}`
                        ]
                    }}
                ></motion.div>
                <motion.div className="relative z-10 text-center" initial={{ opacity: 0, letterSpacing: "0.5em" }} whileInView={{ opacity: 1, letterSpacing: "0.2em" }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }}>
                    <Text tag="h2" name="h2" className="text-white font-black text-3xl lg:text-5xl uppercase">Projets</Text>
                </motion.div>
            </motion.div>

            <section className="flex flex-col justify-center items-center h-[94vh]">
                <div className="my-10 flex flex-col gap-8 w-full max-w-240 px-5">
                    {[...projets].reverse().slice(0, 2).map((projet) => (
                        <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" transition={{ duration: 1.0, ease: "easeOut" }} viewport={{ once: true }}>
                            <motion.div 
                                className="flex items-center gap-5 p-5 bg-white dark:bg-(--color-bg-grey-dark) border-[3px] border-black dark:border-white rounded-sm cursor-pointer select-none"
                                initial={{ rotate: -1, boxShadow: "5px 5px 0px var(--color-primary)" }}
                                whileHover={{ rotate: 0, x: -5, y: -5, boxShadow: "10px 10px 0px var(--color-primary)" }}
                                whileTap={{ x: 3, y: 3, boxShadow: "3px 3px 0px var(--color-primary)" }}
                            >
                                <img src={projet.image.url} alt={projet.image.alt} className="max-h-60" />
                                <div>
                                    <Text tag="h3" name="h3" size="lg">{projet.title}</Text>
                                    <Text tag="p" size="base">{projet.description}</Text>
                                    <SeeMore link="projets"/>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
                <motion.div className="flex" variants={fadeDown} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <ButtonNav link="projets">Mes projets</ButtonNav>
                </motion.div>
            </section>
        </div>
    );
}

export default Index;
