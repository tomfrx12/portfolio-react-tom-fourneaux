import { Link } from 'react-router';
import {Text} from './texte';
import PropTypes from "prop-types";

export const CardProjet = ({id_project, img_illustr, alt_illustr, title_text, text, text_link, link, title_link, img_link, alt_link, className_img}) => {
    return (
        <div id={id_project} className="bg-[var(--color-grey)] rounded-[10px] m-[20px] flex flex-col lg: p-[20px] lg:items-center lg:justify-around lg:mb-[40px] lg:mt-[40px] shadow-[10px_10px_10px_black]">
            <img className={className_img} src={img_illustr} alt={alt_illustr}/>
            {/* m-[30px] max-w-full max-h-max text-center */}
            <div className="flex flex-col lg:w-[50%] lg:justify-center">
                <div>
                    <Text tag="h2" name="h2" className="font-black">
                        {title_text}
                    </Text>
                    <Text tag="p" className="m-2">
                        {text}
                    </Text>
                </div>
                <Text tag="p" className="mb-[0px] ml-[10px]">
                    {text_link}
                </Text>
                <Link to={link} title={title_link} className="max-w-[40px] max-h-[40px] bg-white text-black rounded-[20px] p-[5px] my-[5px] text-center self-center transition-transform duration-300 ease-in-out shadow-[0px_0px_50px_black] hover:scale-105 lg:flex lg:justify-center lg:hover:scale-115">
                    <img className="h-[25px] max-w-full" src={img_link} alt={alt_link}/>
                </Link>
            </div>
        </div>
    );
};

CardProjet.propTypes = {
    id_project: PropTypes.node,
    img_illustr: PropTypes.node,
    alt_illustr: PropTypes.node,
    title_text: PropTypes.node,
    text: PropTypes.node,
    text_link: PropTypes.node,
    link: PropTypes.node,
    title_link: PropTypes.node,
    img_link: PropTypes.node,
    alt_link: PropTypes.node,
    className_img: PropTypes.node,
};
