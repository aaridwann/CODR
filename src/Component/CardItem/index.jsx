import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const CardItem = ({ temp, icon, date }) => {
  return (
    <View style={styles.con}>
      <Text style={styles.suhu}>{temp}&deg;</Text>
      <Image
        style={{
          width: "70%",
          height: "70%",
          marginTop: -20,
          resizeMode: "cover",
          //   marginBottom: -140,
        }}
        source={{ uri: `http://openweathermap.org/img/wn/${icon}@4x.png` }}
      />
      <Text style={styles.time}>{date}</Text>
    </View>
  );
};

export default React.memo(CardItem);

const styles = StyleSheet.create({
  con: {
    width: 100,
    height: 120,
    // backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#5aabf2",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  suhu: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
  },
  time: {
    marginTop: -10,
    fontSize: 15,
    color: "white",
  },
});
