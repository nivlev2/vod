import React,{createContext,useState} from 'react'

export const ThemeContext = createContext();

export function ThemeProvider (props){
    const [theme,setTheme] = useState(false);
    function changeTheme(){
        setTheme(!theme);
    }
    return(
        <ThemeContext.Provider value={{theme,changeTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}