import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import API_KEY from "../../Var/apiKey";

function useCurrentLocation(latitude, longitude) {
  const [data, setData] = useState({ data: [], loading: true });
  // const { coords } = useSelector((state) => state.position);
  // const { latitude, longitude } = coords;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&lang=id&units=metric`;

  async function Fetching() {
    try {
      const res = await axios.get(url);
      setData({ ...data, data: res.data, loading: false });
    } catch (error) {
      setData({ ...data, data: null, loading: false });
      console.log(error);
    }
  }

  useEffect(() => {
    Fetching();
  }, [latitude,longitude]);

  return { data: data };
}

export default useCurrentLocation;
