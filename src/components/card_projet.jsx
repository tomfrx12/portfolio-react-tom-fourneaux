import { Link } from 'react-router';
import { Text } from './texte';
import PropTypes from "prop-types";
import SeeMore from './see_more';

export const CardProjet = ({id_project, img_illustr, alt_illustr, title_text, text, link, title_link, img_link, alt_link, className_img}) => {
    return (
        <div id={id_project} className="bg--color-grey] rounded-[10px] m-5 flex flex-col lg: p-5 lg:items-center lg:justify-around lg:mb-10 lg:mt-10 shadow-[10px_10px_10px_black]">
            <img className={className_img} src={img_illustr} alt={alt_illustr}/>
            <div className="flex flex-col lg:w-[50%] lg:justify-center">
                <div>
                    <Text tag="h2" name="h2" className="font-black">
                        {title_text}
                    </Text>
                    <Text tag="p" className="m-2">
                        {text}
                    </Text>
                </div>
                <SeeMore link={link} onClick={() => window.scrollTo(0, 0)}/>
                <Link to={link} title={title_link} onClick={() => window.scrollTo(0, 0)} className="max-w-10 max-h-10 bg-white text-black rounded-[20px] p-[5px] my-[5px] text-center self-center transition-transform duration-300 ease-in-out shadow-[0px_0px_50px_black] hover:scale-105 lg:flex lg:justify-center lg:hover:scale-115">
                    <img className="h-[25px] max-w-full" src={img_link} alt={alt_link}/>
                </Link>
            </div>
        </div>
    );
};