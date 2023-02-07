// API Key
/*let APIKey = "f02595933c45e62f1dfa8c9e53866c59";
navigator.geolocation.getCurrentPosition(position => {
    const {
        latitude,
        longitude
    } = position.coords;
    console.log(latitude, longitude);
})
*/
const api = {

 key:"f02595933c45e62f1dfa8c9e53866c59",
base:"https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);


function setQuery(evt) {
    if (evt.keyCode == 13) {
        getResults(searchbox.value);
        console.log(searchbox.value);
    }
}

function getResults (query) {
    
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(weather => {
         return weather.json();
      }).then(displayResults);
    }


function displayResults (weather) {
    
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

    
    let weather1 = document.querySelector('.current .weather');
    //weather1.innerHTML = current.weather[0].main;
    weather.innerHTML = `${(weather.main.weather)}`;
   //weather.innerHTML = `${(weather.list.wind)}`;
    console.log(weather);

    

    let hilow = document.querySelector('.current  .hi-low');
    hilow.innerHTML = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
}
function dateBuilder (d){
    let months = ['January','February','March','April','May','June','July','August','September','October','November','December'
];
  let days =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();
  return `${day} ${date} ${month} ${year}`;
}


function getWeather(latitude,longitude) {
    let APIUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKey}`
    let APIUrlforFiveDay = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${APIKey}`;
    fetch(APIUrlforFiveDay).then(response => response.json()).then(data => console.log(data))
    
}
fetch("https://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=f02595933c45e62f1dfa8c9e53866c59")
.then(response => response.json())
.then(citiesFound => {
    let firstCity = citiesFound[0];
    console.log(firstCity.lat);
    console.log(firstCity.lon)
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=f02595933c45e62f1dfa8c9e53866c59`)
})
        
    
