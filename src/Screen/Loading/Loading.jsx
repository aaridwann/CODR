import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";

const LoadingScreen = () => {
  return (
    <View style={styles.cont}>
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
