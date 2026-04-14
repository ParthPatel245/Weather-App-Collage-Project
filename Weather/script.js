
//http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}



async function loadData(){

try{
const city = document.getElementById("search").value;
if (!city) return alert("Please enter a city name");

//let lat, long;

const apiKey = "PUT_YOUR_API_HERE_FOR_OPEN_WHEATHER";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
// const apiUrl2 = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,relative_humidity_2m,weather_code&hourly=temperature_2m,precipitation_probability&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`
const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`;


const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
//const response2 = await fetch(apiUrl2);
const response3 = await fetch(geoUrl);

    if(response.status == 404){
        alert("City not Found...");
        return;
    }
       // if (!response2.ok) throw new Error("Network response was not ok");

    var data = await response.json();
    //var data2 = await response2.json();
    var data3 = await response3.json();

if (!data3.results || data3.results.length === 0) {
            alert("City not Found...");
        return;
        }


// Get Lat and Long from the first result
       const { latitude, longitude, name, admin1 } = data3.results[0];
//document.getElementById("information").innerHTML=(`Found: ${name}, ${admin1} at ${latitude}, ${longitude}`);
document.getElementById("admin1").innerHTML = admin1;
document.getElementById("latitude").innerHTML = latitude;
document.getElementById("longitude").innerHTML = longitude;

// lat = latitude;
// long = longitude;

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = "Humidity: " + data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = "Wind: " + data.wind.speed + " km/h";
}
catch(error){
    alert("Error while fetching weather...");
}

}

