import React from "react";
import MyWeatherCard from "./weatherCard/MyWeatherCard";
import { connect } from "react-redux";
import cityWeatherBlock from "./sampleweatherResponse.json";
import * as cityWeatherActions from "../redux/actions/cityWeatherActions";
import { PropTypes } from "prop-types";

const MyWeatherCards = (props) => {
  return (
    <div>
      {props.cities.map((cityName) => (
        <MyWeatherCard key={cityName} cityName={cityName} />
      ))}
    </div>
  );
};

function mapStateToProps(
  state
  // , ownProps
) {
  return {
    citiesWeather: state.citiesWeather,
  };
}

export default connect(mapStateToProps)(MyWeatherCards);
