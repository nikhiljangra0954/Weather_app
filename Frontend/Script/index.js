const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");
const url = `https://weather-app-8wun.onrender.com/forecast?city=`;

let forecastdata = [];

search.addEventListener("click", async () => {
  const city = document.querySelector(".search-box input").value;

  if (city === "") return;

  let data = await fetch(url + `${city}`);
  let res = await data.json();
  forecastdata = res.data;
//   console.log(forecastdata);
  
//   console.log(res);
  const city_name = document.querySelector(".weather-box h2");
  const image = document.querySelector(".weather-box img");
  const temperature = document.querySelector(".weather-box .temperature");
  const description = document.querySelector(".weather-box .description");
  const humidity = document.querySelector(".weather-details .humidity span");
  const wind = document.querySelector(".weather-details .wind span");
  const units = document.querySelector("#units").value;
  displayforecast(forecastdata,units);
  switch (res.data[0].weather.description) {
    case "Clear":
      image.src = "images/clear.png";
      break;

    case "Rain":
      image.src = "images/rain.png";
      break;

    case "Snow":
      image.src = "images/snow.png";
      break;

    case "Clouds":
      image.src = "images/cloud.png";
      break;

    case "Haze":
      image.src = "images/mist.png";
      break;

    default:
      image.src = "images/clear.png";
  }


  let temp_change_to_F = Math.ceil(res.data[0].temp * 1.8 ) + 32;
  let temp_change_to_K = res.data[0].temp + 273;
  if (units == "C") {
    temperature.innerHTML = res.data[0].temp + ` C`;
  } else if (units == "F") {
    temperature.innerHTML = temp_change_to_F + ` F`;
  } else {
    temperature.innerHTML = temp_change_to_K + ` K`;
  }

  city_name.innerHTML = res.city_name + ` Today`;
  description.innerHTML = res.data[0].weather.description;
  humidity.innerHTML = res.data[0].rh;
  wind.innerHTML = res.data[0].wind_spd;
});

function displayforecast(out,unit) {
  let forecastsection = document.querySelector(".forecastContainer");
  forecastdata.innerHTML = "";
  let ans = out.map((element) => {
    let temp_to_k = element.temp + 273 
    let temp_to_F = Math.ceil(element.temp*1.8 ) + 32
    
    if(unit == "C"){
        return `
    <div>
            <img width="100" src="./images/cloud.png" alt="">
            <h2 class="temp" >${element.temp} C</h2>
            <h2 class="des" >${element.weather.description}</h2>
            <h2 class="date">${element.datetime}</h2>
        </div>`;
    }else if(unit == "k"){
        return `
    <div>
            <img width="100" src="./images/cloud.png" alt="">
            <h2 class="temp" >${temp_to_k} K</h2>
            <h2 class="des" >${element.weather.description}</h2>
            <h2 class="date">${element.datetime}</h2>
        </div>`;
    }else{
        return `
    <div>
            <img width="100" src="./images/cloud.png" alt="">
            <h2 class="temp" >${temp_to_F} F</h2>
            <h2 class="des" >${element.weather.description}</h2>
            <h2 class="date">${element.datetime}</h2>
        </div>`;
    }
    
  });

  let arr = []  
  for(let i=1;i<=ans.length;i++){
      arr.push(ans[i])
    }
      forecastsection.innerHTML = arr.join(" ");



}
