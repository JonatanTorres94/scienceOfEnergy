import { Theme } from "@react-navigation/native"

type ThemeAction =
    | { type: 'set_light_theme' }
    | { type: 'set_dark_theme' }

export interface ThemeState extends Theme {
    currentTheme: 'light' | 'dark',
    dividerColor: string
}

export const lightTheme: ThemeState = {
    currentTheme: 'light',
    dark: false,
    dividerColor: 'rgba(0,0,0,0.7)',
    colors: {
        primary: '#005BBF',
        background: 'white',
        card: 'green',
        titleText: '#1315E9',
        globalText: '#2C2F33',
        border: 'orange',
        notification: 'teal',
    }
}

export const darkTheme: ThemeState = {
    currentTheme: 'dark',
    dark: true,
    dividerColor: 'rgba(0,0,0,0.7)',
    colors: {
        primary: '#A8F0E8',
        background: 'black',
        card: 'green',
        titleText: '#7C9DBA',
        globalText: '#EDEDEE',
        border: 'orange',
        notification: 'teal',
    }
}


export const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
    switch (action.type) {
        case 'set_light_theme':
            return {...lightTheme}

        case 'set_dark_theme':
            return {...darkTheme}

        default:
            return state
    }
}