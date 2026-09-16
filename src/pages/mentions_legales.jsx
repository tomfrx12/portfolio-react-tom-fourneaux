import { motion } from "framer-motion";
import Title from "../components/title";
import { fadeRight, opacityOn } from "../components/anime_motion";

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
                className="px-12 py-5"
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
                        className="relative grid grid-cols-[auto_minmax(0,1fr)] items-start gap-x-8 border-2 border-white bg-[#0a0a0a] px-9 py-8"
                    >
                        <span className="text-[74px] font-bold leading-[.85] text-(--color-primary)">1</span>
                        <div>
                            <h2 className="mb-4 text-[28px] font-bold">Propriétaire du site</h2>
                            <dl className="grid grid-cols-[150px_minmax(0,1fr)] gap-x-5 gap-y-2.5 text-[19px] leading-normal">
                                {owner.map(([key, value]) => (
                                    <div key={key} className="contents">
                                        <dt className="text-white/55">{key}</dt>
                                        <dd>{value}</dd>
                                    </div>
                                ))}
                                <dt className="text-white/55">Site web</dt>
                                <dd>
                                    <a href="https://tom-fourneaux.fr" className="underline">https://tom-fourneaux.fr</a>
                                </dd>
                            </dl>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.section>

            {/* 2 */}
            <motion.section
                variants={fadeRight}
                className="px-12 py-5"
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
                        className="relative grid grid-cols-[auto_minmax(0,1fr)] items-start gap-x-8 border-2 border-white bg-[#0a0a0a] px-9 py-8"
                    >
                        <span className="text-[74px] font-bold leading-[.85] text-(--color-primary)">2</span>
                        <div>
                            <h2 className="mb-4 text-[28px] font-bold">Propriété intellectuelle</h2>
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
                className="px-12 py-5"
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
                        className="relative grid grid-cols-[auto_minmax(0,1fr)] items-start gap-x-8 border-2 border-white bg-[#0a0a0a] px-9 py-8"
                    >
                        <span className="text-[74px] font-bold leading-[.85] text-(--color-primary)">3</span>
                        <div>
                            <h2 className="mb-4 text-[28px] font-bold">rotection des données personnelles</h2>
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