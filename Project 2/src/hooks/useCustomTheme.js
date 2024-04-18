import { useContext } from 'react';
import { Theme } from '../contexts/Theme';

export const useCustomTheme = () => {
    const context = useContext(Theme);

    return {
        theme: context.theme,
        setTheme: context.setTheme,
        colors: context.colors,
    }
};

export default useCustomTheme;