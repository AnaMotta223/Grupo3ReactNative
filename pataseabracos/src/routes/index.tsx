import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import StackRoutes from "./StackRoutes";
import { AuthProvider } from "../hooks/useAuth";

export default function Routes() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StackRoutes />
      </AuthProvider>
    </NavigationContainer>
  );
}
