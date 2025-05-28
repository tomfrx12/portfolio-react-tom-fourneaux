import PropTypes from 'prop-types';

const ButtonDarkMode = ({isDark}) => {
    let icon;
    if (isDark) {
        icon = '🌙';
    }
    else {
        icon = '☀️';
    }

    return (
        <span>{icon}</span>
    );
};

ButtonDarkMode.propTypes = {
    isDark: PropTypes.bool.isRequired,
};

export default ButtonDarkMode;