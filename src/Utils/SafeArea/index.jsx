import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SaveScreen = ({ children }) => {
  return (
    <LinearGradient
      colors={["rgba(0,94,158,1)", "rgba(0,2,5,1) 84%"]}
      style={styles.container}
    >
      {children}
    </LinearGradient>
  );
};

export default SaveScreen;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    // flex: 1,
    backgroundColor: "#011a33",
  },
  // background: {
  //   position: "absolute",
  //   left: 0,
  //   right: 0,
  //   top: 0,
  //   height: 300,
  // },
});
