import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const Character = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image }} />
      <Text style={styles.name}>{result.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    marginBottom: 3,
    width: 340,
    height: 120,
    borderRadius: 5,
  },
  name: {
    fontWeight: "bold",
    marginBottom: 12,
  },
});

export default Character;
