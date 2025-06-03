import light from "../assets/svg/light.svg"
import lamp from "../assets/svg/lamp.svg"

import PropTypes from 'prop-types';

const Lamp = ({ itsDark, setItsDark }) => {
    return (
        <>
            <img className="size-50 cursor-pointer" src={lamp} alt="Lamp of the Lamp" onClick={() => setItsDark(!itsDark)}/>
            {itsDark && (
                <img className="relative size-80" src={light} alt="Light enabled"/>
            )}
            
        </>
    );
};

Lamp.propTypes = {
    itsDark: PropTypes.bool.isRequired,
    setItsDark: PropTypes.func.isRequired,
};

export default Lamp;