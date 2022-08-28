import axios from "axios";
import React, { useEffect, useState } from "react";
import API_KEY from "../../Var/apiKey";

function useFindCity(name) {
  const [data, setData] = useState({ data: [], loading: true, message: "" });
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`;

  async function Fetching() {
    try {
      const res = await axios.get(url);
      console.log(res.data);
      setData({ data: res.data, loading: false });
    } catch (error) {
      setData({ data: null, loading: false, message: error });
      console.log(error);
    }
  }

  useEffect(() => {
    Fetching();
  }, [name]);

  return data;
}

export default useFindCity;
