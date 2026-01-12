import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { useState } from "react";
import { Grocery } from "../types/Grocery";
import GroceryItem from "../components/GroceryItem";
import FilterButtons from "../components/FilterButtons";
import { Ionicons } from "@expo/vector-icons";

export default function Index() {
  const [name, setName] = useState("");
  const [qty, setQty] = useState("1");
  const [price, setPrice] = useState("0");
  const [items, setItems] = useState<Grocery[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const addItem = () => {
    if (!name) return;

    setItems(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        name,
        qty: Number(qty),
        price: Number(price),
        completed: false,
      },
    ]);

    setName("");
    setQty("1");
    setPrice("0");
  };

  const filteredItems = items.filter(item => {
    if (filter === "active") return !item.completed;
    if (filter === "completed") return item.completed;
    return true;
  });

  const grandTotal = items.reduce(
    (sum, item) => sum + item.qty * item.price,
    0
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Ionicons name="cart" size={24} /> Grocery List
      </Text>

      {/* Inputs */}
      <View style={styles.row}>
        <TextInput
          placeholder="Item name"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          placeholder="Enter qty"
          style={styles.inputSmall}
          keyboardType="numeric"
          value={qty}
          onChangeText={setQty}
        />
        <TextInput
          placeholder="Enter price"
          style={styles.inputSmall}
          keyboardType="numeric"
          value={price}
          onChangeText={setPrice}
        />
        <TouchableOpacity style={styles.addBtn} onPress={addItem}>
          <Text style={{ color: "#fff" }}>Add</Text>
        </TouchableOpacity>
      </View>

      {/* Filters */}
      <FilterButtons filter={filter} setFilter={setFilter} />

      {/* List */}
      <FlatList
        data={filteredItems}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <GroceryItem item={item} setItems={setItems} />
        )}
      />

      <Text style={styles.total}>Grand Total: R{grandTotal.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, backgroundColor: "#f5f6fa" },
  title: { fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  row: { flexDirection: "row", gap: 8 },
  input: { flex: 2, borderWidth: 1, padding: 8, borderRadius: 6 },
  inputSmall: { flex: 1, borderWidth: 1, padding: 8, borderRadius: 6 },
  addBtn: { backgroundColor: "#4f46e5", padding: 12, borderRadius: 6 },
  total: { fontWeight: "bold", textAlign: "right", marginTop: 10 },
});
