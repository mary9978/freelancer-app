import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const DarkModeContext =createContext();
export function DarkModeProvider({children}) {
    const [isDarkMode,setIsDarkMode] = useLocalStorage(
        window.matchMedia("(prefers-color-scheme: dark)").matches
        ,"isDarkMode");  
    useEffect(() => {
      if(isDarkMode){
        document.documentElement.classList.add('dark-mode');
        document.documentElement.classList.remove('light-mode');
      }
      else{
        document.documentElement.classList.add('light-mode');
        document.documentElement.classList.remove('dark-mode');
      }
      
    }, [isDarkMode]);
    
    const toggleDark =()=>{
       setIsDarkMode(!isDarkMode);
    }
    return(
        <DarkModeContext.Provider value={{isDarkMode,toggleDark}}>
            {children}
        </DarkModeContext.Provider>
    )
}
export const useDarkMode =()=>{
   const context = useContext(DarkModeContext);
   if(context === undefined) throw new Error('Theme context was used outside of ThemeProvider');
   return context;
}

