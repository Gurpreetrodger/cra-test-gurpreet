import React, { useState, useEffect, useRef } from 'react';

const AddCityForm = (props) => {
  const [cityNameState, setCityNameState] = useState({cityName: ''});
  const newCity = useRef();
  const eventHandler = (event) => {
    event.preventDefault();
    console.log(this.cityInput.current.value)
  };
  const updateCities = () => {
    let cityName = cityNameState.cityName;
    if(cityName){
      props.addCity(cityName);
    }

  };
  return (
  <form onSubmit={updateCities}>
    <input 
      id="textInput" 
      class="input" 
      size="32" 
      value={cityNameState.cityName}
      onChange={event => setCityNameState({ cityName: event.target.value })}
      placeholder='Enter City' 
      ref={newCity}
      ></input>
  </form>
);
};

export default AddCityForm;