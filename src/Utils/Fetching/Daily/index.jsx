import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import API_KEY from "../../Var/apiKey";

function useDailyWeather() {
  const [dailyData, setDailyData] = useState({ data: [], loading: true });
  const { coords } = useSelector((state) => state.position);
  const { latitude, longitude } = coords;
  const url = `api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&lang=id&units=metric`;

  async function Fetching() {
    try {
      const res = await axios.get(url);
      setDailyData({ ...data, data: res.data, loading: false });
      console.log(res.data);
    } catch (error) {
      setDailyData({ ...data, data: null, loading: false });
      console.log(error);
    }
  }

  useEffect(() => {
    Fetching();
  }, []);

  return { dailyData: dailyData };
}

export default useDailyWeather;
