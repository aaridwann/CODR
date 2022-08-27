import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ListItems from "./ListItems";

const ListComponent = () => {
  return (
    <View style={styles.container}>
      
        <ListItems />
      {/* </ScrollView> */}
    </View>
  );
};

export default ListComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    width: "100%",
    // backgroundColor: "red",
    // justifyContent: "center",
    // alignItems: "center",
  },
});
