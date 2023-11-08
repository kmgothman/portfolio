import { createContext, useState, useEffect } from 'react';


export const MediaContext = createContext({
    isMobile: false
})

export const CurrentMediaProvider = ({ children }) => {
    const [currentMedia, setCurrentMedia] = useState({
        isMobile: false
    })
    const value = { currentMedia, setCurrentMedia}
    

    return <MediaContext.Provider value={value}>{children}</MediaContext.Provider>
}