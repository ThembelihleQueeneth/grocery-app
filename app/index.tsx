import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { useState } from "react";
import { Grocery } from "../types/Grocery";
import GroceryItem from "../components/GroceryItem";
import FilterButtons from "../components/FilterButtons";
import { Ionicons } from "@expo/vector-icons";

export default function Index() {
  const [name, setName] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");
  const [items, setItems] = useState<Grocery[]>([]);
  const [filter, setFilter] =
    useState<"all" | "active" | "completed">("all");

  const addItem = () => {
    if (!name || !qty || !price) return;

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
    setQty("");
    setPrice("");
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

  const completedCount = items.filter(i => i.completed).length;

  return (
    <View style={styles.container}>
      {/* Header Card */}
      <View style={styles.headerCard}>
        <View style={styles.headerLeft}>
          <View style={styles.iconBox}>
            <Ionicons name="cart" size={20} color="#fff" />
          </View>
          <View>
            <Text style={styles.headerTitle}>Grocery List</Text>
            <Text style={styles.headerSubtitle}>
              Organize your shopping efficiently
            </Text>
          </View>
        </View>

        <View style={styles.headerRight}>
          <Text style={styles.totalAmount}>R{grandTotal.toFixed(2)}</Text>
          <Text style={styles.completedText}>
            {completedCount}/{items.length} completed
          </Text>
        </View>
      </View>

      {/* Input Card */}
      <View style={styles.inputCard}>
        <TextInput
          placeholder="Item name"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          placeholder="Quantity"
          style={styles.input}
          keyboardType="numeric"
          value={qty}
          onChangeText={setQty}
        />
        <TextInput
          placeholder="Price (R)"
          style={styles.input}
          keyboardType="numeric"
          value={price}
          onChangeText={setPrice}
        />

        <TouchableOpacity style={styles.addBtn} onPress={addItem}>
          <Ionicons name="add" size={18} color="#fff" />
          <Text style={styles.addText}>Add</Text>
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
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff6f6",
    padding: 16,
  },

  headerCard: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },

  headerLeft: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },

  iconBox: {
    backgroundColor: "#FF1493",
    padding: 10,
    borderRadius: 20,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
  },

  headerSubtitle: {
    fontSize: 12,
    color: "#777",
  },

  headerRight: {
    alignItems: "flex-end",
  },

  totalAmount: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FF1493",
  },

  completedText: {
    fontSize: 12,
    color: "#777",
  },

  inputCard: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 14,
  },

  addBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "#FF1493",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
  },

  addText: {
    color: "#fff",
    fontWeight: "600",
  },
});
