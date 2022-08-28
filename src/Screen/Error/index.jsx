import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import SaveScreen from "../../Utils/SafeArea";

const ErrorScreen = () => {
  const { coords, message } = useSelector((state) => state.position);
  return (
    <SaveScreen>
      <View style={styles.con}>
        <Text style={{ fontSize: 20, color: "white" }}>{message}</Text>
        <Text style={{ fontSize: 15, color: "white" }}>
          Please check your gps or connection
        </Text>
      </View>
    </SaveScreen>
  );
};

export default ErrorScreen;

const styles = StyleSheet.create({
  con: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
