import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import StackRoutes from "./StackRoutes";
import { TabRoutes } from "./tab.routes"; 

export default function Routes() {
  return (
    <NavigationContainer>
      <StackRoutes />
      {/* <TabRoutes/> */}
    </NavigationContainer>
  );
}
