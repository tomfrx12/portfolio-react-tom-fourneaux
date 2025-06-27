import PropTypes from 'prop-types';

import sun from '../assets/svg/sun.svg';
import moon from '../assets/svg/moon.svg';

const ButtonDarkMode = ({ itsDark }) => {
    return (
        <div className={`flex items-center justify-center border border-[#efefef] rounded-[10px] h-[46px] w-[46px] m-auto relative cursor-pointer transition-all duration-300 lg:ml-4 ${itsDark ? 'bg-[var(--color-red-background-dark)]' : 'bg-[var(--color-red-background)]'}`}>
            <img alt="sun" className={`absolute w-5 h-5 transition-all duration-300 z-[1] ${itsDark ? 'opacity-0' : 'opacity-100'}`} src={sun}/>
            <img alt="moon" className={`absolute w-4 h-4 transition-all duration-300 z-[1] ${itsDark ? 'opacity-100' : 'opacity-0'}`} src={moon}/>
        </div>
    );
}

export default ButtonDarkMode;

ButtonDarkMode.propTypes = {
    itsDark: PropTypes.bool.isRequired,
};