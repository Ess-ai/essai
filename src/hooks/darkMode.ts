import { useEffect, useState } from "react";

export const darkMode = () => {
  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme === 'dark' ? 'dark' : 'light'

  useEffect(() => {
    const root =window.document.documentElement
    root.classList.remove(theme)
    root.classList.add(colorTheme)

    localStorage.setItem('theme', theme)
  }, [theme, colorTheme])

  return [colorTheme, setTheme]
  
}
