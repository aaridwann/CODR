import { StyleSheet, Text, View, PermissionsAndroid } from "react-native";
import React, { useEffect, useState } from "react";
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
          message: "Cool Apps needs access to your locations",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );

      if (granted === "granted") {
        console.log("Sekarang bisa akses lokasi");
        Geolocation.getCurrentPosition(
          (position) => {
            dispatch(
              update({ coords: position.coords, mocked: position.mocked })
            );
          },
          (err) => console.log(err),
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
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
  };
  useEffect(() => {
    requestLocationPermission();
  }, []);

  return <View style={{flex:1}}>{children}</View>;
};

export default LocationProvider;
