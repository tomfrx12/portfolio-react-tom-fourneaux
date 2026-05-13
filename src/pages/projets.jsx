import { motion, useAnimation } from 'framer-motion';

import projets from '../data/projets.json';
import CardProjet from "../components/card_projet";
import { Text } from "../components/texte";
import { fadeLeft, fadeRight, fadeUp } from '../components/anime_motion';
import Title from '../components/title';

function Projets({ itsDark, setItsDark }) {
    const controls = useAnimation();

    return (
        <>
            {/* <Text tag="h1" name="h1" color="white" background="black" className="m-5 py-2.5 px-5">Projet</Text> */}
            <Title text="projet" />
            <section className="grid grid-cols-2">
                {[...projets].reverse().map((projet, i) => (
                    <motion.div className='flex' variants={i % 2 === 0 ? fadeLeft : fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{duration: 2}}>
                        <CardProjet
                            key={projet.id}
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