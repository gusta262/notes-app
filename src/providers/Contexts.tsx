import { createContext } from "react";

type AuthContextProps = {
  toggleTheme: () => void;
  themeMode: string;
  theme: any;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);
