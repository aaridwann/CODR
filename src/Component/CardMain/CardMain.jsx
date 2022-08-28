import { StyleSheet, View } from "react-native";
import React from "react";
import ColA from "./ColA";
import ColB from "./ColB";

const CardMain = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.col}>
        <ColA
          wind={data?.wind?.speed}
          humidity={data?.main?.humidity}
          cloud={data?.clouds?.all}
        />
        <ColB
          weather={data?.weather[0]?.description}
          city={data?.name}
          suhu={data?.main?.temp.toString().slice(0, 4)}
          icon={data?.weather[0]?.icon}
        />
      </View>
    </View>
  );
};

export default React.memo(CardMain);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(0,89,152)",
    padding: 20,
    borderBottomEndRadius: 800,
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 80,
  },
  col: {
    width: "100%",
    // backgroundColor:'green',
    marginLeft: -20,
    justifyContent: "flex-start",
    flexDirection: "row",
  },
});
