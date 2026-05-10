import projets from '../data/projets.json';
import CardProjet from "../components/card_projet";
import { Text } from "../components/texte";

function Projets() {
    return (
        <>
            <Text tag="h1" name="h1" color="white" background="black" className="m-5 py-2.5 px-5">Projet</Text>
            <section className="grid grid-cols-2">
                {[...projets].reverse().map((projet) => (
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
                ))}
            </section>
        </>
    );
}

export default Projets;