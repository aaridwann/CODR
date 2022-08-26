import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ColB = () => {
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
        source={{ uri: "http://openweathermap.org/img/wn/10d@4x.png" }}
      />
      <Text style={styles.city}>Serang city</Text>
      <View style={{flexDirection:'row'}}><Text style={styles.suhu}>90&deg;</Text><Text style={{ color:'white',fontSize:20, top:10,}}>C</Text></View>
      <Text style={styles.cuaca}>Cloudy</Text>
    </View>
  );
};

export default ColB;

const styles = StyleSheet.create({
  col: {
    paddingLeft:8,
    justifyContent: "flex-start",
  },
  city:{
    fontSize:20,
    color:'white',
    fontWeight:'bold'
  },
  cuaca:{
    fontSize:13,
    color:'white',
    fontWeight:'bold'
  },
  suhu:{
    color:'white',
    fontWeight:'bold',
    fontSize:50
  }
});
