import { ThemeProvider } from "@emotion/react";
import { Box } from "@mui/material";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { LightTheme, DarkTheme } from "../themes";

interface IThemeContextData {
  themeName: "light" | "dark";
  toogleTheme: () => void;
}

interface IAppThemeProviderProps {
  children: React.ReactNode;
}

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext =(() => {
    return useContext(ThemeContext)
})

export const AppThemeProvider: React.FC<IAppThemeProviderProps> = ({ children }) => {

  const [themeName, setThemeName] = useState<'light' | 'dark'>('light')
  
  const toogleTheme = useCallback(() => {
    setThemeName((oldThemeName) => oldThemeName === 'light' ? 'dark' : 'light')
  }, [])

  const theme = useMemo(() => {
    if (themeName === 'light') return LightTheme

    return DarkTheme
  }, [themeName])

  return (
    <ThemeContext.Provider value={{ themeName, toogleTheme }}>
        <ThemeProvider theme={theme}>
            <Box width={"100ww"} height={"200hw"} bgcolor={theme.palette.background.default}>
                {children}
            </Box>
        </ThemeProvider>
    </ThemeContext.Provider>
  );
};
