import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";

// https://openweathermap.org/current​

// https://openweathermap.org/forecast16​

// https://ssl.gstatic.com/onebox/weather/128/snow.png​

// https://ssl.gstatic.com/onebox/weather/128/sunny.png​

// https://ssl.gstatic.com/onebox/weather/128/partly_cloudy.png ​

// https://ssl.gstatic.com/onebox/weather/128/rain.png ​

// https://ssl.gstatic.com/onebox/weather/128/cloudy.png

const testData = [
  {'city': 'New York','currTemp': '18 ℃','lowTemp': 'Low 16 ℃','highTemp': 'High 26 ℃','humidity': 'Humidity 48 %','image':'https://ssl.gstatic.com/onebox/weather/128/sunny.png​'},
  {'city': 'San Francisco','currTemp': '24 ℃','lowTemp': 'Low 18 ℃','highTemp': 'High 28 ℃','humidity': 'Humidity 52 %','image':'https://ssl.gstatic.com/onebox/weather/128/partly_cloudy.png'},
  {'city': 'Austin','currTemp': '26 ℃','lowTemp': 'Low 22 ℃','highTemp': 'High 30 ℃','humidity': 'Humidity 75 %','image':'https://ssl.gstatic.com/onebox/weather/128/rain.png'},
  {'city': 'Miami','currTemp': '29 ℃','lowTemp': 'Low 29 ℃','highTemp': 'High 37 ℃','humidity': 'Humidity 80 %','image':'https://ssl.gstatic.com/onebox/weather/128/cloudy.png'}
  ,
];

const MyWeatherCard = (props) => (
  <div className="container" style={{display:'grid', 'grid-template-columns': 'repeat(2, 1fr)','grid-template-rows': 'repeat(2,80px)', 'gap': '10px', 'border': '1rem solid', 'border-color':'white'}}>
    <h3>{props.city}</h3>
    <div>{props.currTemp}</div>
    <img src={props.image} />
    <div  style={{'grid-template-columns':'33.3% 33.3% 33.3%'}} >
      <div>{props.lowTemp}</div>
      <div>{props.highTemp}</div>
      <div>{props.humidity}</div>
    </div>
  </div>
);


const MyWeatherCompList = (props) => (
    <div style={{display:'grid', marginLeft:10, 'grid-template-columns': 'repeat(2, 1fr)','grid-template-rows': 'repeat(2,250px)', 'background-color': 'beige'}}>
    {/* <div style={{display:'flex', marginLeft:'0 auto', 'background-color': 'beige'}}> */}
      {props.citiesWeather.map(weatherCard => <MyWeatherCard {...weatherCard}/> )}
    </div>
);

const AddCityForm = (props) => {
  const [cityNameState, setCityNameState] = useState({cityName: ''});
  const eventHandler = (event) => {
    event.preventDefault();
    console.log(this.cityInput.current.value)
  };
  return (
  <form>
    <input 
      id="textInput" 
      class="input" 
      size="32" 
      value={cityNameState.cityName}
      onChange={event=> setCityNameState({ cityName: event.target.value })}
      placeholder='Enter City' 
      onSubmit={MyWeatherCompList}></input>
  </form>
);
};

function App() {
  const [tempDetails,setTemplateDetails] = React.useState(testData);

  return (
    <div style={{display:'grid', marginLeft:10}}>
      <h2 >My Weather App - React-Redux</h2>
      <h2>Overview - Weather Widget</h2>
      <AddCityForm addCity={setTemplateDetails}/>
      <MyWeatherCompList citiesWeather={tempDetails}/>
    </div>
  );
}

export default App;
