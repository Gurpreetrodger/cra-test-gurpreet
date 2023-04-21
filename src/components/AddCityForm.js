import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import cityWeatherBlock from "./sampleweatherResponse.json";
import * as cityWeatherActions from "../redux/actions/cityWeatherActions";
import { PropTypes } from "prop-types";

const AddCityForm = (props) => {
  // alert(JSON.stringify(cityWeatherBlock));
  const [cityNameState, setCityNameState] = useState({ cityName: "" });
  // const [newCityState, setnewCityState] = useState(cityWeatherBlock);
  const obj = cityWeatherBlock;

  const eventHandler = (event) => {
    event.preventDefault();
    setCityNameState({ cityName: event.target.value });
  };
  const updateCities = (event) => {
    event.preventDefault();
    let cityName = cityNameState.cityName;
    if (cityName) {
      props.addCity(cityName);
      // setnewCityState({ ...newCityState, name: cityName });
      obj.name = cityName;
      debugger;
      // alert(JSON.stringify(obj.name));
      props.dispatch(cityWeatherActions.createCityWeather(cityWeatherBlock));
    }
  };
  return (
    <form 
    // onSubmit={updateCities}
    >
      <input
        id="textInput"
        className="input"
        size="32"
        value={cityNameState.cityName}
        onChange={eventHandler}
        placeholder="Enter City"
      ></input>
      <button onClick={updateCities}>Add Location</button>
      {/* {props.citiesWeather.map((c) => (
        <div key={c.name}>{c.name}</div>
      ))} */}
    </form>
  );
};

AddCityForm.propTypes = {
  citiesWeather: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(
  state
  // , ownProps
) {
  return {
    citiesWeather: state.citiesWeather,
  };
}

export default connect(mapStateToProps)(AddCityForm);
