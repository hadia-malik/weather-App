let baseURL="https://api.openweathermap.org/data/2.5/weather?";
let APIKey="&appid=e4e88c03acb1dde364f79f31dcfcf846";
let metricUnit="&units=metric";
//accessing inner text of default city
let initialCity=document.querySelector(".city").innerText;
//accessing the input
let input=document.querySelector(".input");
//accessing weather image
let weatherImg=document.querySelector(".weather-img");
//accessing search btn
let searchBtn=document.querySelector(".search-btn");
//accessing city
let city=document.querySelector(".city");
//accessing temperature
let temp=document.querySelector(".temp");
//accessing weather
let weather=document.querySelector(".weather");
//accessing windspeed
let windSp=document.querySelector(".wind-para");
//accessing windspeed
let humidity=document.querySelector(".humid-para");
//event listner on page load
window.addEventListener("load",()=>{
  updateWeatherData(initialCity);
})
//function for updating weather data dynamically
const updateWeatherData=async (currCity)=>{
  let response=await fetch(`${baseURL}q=${currCity}${APIKey}${metricUnit}`);
  let data=await response.json();
  updateCityName(currCity);
  updatetemp(data.main.temp);
  updateWeather(data.weather[0].main);
  updateWind(data.wind.speed);
  updateHumid(data.main.humidity);
}
input.addEventListener("keydown",(evt)=>{
  if(evt.key === "Enter"){
    updateWeatherData(input.value);
  }
});
searchBtn.addEventListener("click",()=>{
    updateWeatherData(input.value);
});
//function for updating city name
const updateCityName=(currentCity)=>{
  city.innerText=currentCity;
};
//function for updating temperature
const updatetemp=(temperature)=>{
  temp.innerText=`${temperature} \u00B0C`;
};
//function for updating weather condition
const updateWeather=(weatherCond)=>{
  weather.innerText=weatherCond;
  weatherImg.src=`images/${weatherCond}.png`;
}
//function for updating wind speed
const updateWind=(windSpeed)=>{
  windSp.innerText=`${windSpeed}m/s`
}
//function for updating humidity
const updateHumid=(humid)=>{
  humidity.innerText=`${humid}%`;
}

