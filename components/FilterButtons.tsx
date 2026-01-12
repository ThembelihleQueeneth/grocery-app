import { View, TouchableOpacity, Text } from "react-native";

export default function FilterButtons({
  filter,
  setFilter,
}: {
  filter: string;
  setFilter: (f: any) => void;
}) {
  return (
    <View style={{ flexDirection: "row", gap: 8, marginVertical: 10 }}>
      {["all", "active", "completed"].map(f => (
        <TouchableOpacity
          key={f}
          onPress={() => setFilter(f)}
          style={{
            padding: 8,
            borderRadius: 6,
            backgroundColor: filter === f ? "#e5e7eb" : "#f3f4f6",
          }}
        >
          <Text>{f}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
