import light from "../assets/svg/light.svg"
import lamp from "../assets/svg/lamp.svg"

import {DarkMode} from './darkmode';

const Lamp = () => {
    const [ isDark, setDarkMode ] = DarkMode();
    
    return (
        <>
            <img className="size-50 cursor-pointer" src={lamp} alt="Lamp of the Lamp" onClick={() => setDarkMode(!isDark)}/>
            <img className="size-80" src={light} alt="Light for Lamp"/>
        </>
    );
};

export default Lamp;