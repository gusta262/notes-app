import React, { useEffect, useState } from "react"
import { AuthContext } from "./Contexts"
import { darkTheme, lightTheme } from "../themes";
import { ThemeProvider } from "styled-components";

type AuthProviderProps = {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [theme, setTheme] = useState(lightTheme);
  const [themeMode, setThemeMode] = useState("light");

  useEffect(() => {
    const getTheme = () => {
      if (themeMode === "light") {
        setTheme(lightTheme);
      } else {
        setTheme(darkTheme);
      }
    };

    getTheme();
  }, [themeMode]);

  const toggleTheme = () => {
    if (themeMode === "light") {
      setThemeMode("dark");
    } else {
      setThemeMode("light");
    }
  }

  return (
    <AuthContext.Provider
      value={{
        toggleTheme,
        themeMode,
        theme
      }}
    >
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </AuthContext.Provider>
  )
}