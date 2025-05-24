import { createContext, useState } from 'react'
import PropTypes from "prop-types";

export const DarkModeContext = createContext();

export default function DarkModeProvider({children}) {
    const [darkMode, setDarkMode] = useState(false);

    function toggleDarkMode() {
        setDarkMode(!darkMode);
    }
    
    return (
        <DarkModeContext.Provider value= {{darkMode, toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
};

DarkModeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};