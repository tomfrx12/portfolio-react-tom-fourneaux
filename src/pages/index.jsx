// import { useState } from "react";
import { motion } from "framer-motion";

import ButtonNav from "../components/ButtonNav";
import { Text } from "../components/texte";
import Lamp from "../components/lamp_light";
import SeeMore from "../components/see_more";
import { fadeUp, fadeDown, fadeRight, fadeLeft, opacityOn  } from "../components/anime_motion";
import projets from '../data/projets.json';
import Title from "../components/title";
import { Link } from "react-router";

function Index({ itsDark, setItsDark }) { //le bool et la func qui est définie dans l'App, afin que la Lamp puisse modifier le dark mode

    // const [ButtonClicker, setButtonClicker] = useState(false);
    // const [NbClick, setNbClick] = useState(0);
    // const [LinkClicker, setLinkClicker] = useState(false);

    const glowColor = itsDark ? "var(--color-red-background)" : "var(--color-red-background-dark)";
    
    // function Clicker() {
    //     if ( ButtonClicker === false ) {
    //         setButtonClicker(!ButtonClicker);
    //     };
    //     setNbClick(NbClick + 1)
    //     if ( LinkClicker === false && NbClick == 29 ) {
    //         setLinkClicker(!LinkClicker);
    //     };
    // };

    return (
        <div>
            <section className="flex min-h-[calc(100svh-4rem)] flex-col lg:h-screen lg:flex-row">
                <div className="flex flex-1 flex-col items-center justify-center bg-(--color-white-background) dark:bg-(--color-white-background-dark) lg:w-[40%] lg:flex-none">
                    {/* <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.5 }}>
                        <motion.button 
                            onClick={Clicker}
                            className="cursor-pointer"
                            whileTap={{ y: 7 }}
                        >
                            <motion.div
                                className="rounded-full"
                                animate={{
                                    boxShadow: [
                                        `0 0 0px 0px  ${glowColor}`,
                                        `0 0 28px 10px ${glowColor}`,
                                        `0 0 0px 0px  ${glowColor}`
                                    ]
                                }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                            >
                                <img src="/img/A2_Fourneaux_Tom.png" alt="photo de profil Tom FOURNEAUX" className="my-5 w-48 max-w-[75vw] rounded-full sm:w-56 lg:w-auto"/>
                            </motion.div>
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
                    )} */}
                    <motion.button 
                        className="cursor-pointer"
                        whileTap={{ y: 7 }}
                    >
                        <motion.div
                            className="rounded-full"
                            animate={{
                                boxShadow: [
                                    `0 0 0px 0px  ${glowColor}`,
                                    `0 0 28px 10px ${glowColor}`,
                                    `0 0 0px 0px  ${glowColor}`
                                ]
                            }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                        >
                            <img src="/img/A2_Fourneaux_Tom.png" alt="photo de profil Tom FOURNEAUX" className="my-5 w-48 max-w-[75vw] rounded-full sm:w-56 lg:w-auto"/>
                        </motion.div>
                    </motion.button>
                </div>
                <div className="flex min-h-[50vh] flex-1 flex-col items-center bg-(--color-red-background) dark:bg-(--color-red-background-dark) lg:block lg:w-[60%]">
                    <div className="hidden lg:block">
                        <Lamp itsDark={itsDark} setItsDark={setItsDark} />
                    </div>
                    {/* donne les infos du dark mode à la Lamp */}
                    <div className="relative z-10 flex flex-col items-center px-5 py-16 text-center lg:pt-40">
                        <motion.div variants={opacityOn} initial="hidden" animate="visible" transition={{ delay: 0.5, duration: 0.5 }}>
                            <Text tag='h1' name='h1' color="white" font="bold">Tom Fourneaux</Text>
                        </motion.div>
                        <motion.div variants={opacityOn} initial="hidden" animate="visible" transition={{ delay: 1.0, duration: 0.5 }}>
                            <Text tag='p' name='p' color='white' align='center' size="base">Etudiant et passionné de codage, voici mon portfolio</Text>
                        </motion.div>
                        <motion.div className="flex" variants={opacityOn} initial="hidden" animate="visible" transition={{ delay: 1.5, duration: 0.5 }}>
                            <ButtonNav link="me_contacter">Contactez moi</ButtonNav>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Title text="a propos de moi" />            

            <section className="flex flex-col items-center justify-center px-5 py-16 lg:mx-20 lg:h-[94vh] lg:px-0 lg:py-10">
                <div className="w-full lg:flex lg:flex-row lg:items-center lg:gap-12">
                    <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <Text tag="p" size="base" className="border-l-5 border-l-[#ff6347] m-[0px 0px 20px 20px] px-[15px] mt-10">Je suis un jeune développeur web de 20 ans, actuellement étudiant à la Normandie Web School (NWS) de Rouen, où je suis inscrit en Bachelor Chef de Projets Digitaux. Passionné par le monde du développement web et le code depuis mon plus jeune âge, j’ai naturellement orienté mes études et ma carrière vers ce domaine en constante évolution.</Text>
                    </motion.div>
                    <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <img src="/img/illustration_presentation/illustration_dev.png" alt="illustration developpeur web" className="m-auto max-w-full p-[15px] lg:w-auto lg:self-center"/>
                    </motion.div>
                </div>
                <motion.div className="flex gap-5" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <ButtonNav link="competences">Compétences</ButtonNav>
                </motion.div>
            </section>

            <Title text="projet" />

            <section className="flex flex-col justify-center items-center">
                <div className="my-10 flex flex-col gap-8 w-full max-w-240 px-5">
                    {[...projets].reverse().slice(0, 2).map((projet) => {
                        const anchor = projet.anchor;

                        return (
                        <motion.div key={projet.id} variants={fadeLeft} initial="hidden" whileInView="visible" transition={{ duration: 1.0, ease: "easeOut" }} viewport={{ once: true }}>
                            <Link to={`/projets#${anchor}`}>
                                <motion.div 
                                    className="flex flex-col items-start gap-4 rounded-sm border-[3px] border-black bg-white p-4 dark:border-white dark:bg-(--color-bg-grey-dark) sm:flex-row sm:items-center sm:gap-5 sm:p-5"
                                    initial={{ rotate: -1, boxShadow: "5px 5px 0px var(--color-primary)" }}
                                    whileHover={{ rotate: 0, x: -5, y: -5, boxShadow: "10px 10px 0px var(--color-primary)" }}
                                    whileTap={{ x: 3, y: 3, boxShadow: "3px 3px 0px var(--color-primary)" }}
                                >
                                    <img src={projet.image.url} alt={projet.image.alt} className="max-h-60 w-full object-contain sm:w-auto" />
                                    <div>
                                        <Text tag="h3" name="h3" size="lg">{projet.title}</Text>
                                        <Text tag="p" size="base">{projet.description}</Text>
                                        <SeeMore link={`/projets#${anchor}`}/>
                                    </div>
                                </motion.div>
                            </Link>
                        </motion.div>
                        );
                    })}
                </div>
                <motion.div className="flex" variants={fadeDown} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <ButtonNav link="projets">Mes projets</ButtonNav>
                </motion.div>
            </section>
        </div>
    );
}

export default Index;
