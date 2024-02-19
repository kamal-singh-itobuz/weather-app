const input = document.querySelector('.input');
const searchButton = document.querySelector('.search');

const weatherDetails = document.querySelector('.weather-details');
const weatherText = document.querySelectorAll('.weather-text');
const temprature = document.querySelectorAll('.temprature');
const dayDate = document.querySelectorAll('.day-date');
const cityName = document.querySelectorAll('.city-name');
//SUNNY -> NIGHT -> RAINY
// console.log(weatherText);

searchButton.addEventListener('click', () => {
    let place = input.value;
    const fetchData = async function(){
        try {
            let url = `https://api.weatherapi.com/v1/current.json?key=0c80b2b56f1943ada19100744230103&q=${place}&aqi=no`;
            const res = await fetch(url);
            const data = await res.json();
            const condition = data.current.condition.text;
            console.log(data.current);
            if(condition === "Partly cloud" || condition==="Cloud") {
                weatherText[1].innerText = condition;
                temprature[1].innerText = data.current.temp_c;
                dayDate[1].innerText = data.current.last_updated;
                cityName[1].innerText = place;
            }
        } catch (error) {
            console.log(error)
        }
    }
    fetchData();
});

