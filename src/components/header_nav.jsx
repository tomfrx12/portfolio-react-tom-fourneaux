import { Link } from "react-router";

const HeaderNav = ({children, link, onClick, ...props}) => {
    
    const handleClick = (event) => {
        window.scrollTo(0, 0);
        if (onClick) onClick(event); //s'il y a un onClick passé en ...props, alors il est aussi appélé
    };

    return (
        <Link to={`/${link}`} className="text-white p-[0.5rem] text-2xl hover:text-grey" {...props} onClick={handleClick}>
            {children} 
        </Link>
    );
};

export default HeaderNav;