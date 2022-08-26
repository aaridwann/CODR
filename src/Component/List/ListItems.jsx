import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ListItems = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.day}>Mon</Text>

      <View style={styles.icon}>
        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: "http://openweathermap.org/img/wn/10d@2x.png" }}
        />
        <Text style={styles.cuaca}>Rainy</Text>
      </View>

      <View style={styles.icon}>
        <Text style={{ color: "#9ebdf7", fontSize: 23, fontWeight: "bold" }}>
          90&deg; /{" "}
        </Text>
        <Text style={{ color: "#9ebdf7", fontSize: 14 }}>40&deg;</Text>
      </View>
    </View>
  );
};

export default ListItems;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 80,
    marginBottom: 5,
    // backgroundColor: "white",
    borderBottomWidth: 1,
    borderColor: "#81a3d4",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  day: {
    color: "#9ebdf7",
    fontSize: 20,
    fontWeight: "bold",
  },
  cuaca: {
    color: "#9ebdf7",
    fontSize: 15,
    fontWeight: "300",
  },
});
