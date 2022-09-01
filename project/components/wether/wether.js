let input = document.querySelector('.city_input');
let icon = document.querySelector('.wether_icon')
let temperatur = document.querySelector('.temperature');
let wind = document.querySelector('.wind');

function setWether(item) {
        icon.className = 'weather_icon owf';
        icon.classList.add(`owf-${item.weather[0].id}`)
}

function getWether(city='Lviv') {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&appid=5e78f6e21ac778625c357ed4a8fd19d6&units=metric`)
            .then((respons) => respons.json())
            .then(item => {
                    let iconImg = item.weather[0].id
                    let wetheDescription = item.weather[0].description
                    let temp = Math.round(item.main.temp)
                    let windSpeed = Math.round(item.wind['speed'])

                    temperatur.innerHTML = `${temp}°C ${wetheDescription}`
                    wind.innerHTML = `Wind speed: ${windSpeed} m/s`;
                    setWether(item)

            });
}

function getWether1() {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&lang=en&appid=5e78f6e21ac778625c357ed4a8fd19d6&units=metric`)
            .then((respons) => respons.json())
            .then(item => {
                    let iconImg = item.weather[0].id
                    let wetheDescription = item.weather[0].description
                    let temp = Math.round(item.main.temp)
                    let windSpeed = Math.round(item.wind['speed'])

                    temperatur.innerHTML = `${temp}°C ${wetheDescription}`
                    wind.innerHTML = `Wind speed: ${windSpeed} m/s`;
                    setWether(item)

            });
}

getWether()

input.addEventListener('change', getWether1)