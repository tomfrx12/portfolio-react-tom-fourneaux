import light from "../assets/svg/light.svg"
import lamp from "../assets/svg/lamp.svg"

import PropTypes from 'prop-types';

const Lamp = ({ itsDark, setItsDark }) => {
    return (            
        // {/* <img className="size-50 cursor-pointer" src={lamp} alt="Lamp of the Lamp" onClick={() => setItsDark(!itsDark)}/>
        //     {itsDark && (
        //         <img className="relative size-80" src={light} alt="Light enabled"/>
        //     )} */}

            // <div className="flex flex-col items-center">
            //     <img src={lamp} alt="Test SVG Image" className="w-[300px] h-[300px] mb-[-25px]"/>
            //     <img src={light} alt="Test SVG Image" className="w-[300px] h-[300px]"/>
            // </div>            {/* <img className="size-50 cursor-pointer" src={lamp} alt="Lamp of the Lamp" onClick={() => setItsDark(!itsDark)}/>
            // {itsDark && (
            //     <img className="relative size-80" src={light} alt="Light enabled"/>
            // )} */}

            // <div className="flex flex-col items-center">
            //     <img src={lamp} alt="Test SVG Image" className="w-[300px] h-[300px] mb-[-25px]"/>
            //     <img src={light} alt="Test SVG Image" className="w-[300px] h-[300px]"/>
            // </div>

        <div className="flex flex-col items-center">
            <img className="w-[300px] h-[300px] mb-[-25px] cursor-pointer" src={lamp} alt="Lamp of the Lamp" onClick={() => setItsDark(!itsDark)}/>
            {itsDark && (
                <img className="absolute w-[300px] h-[300px] top-[344px]" src={light} alt="Light enabled"/>
            )}
        </div>
    )
};

Lamp.propTypes = {
    itsDark: PropTypes.bool.isRequired,
    setItsDark: PropTypes.func.isRequired,
};

export default Lamp;