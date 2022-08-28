import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import useFindCity from "../../Utils/Fetching/FindCity";
import API_KEY from "../../Utils/Var/apiKey";
import axios from "axios";

const SearchBar = ({ navigation }) => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  const [dataFound, setDataFound] = useState([]);
  const styles = StyleSheet.create({
    container: {
      width: show ? 200 : 50,
      height: 50,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1,
      borderRadius: 50,
      paddingHorizontal: 10,
      borderColor: "rgb(12,139,227)",
      top: "40%",
      right: 10,
      position: "absolute",
      overflow: "hidden",
    },
    found: {
      width: 150,
      display: dataFound && text.length > 2 ? "flex" : "none",
      height: "auto",
      padding: 2,
      backgroundColor: "white",
      position: "absolute",
      justifyContent: "center",
      alignItems: "center",
      right: 30,
      top: "48%",
    },
  });

  async function findCity() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${API_KEY}`;
    try {
      const res = await axios.get(url);
      setDataFound(res.data);
    } catch (error) {
      setDataFound(null);
    }
  }

  return (
    <>
      <View style={[styles.container]}>
        <Pressable onPress={() => (setShow(!show), setText(""))}>
          <Ionicons
            style={{ width: 40, marginRight: show ? 20 : -10 }}
            name={show ? "close" : "search-outline"}
            size={30}
            color={"white"}
          />
        </Pressable>
        <TextInput
          onChangeText={setText}
          onSubmitEditing={findCity}
          autoCorrect={true}
          style={{
            display: show ? "flex" : "none",
            color: "white",
            width: 100,
          }}
          textAlign="center"
          value={text}
          placeholder="Search city"
        />
      </View>

      {/* === Find Columt === */}
      <View style={styles.found}>
        <Pressable
          onPress={() =>
            dataFound &&
            navigation.navigate(
              "Detail",
              { search: dataFound },
              setShow(false),
              setText("")
            )
          }
        >
          <Text>{dataFound?.name ? dataFound?.name : "City not found"}</Text>
        </Pressable>
      </View>
    </>
  );
};

export default React.memo(SearchBar);
