// src/presentation/pages/ProductListPage.tsx
import React, { useEffect, useState } from "react";
import { View, FlatList, SafeAreaView } from "react-native";
import { ProductEntity } from "../../domain/entity/product_entity";
import ProductCard from "../components/product_card";

export default function ProductListPage() {
  const [products, setProducts] = useState<ProductEntity[]>([]);

  useEffect(() => {
    // Simulasi fetch produk (nanti diganti pakai usecase)
    setProducts([
      {
        id: 1,
        name: "Laptop ASUS ROG",
        price: 25000000,
        image: "https://via.placeholder.com/300",
        description: "Laptop gaming dengan spesifikasi tinggi",
      },
      {
        id: 2,
        name: "iPhone 14 Pro Max",
        price: 21000000,
        image: "https://via.placeholder.com/300",
        description: "Smartphone premium dari Apple",
      },
    ]);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f5f5", padding: 16 }}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => console.log("Goto detail")}
          />
        )}
      />
    </SafeAreaView>
  );
}
