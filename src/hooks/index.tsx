import { useContext } from "react";
import { AuthContext } from "../providers/Contexts";
import { lightTheme } from "../themes";
import { DarkTheme } from "@react-navigation/native";

export const useAuthContext = () => {
  const user = useContext(AuthContext);

  return user;
};

export const useTheme = () => {
  const { theme } = useAuthContext();
  if (theme === "light") {
    return lightTheme;
  }

  return DarkTheme;
};
