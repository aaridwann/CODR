import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import moment from "moment/moment";

const ListItems = ({ time, weather, icon, tempMax, tempMin }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.day}>{moment(time).format("ddd")}</Text>

      <View style={styles.icon}>
        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: `http://openweathermap.org/img/wn/${icon}@2x.png` }}
        />
        <Text style={styles.cuaca}>{weather}</Text>
      </View>

      <View style={styles.icon}>
        <Text style={{ color: "#9ebdf7", fontSize: 23, fontWeight: "bold" }}>
          {tempMin}&deg; /{" "}
        </Text>
        <Text style={{ color: "#9ebdf7", fontSize: 14 }}>{tempMax}&deg;</Text>
      </View>
    </View>
  );
};

export default React.memo(ListItems);

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
