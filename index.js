//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


const api = {
    key: "52c41b02f85a4bb8e918d83e68307d6f",
    base: "https://api.openweathermap.org/data/2.5/"
}

// Event listner func on keypress
const searchInputBox = document.getElementById('input-box');

searchInputBox.addEventListener('keypress',(event) => {
    if(event.keyCode == 13){
        getweatherreport(searchInputBox.value);
        console.log(searchInputBox.value);
        
    }
});

//get weather report
function getweatherreport(query){
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(showweatherreport);
}

//show weather report
function showweatherreport(weather){
    console.log(weather);
    let city=document.getElementById('city');
    city.innerText=`${weather.name}, ${weather.sys.country}`;
    let temperature=document.getElementById('temp');
    temperature.innerText=`${weather.main.temp}°C`;

    let now=new Date();
    let date=document.getElementById('date');
    date.innerText= dateBuilder(now);

    let minmax=document.getElementById('min-max');
    minmax.innerText=`${weather.main.temp_min }°C(min)  / ${ weather.main.temp_max }°C(max)`;

    let weathertype= document.getElementById('weather');
    weathertype.innerText=`${weather.weather[0].main}`
}

//Date manage
function dateBuilder(d){
    let months = ["January" , "February","March","April","May","June","july","August","September","October","November","December"];
    let days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    let day=days[d.getDay()];
    let date=d.getDate();
    let month=months[d.getMonth()];
    let year=d.getFullYear();

    return `${day} ${date} ${month} ${year}`;

}