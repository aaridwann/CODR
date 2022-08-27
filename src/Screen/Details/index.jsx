import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SaveScreen from "../../Utils/SafeArea";
import CardDetail from "../../Component/CardDetail";
import CardItem from "../../Component/CardItem";

const DetailScreen = () => {
  return (
    <SaveScreen>
      <CardDetail />
      <View
        style={{
          marginTop: 8,
          flexDirection: "row",
          overflow: "scroll",
          justifyContent: "space-evenly",
        }}
      >
        <CardItem />
        <CardItem />
        <CardItem />
      </View>
    </SaveScreen>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
