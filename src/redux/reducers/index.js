import { combineReducers } from 'redux';
import citiesWeather from "./cityWeatherReducer";

const rootReducer = combineReducers({
    citiesWeather: citiesWeather
});
export default rootReducer;