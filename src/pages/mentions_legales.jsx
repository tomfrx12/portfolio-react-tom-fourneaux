import { motion } from "framer-motion";
import Title from "../components/title";
import { fadeRight, opacityOn } from "../components/anime_motion";
import { Link } from "react-router";

const cardVariants = {
    rest: { x: 0, y: 0 },
    hover: { x: -2, y: -2 },
};
const shadowVariants = {
    rest: { x: 0, y: 0, opacity: 0 },
    hover: { x: 10, y: 10, opacity: 1 },
};
const spring = { type: "spring", stiffness: 300, damping: 20 };

function Section({ number, title, children }) {
    return (
        <motion.section variants={fadeRight} className="px-5 py-3 sm:px-8 sm:py-5 lg:px-12">
            <motion.div whileHover="hover" initial="rest" animate="rest" className="group relative cursor-pointer">
                <motion.div
                    variants={shadowVariants}
                    transition={spring}
                    className="absolute inset-0 bg-(--color-primary) border-2 border-(--color-primary)"
                />
                <motion.div
                    variants={cardVariants}
                    transition={spring}
                    className="relative grid grid-cols-[auto_minmax(0,1fr)] items-start gap-x-4 border-2 border-white bg-[#0a0a0a] px-4 py-6 sm:gap-x-8 sm:px-9 sm:py-8"
                >
                    <span className="text-[52px] font-bold leading-[.85] text-(--color-primary) sm:text-[74px]">{number}</span>
                    <div>
                        <h2 className="mb-4 text-[22px] font-bold sm:text-[28px]">{title}</h2>
                        {children}
                    </div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}

export default function Mentions_Legales() {
    const owner = [
        ["Nom", "Tom Fourneaux"],
        ["Statut", "Etudiant Bachelor Concepteur Développeur d'Applications, Normandie Web School, Rouen"],
        ["Email", "tfourneaux@normandiewebschool.fr"],
    ];

    const host = [
        ["Société", "OVH SAS"],
        ["Adresse", "2 rue Kellermann, 59100 Roubaix, France"],
        ["Téléphone", "+33 9 72 10 10 07"],
        ["Site", "https://www.ovhcloud.com"],
    ];

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={opacityOn}
            className="min-h-screen text-white"
        >
            <Title tag="h1" name="h1" text="Mentions Légales"/>

            {/* 1 — Propriétaire */}
            <Section number="1" title="Propriétaire du site">
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
            </Section>

            {/* 2 — Hébergeur */}
            <Section number="2" title="Hébergeur">
                <dl className="grid grid-cols-1 gap-y-2.5 text-base leading-normal sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-x-5 sm:text-[19px]">
                    {host.map(([key, value]) => (
                        <div key={key} className="contents">
                            <dt className="text-white/55">{key}</dt>
                            <dd>{value}</dd>
                        </div>
                    ))}
                </dl>
            </Section>

            {/* 3 — Propriété intellectuelle */}
            <Section number="3" title="Propriété intellectuelle">
                <p className="text-[19px] leading-relaxed text-white/90 text-pretty">
                    Le contenu de ce site (textes, images, code, etc.) est la propriété de Tom Fourneaux et est protégé par le droit d'auteur. Toute reproduction ou représentation sans autorisation préalable est interdite.
                </p>
            </Section>

            {/* 4 — Données personnelles */}
            <Section number="4" title="Protection des données personnelles">
                <div className="space-y-4 text-[19px] leading-relaxed text-white/90 text-pretty">
                    <p>
                        Le formulaire de contact collecte votre nom, votre adresse e-mail et votre message dans le seul but de répondre à votre demande. Ces données sont transmises via le service tiers <strong className="text-white">EmailJS</strong> et ne sont pas partagées avec des tiers à des fins commerciales.
                    </p>
                    <p>
                        Les informations sont conservées le temps nécessaire au traitement de la demande, puis supprimées.
                    </p>
                    <p>
                        Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ces droits, contactez :{" "}
                        <a href="mailto:tfourneaux@normandiewebschool.fr" className="underline">tfourneaux@normandiewebschool.fr</a>.
                    </p>
                </div>
            </Section>

            {/* 5 — Stockage local */}
            <Section number="5" title="Stockage local (localStorage)">
                <div className="space-y-4 text-[19px] leading-relaxed text-white/90 text-pretty">
                    <p>
                        Ce site utilise le stockage local de votre navigateur (<code className="text-sm bg-white/10 px-1.5 py-0.5 rounded">localStorage</code>) à des fins techniques uniquement, sans aucun traitement côté serveur :
                    </p>
                    <ul className="list-disc list-inside space-y-1.5">
                        <li><strong className="text-white">Thème d'affichage</strong> — votre préférence clair / sombre est mémorisée localement.</li>
                        <li><strong className="text-white">Cooldown du formulaire de contact</strong> — un horodatage est enregistré après l'envoi d'un message pour limiter les soumissions répétées.</li>
                    </ul>
                    <p>
                        Ces données restent exclusivement sur votre appareil et ne sont jamais transmises à un serveur. Vous pouvez les supprimer à tout moment depuis les paramètres de votre navigateur.
                    </p>
                </div>
            </Section>

            {/* 6 — Crédits */}
            <Section number="6" title="Crédits">
                <div className="space-y-4 text-[19px] leading-relaxed text-white/90 text-pretty">
                    <p>
                        <strong className="text-white">Polices de caractères</strong> — Comic Neue, chargée via{" "}
                        <a href="https://fonts.google.com" target="_blank" rel="noopener noreferrer" className="underline">Google Fonts</a>{" "}
                        et distribuée sous licence <em>SIL Open Font License 1.1</em>.
                    </p>
                    <p>
                        <strong className="text-white">Images</strong> — captures d'écran personnelles des projets, réalisées et détenues par Tom Fourneaux.
                    </p>
                </div>
            </Section>
        </motion.div>
    );
}
