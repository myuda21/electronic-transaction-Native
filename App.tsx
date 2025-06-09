import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/presentation/navigation/app_navigator";
import { CartProvider } from "./src/context/cart_context";

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </CartProvider>
  );
}

