import axios from 'axios';

const API_KEY = 'ffb77ac13145c86461fe1b75018e732b';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;
// const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url)

  console.log('this is the request', request)

  return{
    type: FETCH_WEATHER,
    payload: request
  }
}
