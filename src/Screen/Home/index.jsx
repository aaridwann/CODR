import { StyleSheet, Text } from "react-native";
import React from "react";
import CardMain from "../../Component/CardMain/CardMain";
import SaveScreen from "../../Utils/SafeArea";
import ListComponent from "../../Component/List";
import SearchBar from "../../Component/SearchBar";
import { useSelector } from "react-redux";
import useCurrentLocation from "../../Utils/Fetching/CurrentLocation";
import useDailyWeather from "../../Utils/Fetching/Daily";

const HomeScreen = () => {
  const { coords } = useSelector((state) => state.position);
  const { data } = useCurrentLocation();
  const { dailyData } = useDailyWeather();
  const { loading } = data;
  console.log('daily',dailyData)
  return (
    <SaveScreen style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <CardMain data={data?.data} />
          <ListComponent />
          <SearchBar />
        </>
      )}
    </SaveScreen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#011a33",
    justifyContent: "center",
    alignItems: "center",
  },
});
