import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ColA = ({ wind, humidity, cod }) => {
  return (
    <View style={styles.container}>
      <View style={styles.col}>
        <Image
          style={{ width: 30, height: 30, resizeMode: "center" }}
          source={require("../../../assets/wind.png")}
        />
        <Text style={styles.data}>{wind}Km/h</Text>
        <Text style={styles.desc}>Wind</Text>
      </View>
      <View style={styles.col}>
        <Image
          style={{ width: 40, height: 40, resizeMode: "center" }}
          source={require("../../../assets/humidity.png")}
        />
        <Text style={styles.data}>{humidity}%</Text>
        <Text style={styles.desc}>Humidity</Text>
      </View>
      <View style={styles.col}>
        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: "http://openweathermap.org/img/wn/10d@2x.png" }}
        />
        <Text style={styles.data}>9Km/h</Text>
        <Text style={styles.desc}>Wind</Text>
      </View>
    </View>
  );
};

export default React.memo(ColA);

const styles = StyleSheet.create({
  container: {
    width: "30%",
    paddingRight: 10,
    borderRightWidth: 1,
    borderTopRightRadius: 20,
    borderBottomEndRadius: 20,
    borderColor: "white",
  },
  data: {
    color: "white",
    fontWeight: "500",
  },
  desc: {
    color: "white",
    fontWeight: "200",
    fontSize: 13,
  },
  col: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  icon: {
    widh: 50,
    height: 50,
  },
});
