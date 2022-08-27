import { Pressable, StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import { update, error } from "../../Redux/feature/Position";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const styles = StyleSheet.create({
    container: {
      width: show ? 200 : 50,
      height: 50,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1,
      borderRadius: 50,
      paddingHorizontal: 10,
      borderColor: "rgb(12,139,227)",
      top: "40%",
      right: 10,
      position: "absolute",
      overflow: "hidden",
    },
  });

  function change(e) {
    dispatch(error({ message: "huhuhu" }));
  }
  return (
    <View style={[styles.container]}>
      <Pressable onPress={() => setShow(!show)}>
        <Ionicons
          style={{ width: 40, marginRight: show ? 20 : -10 }}
          name={"search-outline"}
          size={30}
          color={"white"}
        />
      </Pressable>
      <TextInput
        autoCorrect={true}
        style={{ display: show ? "flex" : "none", color: "white", width: 100 }}
        textAlign="center"
        placeholder="Search city"
        onSubmitEditing={change}
      />
    </View>
  );
};

export default React.memo(SearchBar);
