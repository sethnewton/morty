import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import Character from "./Character";

const CharacterList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null;
  }

  const characters = results.map((result) => (
    <TouchableOpacity
      key={result.id}
      onPress={() =>
        navigation.navigate("CharacterDetail", { id: result.id, item: result })
      }
    >
      <Character result={result} />
    </TouchableOpacity>
  ));
  /*
      NOTE: Leaving this here because I like this solution a bit more than the map,
      but instructions said to use map, so map it is!
      <FlatList
        data={results}
        numColumns="2"
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("CharacterDetail", { id: item.id, item: item })
              }
            >
              <Character result={item} />
            </TouchableOpacity>
          );
        }}
      />
*/
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View>{characters}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    flex: 1,
    flexDirection: "row",
  },
  title: {
    marginBottom: 5,
    fontSize: 18,
    marginLeft: 15,
    fontWeight: "bold",
  },
});

export default withNavigation(CharacterList);
