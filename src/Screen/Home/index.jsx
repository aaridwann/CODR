import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CardMain from "../../Component/CardMain/CardMain";
import SaveScreen from "../../Utils/SafeArea";
import ListComponent from "../../Component/List";
import SearchBar from "../../Component/SearchBar";
import { useSelector } from "react-redux";
import useCurrentLocation from "../../Utils/Fetching/CurrentLocation";
import useDailyWeather from "../../Utils/Fetching/Daily";

const HomeScreen = () => {
  const { data } = useCurrentLocation();
  const { dailyData } = useDailyWeather();
  const { loading } = data;
  const loadDaily = dailyData?.loading
  const dataDaily = dailyData?.data?.list
  return (
    <SaveScreen style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <CardMain data={data?.data} />

          {/* === List ==== */}
          <ScrollView style={{ width: "111%" }}>
            { dailyData?.loading ? <Text>Loading...</Text> : 
              dailyData?.data?.list?.map((data,i) => (
              <View key={i}>
                <ListComponent  />
              </View>
            ))}
          </ScrollView>

          {/* === Search === */}
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
