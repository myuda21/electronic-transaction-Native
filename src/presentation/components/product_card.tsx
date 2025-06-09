// src/presentation/components/ProductCard.tsx
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { ProductEntity } from "../../domain/entity/product_entity";

type Props = {
  product: ProductEntity;
  onPress: () => void;
};

export default function ProductCard({ product, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>Rp {product.price.toLocaleString()}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { padding: 10, backgroundColor: "#fff", borderRadius: 8, marginBottom: 12 },
  image: { width: "100%", height: 150, borderRadius: 8 },
  name: { fontSize: 16, fontWeight: "600", marginTop: 8 },
  price: { fontSize: 14, color: "#888" },
});
