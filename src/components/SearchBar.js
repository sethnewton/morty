import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ keyword, onKeywordChange, onKeywordSubmit }) => {
  return (
    <View style={styles.background}>
      <Feather style={styles.icon} name="search" />
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={keyword}
        onChangeText={(newKeyword) => onKeywordChange(newKeyword)}
        autoCapitalize="none"
        autoCorrect={false}
        onSubmitEditing={() => {
          onKeywordSubmit();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#eee",
    height: 50,
    borderRadius: 3,
    marginHorizontal: 15,
    borderWidth: 1,
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 10,
  },
  input: {
    fontSize: 20,
    flex: 1,
  },
  icon: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;
