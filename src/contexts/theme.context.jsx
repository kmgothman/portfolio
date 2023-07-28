import { createContext, useState, useEffect } from 'react';


export const ThemeContext = createContext({
    mode: "light",
    backgroundMain: "#f7f7f7",
    backgroundSecond: "#adadad",
    fontMain: "#8c8c8c",
    fontSecond: "#616161",
    fifth: "white",
    sixth: "#F2F6FC",
    seventh: "#c9c9c9",
    eighth: "#0B57D0",
    ninth: "#C2E7FF",
    tenth: "#3793de"
})

export const CurrentThemeProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState({
        mode: "light",
        backgroundMain: "#f7f7f7",
        backgroundSecond: "#adadad",
        fontMain: "#8c8c8c",
        fontSecond: "#616161",
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