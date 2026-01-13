import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Grocery } from "../types/Grocery";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import EditGroceryModal from "./EditGroceryModal";

export default function GroceryItem({
  item,
  setItems,
}: {
  item: Grocery;
  setItems: React.Dispatch<React.SetStateAction<Grocery[]>>;
}) {
  const [editVisible, setEditVisible] = useState(false);

  const toggleComplete = () => {
    setItems(prev =>
      prev.map(i =>
        i.id === item.id ? { ...i, completed: !i.completed } : i
      )
    );
  };

  const remove = () => {
    setItems(prev => prev.filter(i => i.id !== item.id));
  };

  const saveEdit = (updated: Grocery) => {
    setItems(prev =>
      prev.map(i => (i.id === updated.id ? updated : i))
    );
  };

  return (
    <>
      <View style={styles.card}>
        {/* Left section */}
        <TouchableOpacity
          style={styles.left}
          onPress={toggleComplete}
          activeOpacity={0.7}
        >
          <Ionicons
            name={item.completed ? "checkmark-circle" : "ellipse-outline"}
            size={22}
            color={item.completed ? "#22c55e" : "#cbd5e1"}
          />

          <View>
            <Text style={[styles.name, item.completed && styles.done]}>
              {item.name}
            </Text>
            <Text style={styles.meta}>
              Qty: {item.qty} ·{" "}
              <Text style={styles.price}>
                R{(item.qty * item.price).toFixed(2)}
              </Text>
            </Text>
          </View>
        </TouchableOpacity>

        {/* Right actions */}
        <View style={styles.actions}>
          <TouchableOpacity onPress={() => setEditVisible(true)}>
            <Ionicons name="pencil" size={18} color="#64748b" />
          </TouchableOpacity>

          <TouchableOpacity onPress={remove}>
            <Ionicons name="trash-outline" size={18} color="#ef4444" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Edit Modal */}
      <EditGroceryModal
        visible={editVisible}
        item={item}
        onClose={() => setEditVisible(false)}
        onSave={saveEdit}
      />
    </>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 6,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flex: 1,
  },

  name: {
    fontSize: 15,
    fontWeight: "600",
  },

  meta: {
    fontSize: 12,
    color: "#64748b",
    marginTop: 2,
  },

  price: {
    color: "#FF1493",
    fontWeight: "800",
    fontStyle:"italic",
  },

  actions: {
    flexDirection: "row",
    gap: 12,
  },

  done: {
    textDecorationLine: "line-through",
    color: "#94a3b8",
  },
});
