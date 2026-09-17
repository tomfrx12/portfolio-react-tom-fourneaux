import { Link } from 'react-router';
import { Text } from './texte';
import SeeMore from './see_more';

export default function CardProjet({anchor, img_illustr, alt_illustr, title_text, text, github, show, createAt, finishAt, status}) {
    return (
        <div id={anchor} className="m-3 flex min-w-0 flex-col rounded-[10px] border border-black bg-(--color-grey) p-3 shadow-[10px_10px_10px_black] sm:m-5 sm:p-5 lg:mb-10 lg:mt-10 lg:items-center lg:justify-around">
            <div className='flex w-full flex-wrap justify-between gap-2 px-2 py-4 text-sm sm:text-base'>
                <Text tag="p" font="semibold">Créé le: {createAt}</Text>
                <Text tag="p" font="semibold">Fini le: {finishAt}</Text>
            </div>
            <div className="max-h-[400px] overflow-y-auto w-full">
                <img className="block w-full h-auto" src={img_illustr} alt={alt_illustr} />
            </div>
            <div className="flex flex-col py-6 lg:justify-center">
                <div>
                    <Text tag="h2" name="h2" className="font-black">
                        {title_text}
                    </Text>
                    <Text tag="p" className="m-2">
                        {text}
                    </Text>
                </div>
                {show && (
                    <SeeMore
                        link={show}
                        onClick={() => window.scrollTo(0, 0)}
                    />
                )}
                <Link to={github} onClick={() => window.scrollTo(0, 0)} className="max-w-10 max-h-10 text-black rounded-[20px] p-[5px] my-[5px] text-center self-center transition-transform duration-300 ease-in-out shadow-[0px_0px_50px_black] hover:scale-105 lg:flex lg:justify-center lg:hover:scale-115">
                    <img className="h-[25px] max-w-full" src='/img/img_reseaux/github.png' alt='logo github pour le lien du projet github'/>
                </Link>
            </div>
        </div>
    );
};