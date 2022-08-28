import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { Suspense } from "react";
import SaveScreen from "../../Utils/SafeArea";
// import CardDetail from "../../Component/CardDetail";
// import CardItem from "../../Component/CardItem";
import useCurrentLocation from "../../Utils/Fetching/CurrentLocation";
import useDailyWeather from "../../Utils/Fetching/Daily";
import moment from "moment";
import LoadingScreen from "../Loading/Loading";
const CardDetail = React.lazy(() => import("../../Component/CardDetail/index"));
const CardItem = React.lazy(() => import("../../Component/CardItem/index"));

const DetailScreen = ({ route }) => {
  const { detail, search } = route.params;
  const { data } = useCurrentLocation(
    detail?.data?.data?.coord?.lat || search?.coord?.lat,
    detail?.data?.data?.coord?.lon || search?.coord?.lon
  );
  const { dailyData } = useDailyWeather(
    data?.data?.coord?.lat,
    data?.data?.coord?.lon
  );
  return (
    <SaveScreen>
      {data.loading ? (
        <LoadingScreen />
      ) : (
        <View style={{ flex: 1 }}>
          <View style={{ height: "70%" }}>
            <Suspense fallback={<LoadingScreen />}>
              <CardDetail
                cloud={detail?.list?.clouds?.all || data?.data?.clouds?.all}
                humidity={
                  detail?.list?.main?.humidity || data?.data?.main?.humidity
                }
                wind={detail?.list?.wind?.speed || data?.data?.wind?.speed}
                city={data?.data?.name}
                icon={
                  detail?.list?.weather[0]?.icon || data?.data?.weather[0]?.icon
                }
                cuaca={
                  detail?.list?.weather[0]?.description ||
                  data?.data?.weather[0]?.description
                }
                suhu={detail?.list?.main?.temp || data?.data?.main?.temp}
                date={
                  moment(detail?.list?.dt_txt).format("D MMMM YYYY, HH:mm a") ||
                  moment(Date.now()).format("DD MMMM YYYY, HH:mm ")
                }
              />
            </Suspense>
          </View>

          <View
            style={{
              marginTop: 9,
              flexDirection: "row",
              overflow: "scroll",
              justifyContent: "space-evenly",
            }}
          >
            <ScrollView
              horizontal={true}
              bounces={true}
              alwaysBounceHorizontal={true}
              contentContainerStyle={{ paddingHorizontal: 10, elevation: 1 }}
            >
              {dailyData.data &&
                dailyData.data.map((data, i) => (
                  <View key={i} style={{ marginLeft: 10, marginRight: 10 }}>
                    <Suspense fallback={<LoadingScreen />}>
                      <CardItem
                        temp={data.main.temp.toString().slice(0, 4)}
                        icon={data.weather[0].icon}
                        date={moment(data.dt_txt).format("ddd")}
                      />
                    </Suspense>
                  </View>
                ))}
            </ScrollView>
          </View>
        </View>
      )}
    </SaveScreen>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
