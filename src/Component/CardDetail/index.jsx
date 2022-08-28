import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const CardDetail = ({
  city,
  icon,
  suhu,
  cuaca,
  wind,
  humidity,
  cloud,
  date,
}) => {
  return (
    // <View style={styles.con2}>
    <View style={styles.con}>
      {/*=== 1 === */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{
            width: 30,
            height: 30,
            resizeMode: "center",
          }}
          source={require("../../../assets/path.png")}
        />
        <Text style={{ color: "white", fontWeight: "bold" }}>{city}</Text>
      </View>

      {/* === ICON === */}
      <Image
        style={{
          width: "60%",
          height: "60%",
          marginTop: -60,
          marginBottom: -80,
          resizeMode: "cover",
        }}
        source={{ uri: `http://openweathermap.org/img/wn/${icon}@4x.png` }}
      />
      {/* === SUHU === */}
      <Text style={styles.suhu}>{suhu.toString().slice(0, 2)}&deg;</Text>
      {/* === Cuaca === */}
      <Text style={styles.cuaca}>{cuaca}</Text>
      {/* === Date === */}
      <Text style={styles.date}>{date}</Text>

      {/* === Bottom === */}
      <View
        style={{
          flexDirection: "row",
          borderTopWidth: 1,
          borderColor: "white",
          width: "90%",
          justifyContent: "space-around",
          marginTop: 10,
          padding: 5,
          paddingTop: 10,
        }}
      >
        {/* === wind === */}
        <View
          style={{
            justifyContent: "flex-start",
            alignItems: "center",
            width: 80,
          }}
        >
          <Image
            style={{
              width: "60%",
              height: "23%",
              marginBottom: 10,
              resizeMode: "center",
            }}
            source={require("../../../assets/wind.png")}
          />
          <Text style={{ color: "white", fontWeight: "800" }}>{wind} Km/h</Text>
          <Text style={{ color: "white", fontWeight: "400" }}>Wind</Text>
        </View>
        {/* === Humidity === */}
        <View
          style={{
            justifyContent: "flex-start",
            alignItems: "center",
            width: 80,
          }}
        >
          <Image
            style={{
              width: "60%",
              height: "23%",
              marginBottom: 10,
              resizeMode: "center",
            }}
            source={require("../../../assets/humidity.png")}
          />
          <Text style={{ color: "white", fontWeight: "800" }}>
            {humidity} %
          </Text>
          <Text style={{ color: "white", fontWeight: "400" }}>Humidity</Text>
        </View>
        {/* === Cloud ==== */}
        <View
          style={{
            justifyContent: "flex-start",
            alignItems: "center",
            width: 80,
          }}
        >
          <Image
            style={{
              width: "60%",
              height: "23%",
              marginBottom: 10,
              resizeMode: "center",
            }}
            source={require("../../../assets/cliud.png")}
          />
          <Text style={{ color: "white", fontWeight: "800" }}>{cloud}%</Text>
          <Text style={{ color: "white", fontWeight: "400" }}>Cloudness</Text>
        </View>
      </View>
    </View>
    // </View>
  );
};

export default React.memo(CardDetail);

const styles = StyleSheet.create({
  con2: {
    width: "100%",
    height: "80%",
    opacity: 0.4,
    backgroundColor: "#4f9adb",
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,
    elevation: 23,
  },
  con: {
    width: "100%",
    // height: "75%",
    flex: 1,
    backgroundColor: "#5aabf2",
    borderBottomRightRadius: 90,
    borderBottomLeftRadius: 90,
    paddingVertical: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,
    elevation: 23,
  },
  suhu: {
    fontSize: 70,
    color: "white",
    fontWeight: "bold",
  },
  cuaca: {
    marginTop: -10,
    fontSize: 40,
    color: "white",
  },
  date: {
    // marginTop:-30,
    fontSize: 20,
    color: "white",
  },
});
