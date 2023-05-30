import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/home";
import { TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useAuthContext } from "../hooks";
import { NewAnotationScreen } from "../screens/newAnotation";
import { RootStackParamList } from "./models";

const PrivateStack = createNativeStackNavigator<RootStackParamList>();

export const PrivateRoutes = () => {
  const { toggleTheme, theme } = useAuthContext();

  return (
    <PrivateStack.Navigator initialRouteName="Home">
      <PrivateStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: "Anotações",
          headerTintColor: theme.textPrimary,
          headerTitleAlign: "center",
          headerBackground: () => (
            <View style={{ flex: 1, backgroundColor: theme.primary }} />
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => toggleTheme()}>
              <MaterialCommunityIcons
                name="theme-light-dark"
                size={30}
                color={theme.textPrimary}
              />
            </TouchableOpacity>
          ),
        }}
      />

      <PrivateStack.Screen
        name="NewNote"
        component={NewAnotationScreen}
        options={({ route }) => {
					return (
						{
							headerTitle: route.params?.title,
							headerTintColor: theme.textPrimary,
							headerTitleAlign: "center",
							headerBackground: () => (
								<View style={{ flex: 1, backgroundColor: theme.primary }} />
							),
							headerRight: () => (
								<TouchableOpacity onPress={() => toggleTheme()}>
									<MaterialCommunityIcons
										name="theme-light-dark"
										size={30}
										color={theme.textPrimary}
									/>
								</TouchableOpacity>
							),
						}
					)
				}}
      />
    </PrivateStack.Navigator>
  );
};
