import { createContext, useState, useEffect } from 'react';


export const ThemeContext = createContext({
    mode: "dark",
    backgroundMain: "#393a3b",
    backgroundSecond: "#595c5e",
    fontMain: "#b6babf",
    fontSecond: "#e1eaf2",
    fifth: "white",
    sixth: "#F2F6FC",
    seventh: "#c9c9c9",
    eighth: "#0B57D0",
    ninth: "#C2E7FF",
    tenth: "#3793de"
})

export const CurrentThemeProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState({
        mode: "dark",
        backgroundMain: "#393a3b",
        backgroundSecond: "#595c5e",
        fontMain: "#b6babf",
        fontSecond: "#e1eaf2",
        fifth: "white",
        sixth: "#F2F6FC",
        seventh: "#c9c9c9",
        eighth: "#0B57D0",
        ninth: "#C2E7FF",
        tenth: "#3793de"
    })
    const value = { currentTheme, setCurrentTheme}
    

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
