import React, { useEffect, useState } from 'react';

const MyWeatherCard = ( {cityName} ) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const myApiKey = "a0319e0d1bf379208232887dc0777e76";
  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${myApiKey}`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
    ;
  }, []);

  return ( 
    <>
    {isLoading ? <div>Loading...</div> : (
    <div className="container" style={{display:'grid', 'grid-template-columns': 'repeat(2, 1fr)','grid-template-rows': 'repeat(2,80px)', 'gap': '10px', 'border': '1rem solid', 'border-color':'white'}}>
        <h3 className='city'>{data.name}</h3>
        <div className='temperature'>{data.main.temp} &deg;C</div>
        <img src='https://ssl.gstatic.com/onebox/weather/128/rain.png' alt='weather'/>
        <div style={{'grid-template-columns':'33.3% 33.3% 33.3%'}} >
            <div className='minTemperature'>{data.main.temp_min} &deg;C</div>
            <div className='maxTemperature'>{data.main.temp_max} &deg;C</div>
            <div className='humidity'>{data.main.humidity}</div>
        </div>
    </div>
    )}
    </>
  );
};

export default MyWeatherCard;