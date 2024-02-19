const input = document.querySelector('.input');
const searchButton = document.querySelector('.search');

const weatherDetails = document.querySelector('.weather-details');
const weatherText = document.querySelector('.weather-text');
const temprature = document.querySelector('.temprature');
const dayDate = document.querySelector('.day-date');
const cityName = document.querySelector('.city-name');

const rainy = new Set(['Partly cloudy', 'Patchy rain nearby', 'Overcast']);
const sunny = new Set(['Sunny', 'Clear']);
const night = new Set(['Mist']);

searchButton.addEventListener('click', () => {
    let place = input.value;
    input.value = "";
    const fetchData = async function(){
        try {
            let url = `https://api.weatherapi.com/v1/current.json?key=0c80b2b56f1943ada19100744230103&q=${place}&aqi=no`;
            const res = await fetch(url);
            const data = await res.json();
            const condition = data.current.condition.text;
            weatherText.innerText = condition;
            temprature.innerText = ` ${data.current.temp_c}`;
            dayDate.innerText = data.current.last_updated;
            cityName.innerText = place;

            const classToRemove = weatherDetails.classList.item(1);
            weatherDetails.classList.remove(classToRemove);
            if(rainy.has(condition)) weatherDetails.classList.add('weather-rainy');
            else if(sunny.has(condition)) weatherDetails.classList.add('wather-sunny');
            else weatherDetails.classList.add('weather-night');

        } catch (error) {
            console.log(error);
        }
    }
    fetchData();
});

