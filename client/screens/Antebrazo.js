import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Antebrazo = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        SELECCIONA EL MUSCULO DEL ANTEBRAZO QUE DESEAS ENTRENAR
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("musculo", { itemID: 15 })}
      >
        <Text style={styles.buttonText}>Flexores del Antebrazo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("musculo", { itemID: 16 })}
      >
        <Text style={styles.buttonText}>Extensores del Antebrazo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("musculo", { itemID: 17 })}
      >
        <Text style={styles.buttonText}>Braquiorradial</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#416C7C",
  },
  title: {
    color: "#ffffff",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 35,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 20,
    textAlign: "center",
    padding: 10,
  },
});
export default Antebrazo;
