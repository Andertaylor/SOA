import { getLocation, getData } from 'react-native-weather-api';

getLocation();  

let cityName = ""; 
let temperature = "";
let windSpeed = "";

setTimeout(function() {    
let data = new getData()
cityName = data.city;
temperature = data.tempC;
windSpeed = data.windKph;
    
},2000);

export default Weather;