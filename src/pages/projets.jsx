import { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useLocation } from 'react-router';

import projets from '../data/projets.json';
import CardProjet from '../components/card_projet';
import Title from '../components/title';

function AnimatedCard({ projet }) {
    const shouldReduceMotion = useReducedMotion();

    return (
        <motion.div
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
    );
}

function Projets() {
    const location = useLocation();

    useEffect(() => {
        const anchor = location.hash.slice(1);
        const target = document.getElementById(anchor);
        target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, [location.hash]);

    const projectList = [...projets].reverse();
    const leftCol  = projectList.filter((_, i) => i % 2 === 0);
    const rightCol = projectList.filter((_, i) => i % 2 === 1);

    return (
        <>
            <Title text="projet" />

            <div className="">
                <section className="px-4 md:px-8 lg:px-12 py-16 max-w-7xl mx-auto w-full">

                    {/* Mobile : colonne unique */}
                    <div className="flex flex-col gap-8 md:hidden">
                        {projectList.map((projet) => (
                            <AnimatedCard key={projet.id} projet={projet} />
                        ))}
                    </div>

                    {/* Desktop : 2 colonnes décalées */}
                    <div className="hidden md:flex gap-8 lg:gap-10 items-start">
                        <div className="flex-1 flex flex-col gap-12 lg:gap-16">
                            {leftCol.map((projet) => (
                                <AnimatedCard key={projet.id} projet={projet} />
                            ))}
                        </div>
                        <div className="flex-1 flex flex-col gap-12 lg:gap-16 mt-20">
                            {rightCol.map((projet) => (
                                <AnimatedCard key={projet.id} projet={projet} />
                            ))}
                        </div>
                    </div>

                </section>
            </div>
        </>
    );
}

export default Projets;
