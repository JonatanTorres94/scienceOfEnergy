import { createContext, useEffect, useReducer } from "react";
import { ThemeState, darkTheme, lightTheme, themeReducer } from "./themeReducer";
import { useColorScheme } from "react-native";

interface ThemeContextProps {
    theme: ThemeState; // TODO:
    setDarkTheme: () => void;
    setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps)



export const ThemeProvider = ({ children }: any) => {

    const colorScheme = useColorScheme() // aqui vamos a ver el color del SO

    const [theme, dispatch]  = useReducer(themeReducer, (colorScheme === 'dark') ? darkTheme : lightTheme)

    useEffect(() => {
      (colorScheme === 'light')
        ? setLightTheme()
        : setDarkTheme()
    
    }, [colorScheme])
    

    const setDarkTheme = () => { 
        dispatch({type: 'set_dark_theme'})
        console.log('set Dark Theme') 
    }
    const setLightTheme = () => { 
        
        dispatch({type: 'set_light_theme'})
        console.log('set Light Theme', setLightTheme.name) 
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            setDarkTheme,
            setLightTheme,
        }}>
            {children}
        </ThemeContext.Provider>
    )
}