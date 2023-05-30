import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  NewNote: { title: string };
};

export type propsStack = NativeStackNavigationProp<RootStackParamList>;