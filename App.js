import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import { Card } from "./components";

export default function App() {
  const [paciente, setPaciente] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPaciente = async () => {
    const response = await fetch(
      "https://0q27loouph.execute-api.us-east-1.amazonaws.com"
    );
    const json = await response.json();
    setPaciente(json);
    setLoading(false);
  };

  useEffect(() => {
    fetchPaciente();
  }, []);

  return (
    <View style={styles.container}>
      <Card paciente={paciente} />
      <Button
        style={styles.button}
        title="Refresh"
        onPress={() => fetchPaciente()}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282c34",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    paddingBottom: 15,
  },
});
