import { Text } from "../components/texte";
import { useState } from "react";
import pptom from "../assets/img/tom.png";
import {Upgrade} from "../components/upgrade";

function Clicker() {
    const [NbClick, setNbClick] = useState(0);
    const [isClick, setIsClick] = useState(false);
    
    function Clicker() {
        setNbClick(NbClick + 1);
        setIsClick(true)
        setTimeout(() => setIsClick(false), 150);//déclanger une animation temporaire du scale, 150 est un minuteur de 150 millisecondes, après quoi il remets setIsClick(false)
    };

    return (
        <>
            <div className="flex items-center flex-col justify-center">
                <img src={pptom} alt="Clicker Tom Fourneaux" className={`my-5 m-auto rounded-full w-[25%] cursor-pointer transition-transform duration-150 ${isClick ? 'scale-102' : ''}`} onClick={Clicker}/>
                <Text tag="p" size="base">Nombre de click : {NbClick}</Text>
                <Upgrade text_upgrade="Upgrade"/>
            </div>
        </>
    )
}

export default Clicker;