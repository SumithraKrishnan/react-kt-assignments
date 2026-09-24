import React from 'react';
import { createContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    function toggleTheme() {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
  return useContext(ThemeContext);
}

export default ThemeContext;