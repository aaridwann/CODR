import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { Suspense, useContext } from "react";
// import CardMain from "../../Component/CardMain/CardMain";
import SaveScreen from "../../Utils/SafeArea";
// import ListComponent from "../../Component/List";
// import SearchBar from "../../Component/SearchBar";
import { useSelector } from "react-redux";
import useCurrentLocation from "../../Utils/Fetching/CurrentLocation";
import useDailyWeather from "../../Utils/Fetching/Daily";
import LoadingScreen from "../Loading/Loading";
import { LocationContext } from "../../Context/LocationContext";
const CardMain = React.lazy(() => import("../../Component/CardMain/CardMain"));
const ListComponent = React.lazy(() => import("../../Component/List/index"));
const SearchBar = React.lazy(() => import("../../Component/SearchBar/index"));

const HomeScreen = ({ navigation }) => {
  // const { coords } = useSelector((state) => state.position);
  const { position } = useContext(LocationContext);
  const { coords } = position;
  const { data } = useCurrentLocation(coords?.latitude, coords?.longitude);
  const { dailyData } = useDailyWeather(
    data?.data?.coord?.lat,
    data?.data?.coord?.lon
  );
  const { loading } = data;

  return (
    <SaveScreen style={styles.container}>
      {loading ? (
        <LoadingScreen />
      ) : (
        <View style={{ flex: 1 }}>
          <View style={{ height: "50%" }}>
            <Suspense fallback={<LoadingScreen />}>
              <CardMain data={data?.data} />
            </Suspense>
          </View>

          {/* === List ==== */}
          <View style={{ height: "46%", width: "111%" }}>
            <ScrollView>
              {dailyData?.loading ? (
                <Text>Loading...</Text>
              ) : (
                dailyData?.data?.map((x, i) => (
                  <Pressable
                    onPress={() =>
                      navigation.navigate("Detail", {
                        detail: { data, list: x },
                      })
                    }
                    key={i}
                  >
                    <Suspense fallback={<LoadingScreen />}>
                      <ListComponent data={x} />
                    </Suspense>
                  </Pressable>
                ))
              )}
            </ScrollView>
          </View>

          {/* === Search === */}
          <Suspense fallback={<LoadingScreen />}>
            <SearchBar navigation={navigation} />
          </Suspense>
        </View>
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
