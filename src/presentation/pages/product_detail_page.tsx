import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ProductEntity } from "../../domain/entity/product_entity";
import { useCart } from "../../context/cart_context";
import { AppRoute } from "../../constants/constant";

export default function ProductDetailPage() {
  const navigation = useNavigation();
  const route = useRoute();
  const { product } = route.params as { product: ProductEntity };
  const { addToCart } = useCart();

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>Rp {product.price.toLocaleString()}</Text>
      <Text style={styles.description}>{product.description}</Text>

      <Button
        title="Beli Langsung"
        onPress={() => {
          addToCart(product);
          navigation.navigate(AppRoute.CART_PAGE as never);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  image: { width: "100%", height: 200, borderRadius: 8 },
  name: { fontSize: 20, fontWeight: "bold", marginVertical: 8 },
  price: { fontSize: 18, color: "#888" },
  description: { fontSize: 16, marginTop: 12 },
});

