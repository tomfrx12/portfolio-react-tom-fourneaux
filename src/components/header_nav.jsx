import { Link } from "react-router";
import PropTypes from "prop-types";

const HeaderNav = ({children, link, onClick, ...props}) => {
    
    const handleClick = (element) => {
        window.scrollTo(0, 0);
        if (onClick) onClick(element); //s'il y a un onClick passé en ...props, alors il est aussi appélé
    };

    return (
        <Link to={`/${link}`} className="text-white p-[0.5rem] pl-8 text-2xl hover:text-grey" {...props} onClick={handleClick}>
            {children} 
        </Link>
    );
};

export default HeaderNav;

HeaderNav.propTypes = {
    children: PropTypes.node,
    link: PropTypes.node,
    onClick: PropTypes.func,
};