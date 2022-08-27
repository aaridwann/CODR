import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import wind from '../../../assets/wind.png'

const CardDetail = () => {
  return (
    // <View style={styles.con2}>
    <View style={styles.con}>
      {/*=== 1 === */}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Ionicons name="globe" size={40} color={"white"} />
        <Text style={{color:'white',marginLeft:10, fontWeight:'bold'}}>Serang</Text>
      </View>

      {/* === ICON === */}
      <Image
        style={{
          width: "70%",
          height: "70%",
          marginTop: -100,
          marginBottom: -140,
        }}
        source={{ uri: "http://openweathermap.org/img/wn/10d@4x.png" }}
      />
      {/* === SUHU === */}
      <Text style={styles.suhu}>90&deg;</Text>
      {/* === Cuaca === */}
      <Text style={styles.cuaca}>Cloudy</Text>
      {/* === Date === */}
      <Text style={styles.date}>Senin,20 Oktober 2022</Text>

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
          paddingTop:10
        }}
      >
        <View style={{ justifyContent: "flex-start", alignItems: "center", width:80}}>
          <Image
            style={{
              width: '60%',
              height: '23%',
              marginBottom:10,
            }}
            source={
                require('../../../assets/wind.png')
            }
          />
          <Text style={{color:'white', fontWeight:'800'}}>13 Km/h</Text>
          <Text style={{color:'white', fontWeight:'400'}}>Wind</Text>
        </View>

        <View style={{ justifyContent: "flex-start", alignItems: "center", width:80}}>
          <Image
            style={{
              width: '60%',
              height: '23%',
              marginBottom:10,
            }}
            source={
                require('../../../assets/wind.png')
            }
          />
          <Text style={{color:'white', fontWeight:'800'}}>13 Km/h</Text>
          <Text style={{color:'white', fontWeight:'400'}}>Wind</Text>
        </View>

        <View style={{ justifyContent: "flex-start", alignItems: "center", width:80}}>
          <Image
            style={{
              width: '60%',
              height: '23%',
              marginBottom:10,
            }}
            source={
                require('../../../assets/wind.png')
            }
          />
          <Text style={{color:'white', fontWeight:'800'}}>13 Km/h</Text>
          <Text style={{color:'white', fontWeight:'400'}}>Wind</Text>
        </View>


      </View>
    </View>
    // </View>
  );
};

export default CardDetail;

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
    height: "80%",
    backgroundColor: "#5aabf2",
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
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
    fontSize: 140,
    color: "white",
    fontWeight: "bold",
  },
  cuaca: {
    marginTop: -30,
    fontSize: 40,
    color: "white",
  },
  date: {
    // marginTop:-30,
    fontSize: 20,
    color: "white",
  },
});
