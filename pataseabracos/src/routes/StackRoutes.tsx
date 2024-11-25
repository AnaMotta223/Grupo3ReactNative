import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { AnimaisAdotados } from "../screens/AnimaisAdotados";
import { AnimaisCadastrados } from "../screens/AnimaisCadastrados";
import { Cadastrar } from "../screens/Cadastrar";
import { Chat } from "../screens/Chat";
import { Login } from "../screens/Login";
import { TabRoutes } from "./TabRoutes";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator initialRouteName="stackLogin">
      <Stack.Screen
        name="stackLogin"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="stackCadastrar"
        component={Cadastrar}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="stackHome"
        component={TabRoutes}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Stack.Screen
        name="stackAnimaisCadastrados"
        component={AnimaisCadastrados}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="stackChat"
        component={Chat}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="stackAnimaisAdotados"
        component={AnimaisAdotados}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
