import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const CharacterDetailScreen = ({ navigation }) => {
  const item = navigation.getParam("item");

  console.log("SETHWUZHERE: resultsShowScreen:" + item.image);

  return (
    <ScrollView>
      <View style={styles.outer}>
        <Image style={styles.image} source={{ uri: item.image }} />
        <View style={styles.internal}>
          <Text style={styles.header}>{item.name}</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.label}>Species</Text>
            <Text style={styles.label}>Status</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.value}>
              {item.species}
              {item.type ? " (" + item.type + ")" : ""}
            </Text>
            <Text style={styles.value}>{item.status}</Text>
          </View>
          <View>
            <Text> </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.label}>Location</Text>
            <Text style={styles.label}>Gender</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.value}>{item.location.name}</Text>
            <Text style={styles.value}>{item.gender}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.header}>About</Text>
          <Text style={{ marginHorizontal: 20, color: "#333" }}>
            Nunc quis tellus suscipit, luctus ex vel, condimentum lorem.
            Praesent sit amet rhoncus lacus, quis sagittis massa. Phasellus
            sollicitudin pulvinar mi, eget facilisis nunc dapibus quis. In ut
            molestie elit. Sed turpis nibh, convallis vitae magna sit amet,
            accumsan iaculis tortor. Nulla facilisi. Donec venenatis ligula
            tortor, id varius eros porttitor blandit. Suspendisse sit amet
            vehicula nisl. In lacinia, tellus ut consequat consectetur, magna
            diam pellentesque metus, ac interdum nisi urna eget enim. Vivamus et
            auctor odio. Duis dictum, mauris et porta varius, nisi metus luctus
            diam, ut porta velit massa at leo. Vivamus egestas feugiat elit eget
            consectetur.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ipsum: {},
  value: {
    width: "50%",
    marginLeft: 20,
    fontSize: 20,
  },
  image: {
    height: "80%",
    width: "100%",
  },
  label: {
    width: "50%",
    marginLeft: 20,
    fontSize: 15,
    color: "#888",
  },
  header: {
    margin: 20,
    fontSize: 33,
  },
  outer: {
    height: "100%",
    backgroundColor: "#eee",
  },
  internal: {
    marginHorizontal: 20,
    height: 240,
    paddingBottom: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "white",
    marginTop: -50,
  },
});

export default CharacterDetailScreen;
