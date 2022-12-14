import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import moment from "moment";

const ColB = ({ icon, city, weather, suhu }) => {
  return (
    <View style={styles.col}>
      <Image
        style={{
          width: 300,
          height: 300,
          marginTop: -80,
          marginLeft: -50,
          marginBottom: -70,
        }}
        source={{ uri: `http://openweathermap.org/img/wn/${icon}@4x.png` }}
      />
      <Text style={styles.city}>{city}</Text>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.suhu}>{suhu}&deg;</Text>
        <Text style={{ color: "white", fontSize: 20, top: 10 }}>C</Text>
      </View>
      <Text style={styles.cuaca}>{weather}</Text>
      <Text style={styles.cuaca}>
        {moment(Date.now()).format("DD MMM YY, HH:mm ")}
      </Text>
      {/* <Text style={styles.cuaca}>10:00</Text> */}
    </View>
  );
};

export default React.memo(ColB);

const styles = StyleSheet.create({
  col: {
    paddingLeft: 8,
    justifyContent: "flex-start",
  },
  city: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  cuaca: {
    fontSize: 13,
    color: "white",
    fontWeight: "bold",
  },
  suhu: {
    color: "white",
    fontWeight: "bold",
    fontSize: 50,
  },
});
