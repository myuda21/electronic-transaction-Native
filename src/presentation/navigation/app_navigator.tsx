// src/presentation/navigation/AppNavigator.tsx
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProductListPage from "../pages/product_list_page";
import CartPage from "../pages/cart_page";
import ProductDetailPage from "../pages/product_detail_page";
import { AppRoute } from "../../constants/constant";

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name= {AppRoute.PRODUCT_LIST} component={ProductListPage} options={{ title: "Produk Elektronik" }} />
            <Stack.Screen name={AppRoute.PRODUCT_DETAIL_PAGE} component={ProductDetailPage} />
            <Stack.Screen name={AppRoute.CART_PAGE} component={CartPage} />
            {/* Tambah: CheckoutPage */}
        </Stack.Navigator>
    );
}
