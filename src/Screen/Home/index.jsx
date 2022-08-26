import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CardMain from "../../Component/CardMain/CardMain";
import SaveScreen from "../../Utils/SafeArea";
import ListComponent from "../../Component/List";
import SearchBar from "../../Component/SearchBar";

const HomeScreen = () => {
  return (
    <SaveScreen style={styles.container}>
      <CardMain />
      <ListComponent />
      <SearchBar/>
    </SaveScreen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#011a33",
    justifyContent: "center",
    alignItems: "center",
  },
});
