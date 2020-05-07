import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import CharacterList from "../components/CharacterList";

const SearchScreen = () => {
  const [keyword, setKeyword] = useState("");
  const [searchApi, results, error] = useResults();

  return (
    <View>
      <SearchBar
        keyword={keyword}
        onKeywordChange={setKeyword}
        onKeywordSubmit={() => searchApi(keyword)}
      />

      {error ? <Text>{error}</Text> : null}
      <ScrollView>
        <CharacterList results={results} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
