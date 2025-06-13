import PropTypes from 'prop-types';

const ButtonDarkMode = ({ itsDark }) => { //récupére le bool itsDark pour changer l'icon
    let icon;
    if (itsDark) {
        icon = '🌙';
    }
    else {
        icon = '☀️';
    }

    return (
        <span className="cursor-pointer">{icon}</span>
    );
};

ButtonDarkMode.propTypes = {
    itsDark: PropTypes.bool.isRequired,
};

export default ButtonDarkMode;