import React from 'react';
import { useLocalStorage } from './UseLocalStorage';

function Theme(props) {
    const[theme, setTheme] = useLocalStorage('theme', 'light');
    const themeStyles = {
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
    };
    return (
        <div style={themeStyles}>
            <p>Current theme: {theme}</p>
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                Toggle Theme
            </button>
        </div>
    );
}

export default Theme;