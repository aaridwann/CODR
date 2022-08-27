import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const Settings = () => {
  const { coords } = useSelector((state) => state.position);
  const { latitude, longitude } = coords;
  return (
    <View>
      <Text>{latitude}</Text>
      <Text>{longitude}</Text>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
