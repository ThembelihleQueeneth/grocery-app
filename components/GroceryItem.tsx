import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Grocery } from "../types/Grocery";

export default function GroceryItem({
  item,
  setItems,
}: {
  item: Grocery;
  setItems: React.Dispatch<React.SetStateAction<Grocery[]>>;
}) {
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

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={toggleComplete}>
        <Text style={item.completed && styles.done}>☐ {item.name}</Text>
        <Text>
          Qty: {item.qty} | Price: R{item.price.toFixed(2)} | Total: R
          {(item.qty * item.price).toFixed(2)}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={remove} style={styles.delete}>
        <Text style={{ color: "#fff" }}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 12,
    marginVertical: 6,
    borderRadius: 8,
  },
  delete: {
    backgroundColor: "#ef4444",
    padding: 6,
    borderRadius: 6,
    marginTop: 6,
    alignSelf: "flex-end",
  },
  done: { textDecorationLine: "line-through" },
});
