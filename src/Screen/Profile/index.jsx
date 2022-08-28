import { Pressable, StyleSheet, Text, View ,  PermissionsAndroid,} from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../Redux/feature/Position";
import Geolocation from "react-native-geolocation-service";

const Settings = () => {
  const { coords } = useSelector((state) => state.position);
  const { latitude, longitude } = coords;
  const dispatch = useDispatch();


  async function location() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Get Location Permission",
          message: "Weather Apps needs access to your locations",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Sekarang bisa akses lokasi");
        Geolocation.getCurrentPosition(
          (position) => {
            dispatch(
              update({ coords: position.coords, mocked: position.mocked })
            );
          },
          (err) => console.log(err),
          {
            // showLocationDialog: true,
            enableHighAccuracy: true,
            timeout: 30000,
            maximumAge: 30000,
          }
        );
      } else {
        dispatch(
          update({
            coords: {},
            mocked: {},
            message: "Tidak di izinkan mengakses lokasi",
          })
        );
        console.log("Tidak di izinkan mengakses lokasi");
      }
    } catch (err) {
      dispatch(update({ coords: {}, mocked: {}, message: err }));
      console.log(err);
    }
  }
  return (
    <View>
      <Pressable onPress={location}>
        <Text>Matikan Lokasi</Text>
      </Pressable>
      <Text>{latitude}</Text>
      <Text>{longitude}</Text>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
