import { motion } from "framer-motion";
import Title from "../components/title";
import { fadeRight, opacityOn } from "../components/anime_motion";
import { Link } from "react-router";

export default function Mentions_Legales() {
    const owner = [
        ["Nom", "Tom Fourneaux"],
        ["Statut", "Etudiant Bachelor chef de projets digitaux, Normandie Web School, Rouen"],
        ["Email", "tfourneaux@normandiewebschool.fr"],
    ];

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={opacityOn}
            className="min-h-screen text-white"
        >
            <Title text="Mentions Légales"/>

            {/* 1 */}
            <motion.section
                variants={fadeRight}
                className="px-5 py-3 sm:px-8 sm:py-5 lg:px-12"
            >
                <motion.div 
                    whileHover="hover" 
                    initial="rest" 
                    animate="rest" 
                    className="group relative cursor-pointer"
                >
                    <motion.div
                        variants={{
                            rest: { x: 0, y: 0, opacity: 0},
                            hover: { x: 10, y: 10, opacity: 1},
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="absolute inset-0 bg-(--color-primary) border-2 border-(--color-primary)"
                    >
                    </motion.div>

                    <motion.div
                        variants={{
                            rest: { x: 0, y: 0 },
                            hover: { x: -2, y: -2 },
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="relative grid grid-cols-[auto_minmax(0,1fr)] items-start gap-x-4 border-2 border-white bg-[#0a0a0a] px-4 py-6 sm:gap-x-8 sm:px-9 sm:py-8"
                    >
                        <span className="text-[52px] font-bold leading-[.85] text-(--color-primary) sm:text-[74px]">1</span>
                        <div>
                            <h2 className="mb-4 text-[22px] font-bold sm:text-[28px]">Propriétaire du site</h2>
                            <dl className="grid grid-cols-1 gap-y-2.5 text-base leading-normal sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-x-5 sm:text-[19px]">
                                {owner.map(([key, value]) => (
                                    <div key={key} className="contents">
                                        <dt className="text-white/55">{key}</dt>
                                        <dd>{value}</dd>
                                    </div>
                                ))}
                                <dt className="text-white/55">Site web</dt>
                                <dd>
                                    <Link href="https://tom-fourneaux.fr" className="underline">https://tom-fourneaux.fr</Link>
                                </dd>
                            </dl>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.section>

            {/* 2 */}
            <motion.section
                variants={fadeRight}
                className="px-5 py-3 sm:px-8 sm:py-5 lg:px-12"
            >
                <motion.div 
                    whileHover="hover" 
                    initial="rest" 
                    animate="rest" 
                    className="group relative cursor-pointer"
                >
                    <motion.div
                        variants={{
                            rest: { x: 0, y: 0, opacity: 0},
                            hover: { x: 10, y: 10, opacity: 1},
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="absolute inset-0 bg-(--color-primary) border-2 border-(--color-primary)"
                    >
                    </motion.div>

                    <motion.div
                        variants={{
                            rest: { x: 0, y: 0 },
                            hover: { x: -2, y: -2 },
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="relative grid grid-cols-[auto_minmax(0,1fr)] items-start gap-x-4 border-2 border-white bg-[#0a0a0a] px-4 py-6 sm:gap-x-8 sm:px-9 sm:py-8"
                    >
                        <span className="text-[52px] font-bold leading-[.85] text-(--color-primary) sm:text-[74px]">2</span>
                        <div>
                            <h2 className="mb-4 text-[22px] font-bold sm:text-[28px]">Propriété intellectuelle</h2>
                            <p className="text-[19px] leading-relaxed text-white/90 text-pretty">
                                Le contenu de ce site (textes, images, code, etc.) est la propriété de Tom Fourneaux et est protégé par le droit d’auteur. Toute reproduction ou représentation sans autorisation préalable est interdite.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.section>


            {/* 3 */}
            <motion.section
                variants={fadeRight}
                className="px-5 py-3 sm:px-8 sm:py-5 lg:px-12"
            >
                <motion.div 
                    whileHover="hover" 
                    initial="rest" 
                    animate="rest" 
                    className="group relative cursor-pointer"
                >
                    <motion.div
                        variants={{
                            rest: { x: 0, y: 0, opacity: 0},
                            hover: { x: 10, y: 10, opacity: 1},
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="absolute inset-0 bg-(--color-primary) border-2 border-(--color-primary)"
                    >
                    </motion.div>

                    <motion.div
                        variants={{
                            rest: { x: 0, y: 0 },
                            hover: { x: -2, y: -2 },
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="relative grid grid-cols-[auto_minmax(0,1fr)] items-start gap-x-4 border-2 border-white bg-[#0a0a0a] px-4 py-6 sm:gap-x-8 sm:px-9 sm:py-8"
                    >
                        <span className="text-[52px] font-bold leading-[.85] text-(--color-primary) sm:text-[74px]">3</span>
                        <div>
                            <h2 className="mb-4 text-[22px] font-bold sm:text-[28px]">Protection des données personnelles</h2>
                            <p className="text-[19px] leading-relaxed text-white/90 text-pretty">
                                Aucune donnée personnelle n’est collectée sur ce site, sauf si vous conctactez Tom Fourneaux grâce à la page contact. Les informations fournies ne seront utilisées que dans le cadre de la réponse à vos demandes. Vous avez un droit d’accès, de rectification et de suppression sur vos données personnelles.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.section>
        </motion.div>
    );
}