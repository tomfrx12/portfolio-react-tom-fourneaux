import PropTypes from "prop-types";
import { Link } from "react-router";

const SeeMore = ({link}) => {
  return (
      <Link to={link} className="ml-2 group inline-flex items-center gap-2 bg-transparent border-none outline-none transition-transform duration-300 hover:scale-105 w-auto max-w-fit">
        <span className="relative py-1 text-base font-bold text-black transition-colors duration-500 dark:text-white group-hover:italic">
          Voir plus
          <span className="absolute bottom-0 left-0 w-full h-0.5 rounded-full transition-all duration-500 group-hover:w-0 bg-[var(--color-red-background)]"></span>
        </span>
      </Link>
  );
}

export default SeeMore;

SeeMore.propTypes = {
  link: PropTypes.string.isRequired,
};
