// import React from "react";
// import { View, Text, FlatList, Button, StyleSheet, Alert } from "react-native";
// import { useCart } from "../../context/cart_context";

// export default function CartPage() {
//   const { cartItems, clearCart } = useCart();

//   const total = cartItems.reduce((sum, item) => sum + item.price, 0);

//   const handleCheckout = () => {
//     if (cartItems.length === 0) {
//       Alert.alert("Keranjang kosong", "Silakan tambahkan produk dulu.");
//       return;
//     }
//     Alert.alert("Berhasil Checkout", `Total belanja: Rp ${total.toLocaleString()}`);
//     clearCart(); // kosongkan keranjang
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Keranjang Belanja</Text>
//       {cartItems.length === 0 ? (
//         <Text>Keranjang masih kosong.</Text>
//       ) : (
//         <>
//           <FlatList
//             data={cartItems}
//             keyExtractor={(item, index) => `${item.id}-${index}`}
//             renderItem={({ item }) => (
//               <View style={styles.item}>
//                 <Text style={styles.name}>{item.name}</Text>
//                 <Text style={styles.price}>Rp {item.price.toLocaleString()}</Text>
//               </View>
//             )}
//           />
//           <Text style={styles.total}>Total: Rp {total.toLocaleString()}</Text>
//           <Button title="Checkout" onPress={handleCheckout} />
//         </>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16 },
//   title: { fontSize: 20, fontWeight: "bold", marginBottom: 16 },
//   item: { borderBottomWidth: 1, borderColor: "#ccc", paddingVertical: 8 },
//   name: { fontSize: 16 },
//   price: { color: "#888" },
//   total: { fontSize: 18, fontWeight: "bold", marginVertical: 16 },
// });

// src/presentation/pages/cart_page.tsx
import React from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet, FlatList, Alert } from "react-native";
import { useCart } from "../../context/cart_context";

const CartPage = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, getTotalPrice, clearCart } = useCart();

  const handleCheckout = () => {
    Alert.alert("Checkout", `Total belanja: Rp${getTotalPrice().toLocaleString()}`, [
      { text: "OK" },
    ]);
    clearCart();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Keranjang</Text>

      {cartItems.length === 0 ? (
        <Text>Keranjang kosong.</Text>
      ) : (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text>Harga Satuan: Rp{item.price.toLocaleString()}</Text>

                <View style={styles.quantityContainer}>
                  <TouchableOpacity onPress={() => decreaseQuantity(item)} style={styles.button}>
                    <Text style={styles.buttonText}>-</Text>
                  </TouchableOpacity>

                  <Text style={styles.quantityText}>{item.quantity}</Text>

                  <TouchableOpacity onPress={() => increaseQuantity(item)} style={styles.button}>
                    <Text style={styles.buttonText}>+</Text>
                  </TouchableOpacity>
                </View>

                <Text>Total: Rp{(item.price * item.quantity).toLocaleString()}</Text>
              </View>
            )}
          />

          <Text style={styles.totalText}>Total Belanja: Rp{getTotalPrice().toLocaleString()}</Text>
          <View style={styles.buttonSpacing}>
            <Button title="Kosongkan Keranjang" onPress={clearCart} color="#e74c3c" />
          </View>
          <Button title="Checkout" onPress={handleCheckout} color="#27ae60" />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  itemContainer: {
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 8,
  },
  itemName: { fontWeight: "bold", fontSize: 16 },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  button: {
    backgroundColor: "#ddd",
    padding: 8,
    borderRadius: 4,
  },
  buttonText: { fontSize: 18 },
  quantityText: { marginHorizontal: 12, fontSize: 16 },
  totalText: { fontSize: 18, fontWeight: "bold", marginTop: 20 },
  buttonSpacing: { marginVertical: 10 },
});

export default CartPage;