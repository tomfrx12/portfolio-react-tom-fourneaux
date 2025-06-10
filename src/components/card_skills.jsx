import { Text } from './texte';
import PropTypes from "prop-types";

export const CardSkill = ({img_illustr, alt_illustr, text_illustr, description_illustr}) => {
    return (
        <div className="relative w-full max-w-[180px] lg:w-[195px] lg:h-[285px] bg-[#313131] rounded-[20px] text-white overflow-hidden shadow-lg group transition-all duration-200 ease-in-out lg:hover:scale-105 lg:hover:-rotate-1">
            <div className="flex flex-col items-center justify-center p-4 text-center gap-2 lg:hidden">
                <img src={img_illustr} alt={alt_illustr} className="w-[60%] max-h-[50px] mb-2" />
                <Text tag="p" size="lg" color="white">{text_illustr}</Text>
                <Text tag="span" size="base" color="white">{description_illustr}</Text>
            </div>
            <div className="hidden lg:block w-full h-full relative">
                <img 
                    src={img_illustr} 
                    alt={alt_illustr} 
                    className="absolute top-1/2 left-1/2 w-[60%] max-h-[65%] -translate-x-1/2 -translate-y-1/2 transition-all duration-200 z-10 group-hover:blur-sm group-hover:w-[80%] group-hover:max-h-[80%]"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20 text-center">
                    <Text tag="p" size="lg" color="white">{text_illustr}</Text>
                    <Text tag="span" size="base" color="white">{description_illustr}</Text>
                </div>
            </div>
        </div>
    );
};

CardSkill.propTypes = {
    img_illustr: PropTypes.node,
    alt_illustr: PropTypes.node,
    text_illustr: PropTypes.node,
    description_illustr: PropTypes.node,
};