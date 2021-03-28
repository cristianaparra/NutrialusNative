import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default ({ paciente }) => {
  const { name, email, phone, image } = paciente;

  const imageUrl = image ;
  return (
    <>
      <View>
        <Image
          style={styles.stretch}
          key={image}
          source={{
            uri: image,
            cache: 'reload'
          }}
        />
      </View>
      <View style={styles.item}>
        <View style={styles.list}>
          <Text>
            Nombre : <Text style={styles.dato}>{name}</Text>
          </Text>
        </View>
        <View style={styles.list}>
          <Text>
            Email : <Text style={styles.dato}>{email}</Text>
          </Text>
        </View>
        <View style={styles.list}>
          <Text>
            Phone : <Text style={styles.dato}>{phone}</Text>
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  dato: {
    color: "#fff",
    fontSize: 15,
  },
  list: {
    padding: 5,
    color: "#fff",
  },
  item: {
    backgroundColor: "#008CBA",
    borderWidth: 2,
    borderColor: "#fff",
    height: 120,
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 30,
  },
  stretch: {
    marginBottom: 15,
    width: 200,
    height: 200,
    resizeMode: "stretch",
  },
});
