
async function loadData(){
const apiKey = "USE_YOUR_API_KEY_HERE";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const city = document.getElementById("search").value;

const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        alert("City not Found...");
        return;
    }

    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = "Humidity: " + data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = "Wind: " + data.wind.speed + " km/h";


}
