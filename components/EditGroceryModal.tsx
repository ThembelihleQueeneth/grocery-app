import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from "react-native";
import { useState, useEffect } from "react";
import { Grocery } from "../types/Grocery";


type Props = {
  visible: boolean;
  item: Grocery | null;
  onClose: () => void;
  onSave: (updated: Grocery) => void;
};

export default function EditGroceryModal({
  visible,
  item,
  onClose,
  onSave,
}: Props) {
  const [name, setName] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (item) {
      setName(item.name);
      setQty(item.qty.toString());
      setPrice(item.price.toString());
    }
  }, [item]);

  if (!item) return null;

  const save = () => {
    onSave({
      ...item,
      name,
      qty: Number(qty),
      price: Number(price),
    });
    onClose();
  };

  return (
    <Modal transparent animationType="fade" visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.title}>Edit Item</Text>

          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Item name"
          />

          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={qty}
            onChangeText={setQty}
            placeholder="Quantity"
          />

          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={price}
            onChangeText={setPrice}
            placeholder="Price (R)"
          />

          <View style={styles.actions}>
            <TouchableOpacity
              style={[styles.btn, styles.cancel]}
              onPress={onClose}
            >
              <Text>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.btn, styles.save]}
              onPress={save}
            >
              <Text style={{ color: "#fff" }}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },

  modal: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    width: "85%",
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
    justifyContent:'center',
    alignItems:'center'
  },

  input: {
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },

  actions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
    marginTop: 10,
  },

  btn: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
  },

  cancel: {
    backgroundColor: "#e5e7eb",
  },

  save: {
    backgroundColor: "#FF1493",
  },
});

