import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "../Screen/Home";
import Settings from "../Screen/Profile";
import DetailScreen from "../Screen/Details";
import { useSelector } from "react-redux";
import ErrorScreen from "../Screen/Error";

const Tab = createBottomTabNavigator();

function Route() {
  const { coords } = useSelector((state) => state.position);

  return (
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
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        {!coords ? (
          <>
            <Tab.Screen
              options={{ headerShown: false }}
              name="Home"
              component={ErrorScreen}
            />
            <Tab.Screen name="Settings" component={Settings} />
          </>
        ) : (
          <>
            <Tab.Screen
              options={{ headerShown: false }}
              name="Home"
              component={HomeScreen}
            />

            <Tab.Screen
              options={{
                headerShown: false,
                tabBarVisible: false, //like this
                tabBarButton: (props) => null,
              }}
              name="Detail"
              component={DetailScreen}
            />
          </>
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Route;
