import {
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  SafeAreaView,
  StatusBar,
} from "react-native";
import React, { useEffect } from "react";
import Geolocation from "react-native-geolocation-service";
import { update } from "../../Redux/feature/Position";
import { useDispatch } from "react-redux";

const LocationProvider = ({ children }) => {
  const dispatch = useDispatch();
  const requestLocationPermission = async () => {
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

      if (
        granted ===
        PermissionsAndroid.RESULTS.GRANTED
      ) {
        console.log("Sekarang bisa akses lokasi");
        Geolocation.getCurrentPosition(
          (position) => {
            dispatch(
              update({
                coords: position.coords,
                mocked: position.mocked,
                message: "success",
              })
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
            coords: false,
            mocked: {},
            message: "Tidak di izinkan mengakses lokasi",
          })
        );
        console.log("Tidak di izinkan mengakses lokasi");
      }
    } catch (err) {
      dispatch(update({ coords: false, mocked: {}, message: err }));
      console.log(err);
    }
  };
  useEffect(() => {
    requestLocationPermission();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        animated={true}
        // backgroundColor="#61dafb"
        // barStyle={statusBarStyle}
        // showHideTransition={statusBarTransition}
        hidden={true}
      />
      {children}
    </View>
  );
};

export default LocationProvider;
