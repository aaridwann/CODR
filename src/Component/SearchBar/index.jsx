import { Pressable, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const SearchBar = () => {
  const [show, setShow] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setShow(!show)}>
        <Ionicons name={"search-outline"} size={30} color={"white"} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 1,
    borderColor: "rgb(12,139,227)",
    top: "40%",
    // borderRadius:'50%',
    right: 10,
    position: "absolute",
  },
});

export default SearchBar;
