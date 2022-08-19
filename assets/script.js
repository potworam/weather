// var getWeatherRepos = function() {
//     console.log("function was called");
//   };
  
//   getWeatherRepos();
var searchHistory=[];
var RootUrl="https://api.openweathermap.org"
const weather = { 
    "apiKey": "e35f214583eabb86c9a7ac5f2334a45b"
}
var searchForm=document.querySelector("#search-form")
var searchInput= document.querySelector("#search-bar")
var todaysContainer = document.querySelector("#today")
var forecastselector = document.querySelector("#forecast")
var historyContainer= document.querySelector("#history")

function getStats(city,data){
    var div= document.createElement("div")
    div.textContent=data.current.temp
    var weatherElement=document.querySelector(".weather")
    weatherElement.append(div)
 
    var winddiv= document.createElement("div")
    div.textContent=data.current.wind_speed
    var weatherElement=document.querySelector(".wind")
    weatherElement.append(winddiv)
 
 
    var humidiv= document.createElement("div")
    div.textContent=data.current.humidity
    var weatherElement=document.querySelector(".humidity")
    weatherElement.append(humidiv)
 
 }
 

function getweather(lat,lon){
var apiurl=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=e35f214583eabb86c9a7ac5f2334a45b`
    fetch (apiurl)    
.then(function(res){
    return res.json()
})
.then(function(data){
    getStats(city,data)
})
}

getweather(45,55)




//  needsanamehere function(data){
//     const{name}=data;
//     const{icon,description} = data.weather;
//     const {temp, humidity}=data.main;
//     const{speed}= data.wind;
//     console.log(name,icon,description,temp,humidity,speed)


