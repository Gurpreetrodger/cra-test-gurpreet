import React from 'react';
import MyWeatherCard from './MyWeatherCard';

const MyWeatherCompList = (props) => {
    const activeStyle = {color: "#F15B2A"}
    return (
        <div style={{display:'grid', marginLeft:10, 'grid-template-columns': 'repeat(2, 1fr)','grid-template-rows': 'repeat(2,250px)', 'background-color': 'beige'}}>
            {props.cities.map(cityName => <MyWeatherCard cityName={cityName}/> )}
        </div>
    );
};

export default MyWeatherCompList;