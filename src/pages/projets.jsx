import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useLocation } from 'react-router';

import projets from '../data/projets.json';
import CardProjet from "../components/card_projet";
import { Text } from "../components/texte";
import { fadeLeft, fadeRight, fadeUp } from '../components/anime_motion';
import Title from '../components/title';

function Projets({ itsDark, setItsDark }) {
    const location = useLocation();

    useEffect(() => {
        const anchor = location.hash.slice(1);
        const target = document.getElementById(anchor);
        target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, [location.hash]);

    return (
        <>
            <Title text="projet" />
            <section className="grid grid-cols-2">
                {[...projets].reverse().map((projet, i) => (
                    <motion.div key={projet.id} className='flex' variants={i % 2 === 0 ? fadeLeft : fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{duration: 2}}>
                        <CardProjet
                            anchor={projet.anchor}
                            img_illustr={projet.image.url}
                            alt_illustr={projet.image.alt}
                            title_text={projet.title}
                            text={projet.description}
                            github={projet.links.github}
                            {...( projet.links?.demo ? { show: projet.links.demo } : {} )}
                            createAt={projet.createdAt}
                            finishAt={projet.finishAt}
                        />
                    </motion.div>
                ))}
            </section>
        </>
    );
}

export default Projets;