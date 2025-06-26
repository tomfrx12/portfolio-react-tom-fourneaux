import { Text } from "../components/texte";
import { useState } from "react";
import pptom from "../assets/img/tom.png";

function Clicker() {
    const [NbClick, setNbClick] = useState(0);
    
    function Clicker() {
        setNbClick(NbClick + 1);
    };

    return (
        <>
            <div className="flex items-center flex-col">
                <button className="cursor-pointer" onClick={Clicker}>
                    <img src={pptom} alt="photo de profil Tom FOURNEAUX" className="my-5 m-auto rounded-full w-[25%]"/>
                </button>
                <Text tag="p" size="base">Nombre de click : {NbClick}</Text>
            </div>
        </>
    )
}

export default Clicker;