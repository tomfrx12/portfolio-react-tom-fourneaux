import PropTypes from 'prop-types';

const ButtonDarkMode = () => {
    let icon;
    if (localStorage.getItem("theme") === "dark") {
        icon = '☀️';
    }
    else {
        icon = '🌙';
    }

    return (
        <span className="cursor-pointer">{icon}</span>
    );
};

ButtonDarkMode.propTypes = {
    itsDark: PropTypes.bool.isRequired,
};

export default ButtonDarkMode;