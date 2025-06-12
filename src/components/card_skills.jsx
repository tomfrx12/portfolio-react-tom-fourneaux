import { Text } from './texte';
import PropTypes from "prop-types";

export const CardSkill = ({img_illustr, alt_illustr, text_illustr, description_illustr}) => {
    return (
        <>
            <div className="mx-2 my-4 hidden relative w-[80px] h-[100px] lg:w-[195px] lg:h-[285px] bg-[#505050] rounded-[20px] lg:flex flex-col items-center justify-center text-white transition-all duration-200 ease-in-out group overflow-hidden shadow-lg lg:hover:scale-105 lg:hover:-rotate-1">
                <img src={img_illustr} alt={alt_illustr} className="absolute top-1/2 left-1/2 w-[60%] max-h-[65%] -translate-x-1/2 -translate-y-1/2 transition-all duration-200 lg:group-hover:blur-sm lg:group-hover:w-[80%] lg:group-hover:max-h-[80%]"/>
                <div className="relative flex flex-col items-center justify-center gap-3 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-200">
                    <Text tag="p" size="lg" color="white" align="center">{text_illustr}</Text>
                    <Text tag="span" size="base" color="white">{description_illustr}</Text>
                </div>
            </div>
            <div className="mx-2 my-4 flex flex-col items-center lg:hidden w-[150px] bg-[#313131] rounded-[20px]">
                <img src={img_illustr} alt={alt_illustr} className="w-[100px] h-[100px] m-auto pt-4" />
                <div className="flex justify-center">
                    <Text tag="p" size="lg" color="white" align="center" className="p-2">{text_illustr}</Text>
                </div>
            </div>
        </>
    );
};

CardSkill.propTypes = {
    img_illustr: PropTypes.node,
    alt_illustr: PropTypes.node,
    text_illustr: PropTypes.node,
    description_illustr: PropTypes.node,
};
