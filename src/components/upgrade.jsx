import PropTypes from "prop-types";
import { Text } from "./texte";

export const Upgrade = ({ text_upgrade, onClick }) => {
    return (
        <button
            type="button" onClick={onClick} className="my-2 border-2 border-gray-400 p-4 bg-gradient-to-br from-gray-100 to-blue-100 rounded-lg shadow-md hover:from-blue-200 hover:to-blue-300 active:scale-95 transition-all duration-150 text-gray-800 font-bold">
            <Text tag="span" size="base">{text_upgrade}</Text>
        </button>
    );
};

Upgrade.propTypes = {
    text_upgrade: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

export default Upgrade;