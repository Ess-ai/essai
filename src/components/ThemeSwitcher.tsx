import React, { useState } from 'react'
import { darkMode } from '../hooks/darkMode'

const ThemeSwitcher = () => {
    const [colorTheme, setTheme] = darkMode()
    const [darkTheme, setDarkTheme] = useState(colorTheme === 'light' ? 'light' : 'dark')

    return (
        <div className="flex items-center mt-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sbui-icon text-scale-900 text-gray-500 dark:text-gray-400">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
        <button type="button" aria-pressed="false" className="relative bg-slate-400 inline-flex h-4 w-7 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none bg-scale-500 mx-3"
        >
            <span className="sr-only">Toggle Themes</span>
            <span aria-hidden="true" className="translate-x-3 dark:bg-scale-300 inline-block h-3 w-3 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out">
            </span>
        </button>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sbui-icon text-scale-900 text-gray-500 dark:text-gray-400">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
        </div>
    )
}

export default ThemeSwitcher