import React, {createContext, FC, useState} from "react";

// interface Theme {
//     theme: 'dark' | 'light'
//     changeTheme: (theme: 'dark' | 'light') => void
// }

interface Provider {
    children: React.ReactNode
}

export const ThemeContext = createContext({
    theme: 'light',
    changeTheme: (theme:'light' | 'dark') => {}
})

export const ThemeProvider: FC<Provider> = ({children, ...props}) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light')
    function changeTheme(theme:'light' | 'dark'){
        setTheme(theme);
    }
    return (
        <ThemeContext.Provider
            value={{
                theme,
                changeTheme,
            }}
            {...props}
        >
            {children}
        </ThemeContext.Provider>
    );
}