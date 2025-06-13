import light from "../assets/svg/light.svg"
import lamp from "../assets/svg/lamp.svg"

import PropTypes from 'prop-types';

const Lamp = ({ itsDark, setItsDark }) => { //récupére le bool et la func du dark mode
    return (            
        <div className="flex flex-col items-center">
            <img className="z-1 w-[300px] h-[300px] mb-[-25px] cursor-pointer" src={lamp} alt="Lamp of the Lamp" onClick={() => setItsDark(!itsDark)}/> 
            {/* change la valeur inverse du bool à chaque clicker sur la Lamp. la func prend en parametre la valeur du bool pour maj l'état du dark mode directement */}
            {itsDark && ( //si le bool de dark mode est true alors il affiche l'image
                <img className="z-0 absolute w-[300px] h-[300px] top-[344px]" src={light} alt="Light enabled"/>
            )}
        </div>
    )
};

Lamp.propTypes = {
    itsDark: PropTypes.bool.isRequired,
    setItsDark: PropTypes.func.isRequired,
};

export default Lamp;