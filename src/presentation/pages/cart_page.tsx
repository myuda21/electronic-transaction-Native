import React from "react";
import { View, Text, FlatList, Button, StyleSheet, Alert } from "react-native";
import { useCart } from "../../context/cart_context";

export default function CartPage() {
  const { cartItems, clearCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      Alert.alert("Keranjang kosong", "Silakan tambahkan produk dulu.");
      return;
    }
    Alert.alert("Berhasil Checkout", `Total belanja: Rp ${total.toLocaleString()}`);
    clearCart(); // kosongkan keranjang
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Keranjang Belanja</Text>
      {cartItems.length === 0 ? (
        <Text>Keranjang masih kosong.</Text>
      ) : (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item, index) => `${item.id}-${index}`}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>Rp {item.price.toLocaleString()}</Text>
              </View>
            )}
          />
          <Text style={styles.total}>Total: Rp {total.toLocaleString()}</Text>
          <Button title="Checkout" onPress={handleCheckout} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 16 },
  item: { borderBottomWidth: 1, borderColor: "#ccc", paddingVertical: 8 },
  name: { fontSize: 16 },
  price: { color: "#888" },
  total: { fontSize: 18, fontWeight: "bold", marginVertical: 16 },
});
