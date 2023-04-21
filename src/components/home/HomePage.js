import React, { useState } from "react";
import AddCityForm from "../AddCityForm";
import MyWeatherCards from "../MyWeatherCardsPage";

let testCities = ["Austin", "Miami"];

const Header = () => {
  // const [tempDetails,setTemplateDetails] = React.useState(testData);
  const [cities, setCities] = useState(testCities);
  const updatedCities = (newCity) => {
    cities.push(newCity);
    setCities((cities) => [...cities, newCity]);
    alert(cities);
  };

  return (
    <>
      <h2>My Weather App - React-Redux</h2>
      <h2>Overview - Weather Widget</h2>
      <AddCityForm addCity={updatedCities} />
      <MyWeatherCards cities={cities} />
    </>
  );
};

// https://openweathermap.org/current​

// https://openweathermap.org/forecast16​

// https://ssl.gstatic.com/onebox/weather/128/snow.png​

// https://ssl.gstatic.com/onebox/weather/128/sunny.png​

// https://ssl.gstatic.com/onebox/weather/128/partly_cloudy.png ​

// https://ssl.gstatic.com/onebox/weather/128/rain.png ​

// https://ssl.gstatic.com/onebox/weather/128/cloudy.png

// const testData = [
//     {'city': 'New York','currTemp': '18 ℃','lowTemp': 'Low 16 ℃','highTemp': 'High 26 ℃','humidity': 'Humidity 48 %','image':'https://ssl.gstatic.com/onebox/weather/128/sunny.png​'},
//     {'city': 'San Francisco','currTemp': '24 ℃','lowTemp': 'Low 18 ℃','highTemp': 'High 28 ℃','humidity': 'Humidity 52 %','image':'https://ssl.gstatic.com/onebox/weather/128/partly_cloudy.png'},
//     {'city': 'Austin','currTemp': '26 ℃','lowTemp': 'Low 22 ℃','highTemp': 'High 30 ℃','humidity': 'Humidity 75 %','image':'https://ssl.gstatic.com/onebox/weather/128/rain.png'},
//     {'city': 'Miami','currTemp': '29 ℃','lowTemp': 'Low 29 ℃','highTemp': 'High 37 ℃','humidity': 'Humidity 80 %','image':'https://ssl.gstatic.com/onebox/weather/128/cloudy.png'}
//     ,
//   ];

export default Header;
