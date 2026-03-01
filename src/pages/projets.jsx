import { useEffect } from "react";
import { useLocation } from "react-router";

import projets from '../data/projets.json';
import CardProjet from "../components/card_projet";
import { Text } from "../components/texte";

function Projets() {
    const location = useLocation(); //récupére les objets de localisation de la page

    useEffect(() => {
    if (location.hash) { //s'il possède un hash ( avec le #)
      const id = location.hash.replace("#", ""); //le supprimer
      const element = document.getElementById(id);
      if (element) {  //s'il y a un id
        element.scrollIntoView({ behavior: "smooth" }); //y scooler en smooth
      }
    }
  }, [location]); //relance le hook à chaque fois que la localisation change

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
                        show={projet.links.demo}
                        createAt={projet.createdAt}
                        finishAt={projet.finishAt}
                    />
                ))}
            </section>
        </>
    );
}

export default Projets;