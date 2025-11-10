import { Text } from "../components/texte";
import { useState } from "react";
import { Upgrade } from "../components/upgrade";

function Clicker() {
    const [NbClick, setNbClick] = useState(0);
    const [isClick, setIsClick] = useState(false);
    
    function Clicker() {
        setNbClick(NbClick + 1);
        setIsClick(true)
        setTimeout(() => setIsClick(false), 150);//déclanger une animation temporaire du scale, 150 est un minuteur de 150 millisecondes, après quoi il remets setIsClick(false)
    };

    return (
        <div className="lg:flex min-h-screen">
            <section className="flex flex-col justify-center items-center h-[95vh] flex-1">
                <Text tag="p" size="base" className="my-4">Nombre de click : {NbClick}</Text>
                <img src="/src/assets/img/A2_Fourneaux_Tom.png" alt="Clicker Tom Fourneaux" className={`my-5 rounded-full cursor-pointer w-50 lg:w-75 transition-transform duration-150 ${isClick ? 'scale-102' : ''}`} onClick={Clicker}/>
            </section>
            <section className="flex flex-col items-center justify-center h-full lg:w-[30%] flex-1">
                <Upgrade text_upgrade="Upgrade"/>
                <Upgrade text_upgrade="Upgrade"/>
                <Upgrade text_upgrade="Upgrade"/>
                <Upgrade text_upgrade="Upgrade"/>
                <Upgrade text_upgrade="Upgrade"/>
                <Upgrade text_upgrade="Upgrade"/>
            </section>
        </div>
    )
}

export default Clicker;