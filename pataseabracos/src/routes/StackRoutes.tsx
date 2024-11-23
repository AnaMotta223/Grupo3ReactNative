import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Cadastrar } from "../screens/Cadastrar";
import { Login } from "../screens/Login";
import { TabRoutes } from "./tab.routes";
import { AnimaisCadastrados } from "../screens/AnimaisCadastrados";
import { AnimaisAdotados } from "../screens/AnimaisAdotados";
import { HomeAdmin } from "../screens/HomeAdmin";

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
        name="stackAnimaisAdotados"
        component={AnimaisAdotados}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="stackHomeAdmin"
        component={HomeAdmin}
        options={{ headerShown: false, gestureEnabled: false }}
      />
    </Stack.Navigator>
  );
}
