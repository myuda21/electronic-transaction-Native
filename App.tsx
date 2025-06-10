import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/presentation/navigation/app_navigator";
import { CartProvider } from "./src/context/cart_context";
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <CartProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </CartProvider>
    </PaperProvider>
  );
}