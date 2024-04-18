import { createContext, useState } from "react";
import Colors from "../constants/Colors"


const Theme = createContext({
    theme: 'dark',
    setTheme: () => {},
    colors: Colors.dark,
});

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark')
    const colors = Colors[theme];

    return (
    <Theme.Provider value={{ theme, setTheme, colors }}>
        {children}
    </Theme.Provider>
)};

export { Theme, ThemeProvider };