import { StyleSheet, View } from "react-native";
import React from "react";
import ListItems from "./ListItems";

const ListComponent = ({ data }) => {
  return (
    <View style={styles.container}>
      <ListItems
        time={data.dt_txt}
        weather={data.weather[0].main}
        icon={data.weather[0].icon}
        tempMin={data.main.temp_min.toString().slice(0, 4)}
        tempMax={data.main.temp_max.toString().slice(0, 4)}
      />
    </View>
  );
};

export default React.memo(ListComponent);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    width: "100%",
    // backgroundColor: "red",
    // justifyContent: "center",
    // alignItems: "center",
  },
});
