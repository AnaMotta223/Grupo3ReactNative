import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Cadastrar } from "../screens/Cadastrar";
import { Home } from "../screens/Home";
import { Login } from "../screens/Login";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
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
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}