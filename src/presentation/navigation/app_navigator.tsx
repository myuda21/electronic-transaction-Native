// src/presentation/navigation/AppNavigator.tsx
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProductListPage from "../pages/product_list_page";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProductList" component={ProductListPage} options={{ title: "Produk Elektronik" }} />
      {/* Tambah: ProductDetailPage, CartPage, CheckoutPage */}
    </Stack.Navigator>
  );
}
