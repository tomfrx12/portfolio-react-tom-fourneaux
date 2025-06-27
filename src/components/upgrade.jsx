import PropTypes from "prop-types";
import { Text } from "./texte";

export const Upgrade = ({text_upgrade}) => {
    <>
    <div className="border-2 border-red-700 p-4 bg-red-700">
        <Text tag="p" size="base">{text_upgrade}</Text>
    </div>
    </>
};

Upgrade.propTypes = {
    text_upgrade: PropTypes.string
};