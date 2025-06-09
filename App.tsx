import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/presentation/navigation/app_navigator";

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

