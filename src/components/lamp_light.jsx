import light from "../assets/svg/light.svg"
import lamp from "../assets/svg/lamp.svg"

import {DarkMode} from './darkmode';
import ButtonDarkMode from "./buttonDarkMode";

const Lamp = () => {
    const [ itsDark, setItsDark ] = DarkMode();
    
    return (
        <>
            <img className="size-50 cursor-pointer" src={lamp} alt="Lamp of the Lamp" onClick={() => setItsDark(!itsDark)}/>
            <ButtonDarkMode/>
            <img className="size-80" src={light} alt="Light for Lamp"/>
        </>
    );
};

export default Lamp;