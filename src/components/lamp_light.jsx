import light from "../assets/svg/light.svg"
import lamp from "../assets/svg/lamp.svg"

import PropTypes from 'prop-types';

const Lamp = ({ itsDark, setItsDark }) => {
    return (            
        <div className="flex flex-col items-center">
            <img className="w-[300px] h-[300px] mb-[-25px] cursor-pointer" src={lamp} alt="Lamp of the Lamp" onClick={() => setItsDark(!itsDark)}/>
            {itsDark && (
                <img className="absolute w-[300px] h-[300px] top-[360px]" src={light} alt="Light enabled"/>
            )}
        </div>
    )
};

Lamp.propTypes = {
    itsDark: PropTypes.bool.isRequired,
    setItsDark: PropTypes.func.isRequired,
};

export default Lamp;