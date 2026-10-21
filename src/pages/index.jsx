// import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import ButtonNav from "../components/ButtonNav";
import { Text } from "../components/texte";
import Lamp from "../components/lamp_light";
import { fadeUp, fadeDown, fadeRight, fadeLeft, opacityOn  } from "../components/anime_motion";
import Title from "../components/title";
import CardProjet from "../components/card_projet";
import projets from "../data/projets.json";

function Index({ itsDark, setItsDark }) {
    const recentProjets = [...projets].reverse().slice(0, 2);

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

    const shouldReduceMotion = useReducedMotion();

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
                        <Text tag="p" size="base" className="border-l-5 border-l-[#ff6347] m-[0px 0px 20px 20px] px-[15px] mt-10">Je suis un jeune développeur web de 20 ans, actuellement étudiant à la Normandie Web School (NWS) de Rouen, où je suis inscrit en Bachelor Concepteur Développeur d'Applications. Passionné par le monde du développement web et le code depuis mon plus jeune âge, j’ai naturellement orienté mes études et ma carrière vers ce domaine en constante évolution.</Text>
                    </motion.div>
                    <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <img src="/img/illustration_presentation/illustration_dev.png" alt="illustration developpeur web" className="m-auto max-w-full p-[15px] lg:w-auto lg:self-center"/>
                    </motion.div>
                </div>
                <motion.div className="flex gap-5" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <ButtonNav link="competences">Compétences</ButtonNav>
                </motion.div>
            </section>

            
            <Title text="projets récents" />

            <div className="bg-zinc-950">
                <section className="px-4 md:px-8 lg:px-12 py-16 max-w-7xl mx-auto w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                        {recentProjets.map((projet) => (
                            <motion.div
                                key={projet.id}
                                initial={shouldReduceMotion ? false : { opacity: 0, y: 200, transformPerspective: 1200 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <CardProjet
                                    anchor={projet.anchor}
                                    img_illustr={projet.image.url}
                                    alt_illustr={projet.image.alt}
                                    title_text={projet.title}
                                    text={projet.description}
                                    github={projet.links.github}
                                    {...(projet.links?.demo ? { show: projet.links.demo } : {})}
                                    createAt={projet.createdAt}
                                    finishAt={projet.finishAt}
                                    status={projet.status}
                                    technologies={projet.technologies}
                                />
                            </motion.div>
                        ))}
                    </div>
                    <motion.div
                        className="flex justify-center mt-12"
                        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    >
                        <ButtonNav link="projets">Voir tous les projets</ButtonNav>
                    </motion.div>
                </section>
            </div>
        </div>
    );
}

export default Index;
