import React, { useEffect, useState } from "react";
import { useLinkClickHandler } from "react-router-dom";

const MyWeatherCard = ({ cityName }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const myApiKey = "a0319e0d1bf379208232887dc0777e76";
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${myApiKey}`
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  debugger;
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div class="col-md-2">
          <div class="card bg-white text-dark">
            <img
              src="https://ssl.gstatic.com/onebox/weather/128/rain.png"
              class="card-img"
              alt="raining"
            />
            <div class="card-img-overlay">
              <h5 class="card-title">{data.name}</h5>
              <p class="card-text">Temperature {data.main.temp} &deg;C</p>
              <p class="card-text">Min .temp. {data.main.temp_min} &deg;C</p>
              <p class="card-text">Max .temp. {data.main.temp_max} &deg;C</p>
              <p class="card-text">Humidity {data.main.humidity}</p>
              <p class="card-text"></p>
              {/* <p class="card-text">Last updated 3 mins ago</p> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyWeatherCard;
