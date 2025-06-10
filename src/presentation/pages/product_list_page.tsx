import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

import { ProductEntity } from "../../domain/entity/product_entity";
import ProductCard from "../components/product_card";
import { RootStackParamList } from "../navigation/types";
import { AppRoute } from "../../constants/constant";
import { Appbar } from "react-native-paper";

type ProductListPageNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "ProductListPage"
>;
const CATEGORIES = ["Semua", "Laptop", "Handphone", "Elektronik"];

export default function ProductListPage() {
  const [products, setProducts] = useState<ProductEntity[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductEntity[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");

  const navigation = useNavigation<ProductListPageNavigationProp>();

  useEffect(() => {
    const dummyProducts: ProductEntity[] = [
       {
        id: 1,
        name: "Laptop ASUS ROG",
        price: 25000000,
        image: "https://via.placeholder.com/300",
        description: "Laptop gaming dengan spesifikasi tinggi",
        categories: ["Laptop", "Elektronik"],
      },
      {
        id: 2,
        name: "iPhone 14 Pro Max",
        price: 21000000,
        image: "https://via.placeholder.com/300",
        description: "Smartphone premium dari Apple",
        categories: ["Handphone", "Elektronik"],
      },
      {
        id: 3,
        name: "Phone 16 Pro Max",
        price: 21000000,
        image: "https://via.placeholder.com/300",
        description: "Smartphone premium dari Apple",
        categories: ["Laptop", "Elektronik"],
      },
      {
        id: 4,
        name: "Ipad 8 Pro",
        price: 10000000,
        image: "https://via.placeholder.com/300",
        description: "Smartphone premium dari Apple",
        categories: ["Ipad", "Elektronik"],
      },
    ];
    setProducts(dummyProducts);
    setFilteredProducts(dummyProducts);
  }, []);

  const filterByCategory = (category: string) => {
    setSelectedCategory(category);
    if (category === "Semua") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((item) =>
        item.categories.includes(category)
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <>
    <Appbar.Header>
        <Appbar.Content title="Produk Elektronik" />
        <Appbar.Action icon="shopping-cart" onPress={() => navigation.navigate(AppRoute.CART_PAGE as never)} />
          <Appbar.Action icon="magnify" onPress={() => {}} />
      </Appbar.Header>
    <SafeAreaView style={styles.container}>
      {/* Filter Category */}
      <View style={styles.filterContainer}>
        {CATEGORIES.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.filterButton,
              selectedCategory === category && styles.activeButton,
            ]}
            onPress={() => filterByCategory(category)}
          >
            <Text
              style={[
                styles.filterText,
                selectedCategory === category && styles.activeText,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* List Product */}
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() =>
              navigation.navigate("ProductDetailPage", { product: item })
            }
          />
        )}
      />
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 16,
  },
  filterContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 10,
  },
  filterButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    marginBottom: 8,
    borderRadius: 20,
    backgroundColor: "#ddd",
  },
  filterText: {
    fontSize: 14,
  },
  activeButton: {
    backgroundColor: "#007bff",
  },
  activeText: {
    color: "white",
    fontWeight: "bold",
  },
});