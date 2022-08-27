import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "../Screen/Home";
import Settings from "../Screen/Profile";
import store from "../Redux/Store/store";
import { Provider } from "react-redux";
import DetailScreen from "../Screen/Details";
import LocationProvider from "../Utils/LocationProvider";

const Tab = createBottomTabNavigator();

function Route() {
  return (
    <Provider store={store}>
      <LocationProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Home") {
                  iconName = focused
                    ? route.name.toLowerCase()
                    : route.name.toLowerCase() + "-outline";
                } else if (route.name === "Settings") {
                  iconName = focused
                    ? route.name.toLowerCase()
                    : route.name.toLowerCase() + "-outline";
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: "tomato",
              tabBarInactiveTintColor: "gray",
            })}
          >
            <Tab.Screen
              options={{ headerShown: false }}
              name="Home"
              component={HomeScreen}
            />

            <Tab.Screen
              options={{ headerShown: false }}
              name="Detail"
              component={DetailScreen}
            />

            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
      </LocationProvider>
    </Provider>
  );
}

export default Route;
