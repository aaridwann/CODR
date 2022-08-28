import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import API_KEY from "../../Var/apiKey";

function useDailyWeather(latitude,longitude) {
  const [dailyData, setDailyData] = useState({ data: [], loading: true });
  const { coords } = useSelector((state) => state.position);
  // const { latitude, longitude } = coords; 
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&lang=id&units=metric`;

  async function Fetching() {
    try {
      const res = await axios.get(url);
      const filter = removeDuplicate(res.data.list)
      setDailyData({ data: filter, loading: false });
    } catch (error) {
      setDailyData({ data: null, loading: false });
    }
  }

  useEffect(() => {
    Fetching();
  }, [latitude]);

  return { dailyData: dailyData };
}

export default useDailyWeather;

function removeDuplicate(data) {
  const res = []
  for (let i = 0; i < data.length; i++) {
    res.push(data[i]);
    i+=6
  }
  return res
}
