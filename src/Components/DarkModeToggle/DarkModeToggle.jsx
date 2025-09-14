import { useState, useEffect } from 'react';
import Sun from './../Icons/Sun';
import Moon from './../Icons/Moon';

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState('');

    useEffect(() => {
        const prefersDarkMode = window.matchMedia(
            '(prefers-color-scheme: dark)'
        ).matches;
        setDarkMode(prefersDarkMode ? true : false);
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }, [darkMode]);

    function toggleDarkMode() {
        setDarkMode((prevMode) => !prevMode);
    }

    return (
        <button className='outline contrast' onClick={toggleDarkMode}>
            {darkMode ? <Sun /> : <Moon />}
        </button>
    );
};

export default DarkModeToggle;
