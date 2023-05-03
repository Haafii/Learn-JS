const searchButton = document.getElementById("search");
const searchInput = document.getElementById("searchInput");
const cityNameDiv = document.getElementById("city-name");
const tempDiv = document.getElementById("temp");
const minTempDiv = document.getElementById("min-temp");
const maxTempDiv = document.getElementById("max-temp");
const weatherTypeDiv = document.getElementById("weather-type");
const searchCity = (city) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "67fc051acdmshc2ede2558b304e2p182ae1jsnaf63996c252d",
      "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
    },
  };
  fetch(`https://open-weather13.p.rapidapi.com/city/${city}`, options)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      cityNameDiv.innerHTML = data.name;
      tempDiv.innerHTML = data.main.temp;
      minTempDiv.innerHTML = data.main.temp_min;
      maxTempDiv.innerHTML = data.main.temp_max;
      weatherTypeDiv.innerHTML = data.weather[0].main;
    })
    .catch((err) => console.error(err));
};
searchButton.onclick = () => searchCity(searchInput.value);
