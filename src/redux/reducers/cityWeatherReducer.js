//state = [], initialized to an empty array because this will end up storing an array of cities weather data
export default function cityWeatherReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_CITYWEATHER":
      return [...state, { ...action.cityWeather }];
    default:
      return state;
  }
}
