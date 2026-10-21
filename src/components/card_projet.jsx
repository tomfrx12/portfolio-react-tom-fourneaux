import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

export default function CardProjet({
    anchor,
    img_illustr,
    alt_illustr,
    title_text,
    text,
    github,
    show,
    createAt,
    technologies,
    status,
}) {
    const shouldReduceMotion = useReducedMotion();
    const [hovered, setHovered] = useState(false);

    const techCount   = technologies ? technologies.length : 0;
    const statusLabel = Array.isArray(status) ? status[0] : status;
    const isActive    = statusLabel === 'En cours';

    const metric1 = { value: techCount, label: 'Technologies' };
    const metric2 = { value: createAt,  label: 'Année' };

    return (
        <div
            id={anchor}
            className="flex flex-col gap-3 md:gap-4"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Image — hors de la carte */}
            <div className="relative aspect-[4/3] md:aspect-square overflow-hidden rounded-[20px] md:rounded-[30px]">
                <img
                    src={img_illustr}
                    alt={alt_illustr}
                    className={`absolute inset-0 w-full h-full object-cover
                        transition-transform duration-500 ease-out
                        ${!shouldReduceMotion && hovered ? 'scale-[1.07]' : 'scale-100'}`}
                />

                {/* Boutons View / Git au survol */}
                <AnimatePresence>
                    {hovered && !shouldReduceMotion && (show || github) && (
                        <motion.div
                            key="view"
                            initial={{ opacity: 0, scale: 0.55 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.55 }}
                            transition={{ duration: 0.18, ease: 'easeOut' }}
                            className="absolute inset-0 flex items-center justify-center gap-4 pointer-events-none"
                        >
                            {show && (
                                <a
                                    href={show}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="pointer-events-auto w-16 h-16 rounded-full flex items-center justify-center shadow-xl"
                                    style={{ backgroundColor: 'var(--color-primary)' }}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <span className="text-white text-[9px] font-black tracking-[0.25em] uppercase">
                                        View
                                    </span>
                                </a>
                            )}
                            {github && (
                                <a
                                    href={github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="pointer-events-auto w-16 h-16 rounded-full flex items-center justify-center shadow-xl bg-white/10 backdrop-blur-sm"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <span className="text-black text-[9px] font-black tracking-[0.25em] uppercase">
                                        Git
                                    </span>
                                </a>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Carte texte — séparée de l'image */}
            <div className="flex flex-col p-4 md:p-6 lg:p-8 bg-zinc-900 rounded-[20px] md:rounded-[30px]">

                {/* Badge statut */}
                <div className={`flex items-center gap-2 ${!isActive ? 'mb-6' : 'mb-0'}`}>
                    {isActive && (
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-semibold bg-white/10 text-white/60 mb-3">
                            En cours
                        </span>
                    )}
                </div>

                {/* Titre */}
                <h2 className="text-[17px] lg:text-[20px] font-black text-white leading-snug line-clamp-3 mb-2">
                    {title_text}
                </h2>

                {/* Description */}
                <p className="text-white/60 text-s leading-relaxed line-clamp-2 mb-4">
                    {text}
                </p>

                {/* Métriques */}
                <div className="flex gap-8 pt-3 border-t border-white/10 mb-3">
                    <div>
                        <span
                            className="text-[2rem] lg:text-[2.4rem] font-black leading-none block"
                            style={{ color: 'var(--color-primary)' }}
                        >
                            {metric1.value}
                        </span>
                        <span className="text-white/50 text-[11px] mt-1 block leading-tight">
                            {metric1.label}
                        </span>
                    </div>
                    {metric2.value && (
                        <div>
                            <span
                                className="text-[2rem] lg:text-[2.4rem] font-black leading-none block"
                                style={{ color: 'var(--color-primary)' }}
                            >
                                {metric2.value}
                            </span>
                            <span className="text-white/50 text-[11px] mt-1 block leading-tight">
                                {metric2.label}
                            </span>
                        </div>
                    )}
                </div>

                {/* Liens */}
                <div className="flex items-center gap-4">
                    {show && (
                        <a
                            href={show}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-1 text-xs font-semibold text-white transition-colors duration-200 hover:text-white/70"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <span>Voir le projet</span>
                            <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                        </a>
                    )}
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-semibold text-white/50 transition-colors duration-200 hover:text-white/70"
                            onClick={(e) => e.stopPropagation()}
                        >
                            GitHub
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
