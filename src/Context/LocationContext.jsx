import { createContext, useEffect, useState } from "react";
import { PermissionsAndroid } from "react-native";
import Geolocation from "react-native-geolocation-service";

export const LocationContext = createContext();

function LocationProviderContext({ children }) {
  const [position, setPosition] = useState({
    coords: false,
    mocked: false,
    message: "",
  });
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
      return returnsetPosition({ coords: false, mocked: {}, message: err });
    }
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);
  return (
    <LocationContext.Provider value={{ position, setPosition }}>
      {children}
    </LocationContext.Provider>
  );
}

export default LocationProviderContext;
