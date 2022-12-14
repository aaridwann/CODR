import {
  Pressable,
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
} from "react-native";
import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { update } from "../../Redux/feature/Position";
import Geolocation from "react-native-geolocation-service";
import { LocationContext } from "../../Context/LocationContext";

const Settings = () => {
  const dispatch = useDispatch();
  const { setPosition } = useContext(LocationContext);

  async function location() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Get Location Permission",
          message: "Weather Apps needs access to your locations",
          // buttonNeutral: "Ask Me Later",
          // buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
          (position) => {
            return setPosition({
              coords: position.coords,
              mocked: position.mocked,
              message: "success",
            });
          },
          (err) => {
            return setPosition({
              coords: false,
              mocked: false,
              message: err,
            });
          },
          {
            showLocationDialog: true,
            enableHighAccuracy: true,
            timeout: 30000,
            maximumAge: 30000,
          }
        );
      } else {
        return setPosition({
          coords: false,
          mocked: false,
          message: "Tidak di izinkan mengakses lokasi",
        });
      }
    } catch (err) {
      return setPosition({ coords: false, mocked: false, message: err });
    }
  }
  return (
    <View>
      <Pressable onPress={location}>
        <Text>Matikan Lokasi</Text>
      </Pressable>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
