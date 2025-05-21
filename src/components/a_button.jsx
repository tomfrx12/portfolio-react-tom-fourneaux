import { Link } from "react-router";

import PropTypes from "prop-types";

const ButtonNav = ({children, link}) => {
    return (
        <Link to={`/${link}`} className="bg-white text-black rounded-[20px] my-[20px] transition:transform duration:300 ease-in-out hover:scale-105 lg:py-[10px] lg:px-[15x]" onClick={() => window.scrollTo(0, 0)}>
            {children}
        </Link>
    );
};

export default ButtonNav;

ButtonNav.propTypes = {
  children: PropTypes.node,
  link: PropTypes.node,
};