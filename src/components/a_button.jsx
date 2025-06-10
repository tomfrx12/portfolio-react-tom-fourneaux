import { Link } from "react-router";

import PropTypes from "prop-types";

const ButtonNav = ({children, link, className = ""}) => {
    return (
        <Link to={`/${link}`} className={`mt-5 text-white cursor-pointer border rounded-sm border-black dark:border-white border-solid py-3 px-8 bg-black transition duration-200 hover:text-black hover:bg-[var(--color-cv-primary)] hover:shadow-[0.25rem_0.25rem_black)] active:transform active:translate-0 active:shadow-none dark:hover:text-white group dark:hover:bg-[var(--color-red-background)] ${className}`} onClick={() => window.scrollTo(0, 0)}>
            <div className="relative overflow-hidden">
                <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                {children}
                </p>
                <p className="hidden lg:block absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                {children}
                </p>
            </div>
        </Link>
    );
};

export default ButtonNav;

ButtonNav.propTypes = {
  children: PropTypes.node,
  link: PropTypes.node,
  className: PropTypes.string,
};
