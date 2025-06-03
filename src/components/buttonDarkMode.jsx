import PropTypes from 'prop-types';

const ButtonDarkMode = ({ itsDark }) => {
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