import { createContext, useEffect, useState } from "react";


const Context = createContext()
function Provider({children}){
    
    const lan = window.localStorage.getItem('language')

    const [language, setLanguage] = useState(lan ? lan : 'uz')
    return (
        <Context.Provider value={{language, setLanguage}}>
            {children}
        </Context.Provider>
    )
}
export {Context, Provider}