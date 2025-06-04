import { Link } from "react-router";
import PropTypes from "prop-types";

const ANav = ({children, link}) => {
    return (
        <Link to={`/${link}`} className="text-white p-[0.5rem] pl-[2rem] text-2xl hover:text-grey" onClick={() => { window.scrollTo(0, 0);}}>
            {children} 
        </Link>
    );
};

export default ANav;

ANav.propTypes = {
    children: PropTypes.node,
    link: PropTypes.node,
};