const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');
const f = document.querySelector('.f');
const c = document.querySelector('.c');

search.addEventListener('click', () =>{
    const APIKey = 'c3a2385d9bb94b89c8919622f5377f81';
    const city = document.querySelector('.search-box input').value;

    if (city === '') {
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${APIKey}`).then(response => response.json()).then(json => {

        if(json.cod === '404'){
            container.style.height = '400px';
            weatherBox.style.display = 'none';
            weatherDetails.style.display = 'none';
            error404.style.display = 'block';
            error404.classList.add('fadeIn');
            return;
        }

        error404.style.display = 'none';
        error404.classList.remove('fadeIn');

        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');

        switch (json.weather[0].main) {
            case 'Clear':
                image.src = 'images/clear.png';

                break;

            case 'Clouds':
                image.src = 'images/clouds.png';

                break;

            case 'Rain':
                image.src = 'images/rain.png';

                break;

            case 'Drizzle':
                image.src = 'images/drizzle.png';

                break;

            case 'Thunderstorm':
                image.src = 'images/thunderstorm.png';

                break;

            case 'Snow':
                image.src = 'images/snow.png';

                break;

            case 'Mist':
                image.src = 'images/mist.png';

                break;

            case 'Smoke':
                image.src = 'images/mist.png';
                break;

            case 'Haze':
                image.src = 'images/mist.png';

                break;

            case 'Dust':
                image.src = 'images/mist.png';
                break;

            case 'Fog':
                image.src = 'images/mist.png';
                break;

            case 'Sand':
                image.src = 'images/mist.png';
                break;

            case 'Ash':
                image.src = 'images/mist.png';
                break;

            case 'Squall':
                image.src = 'images/mist.png';
                break;

            case 'Tornado':
                image.src = 'images/mist.png';
                break;

            default:
                image.src = '';
        }

        temperature.innerHTML = `${parseInt(json.main.temp)}<span>°F</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}mph`;

        weatherBox.style.display = '';
        weatherDetails.style.display = '';
        weatherBox.classList.add('fadeIn');
        weatherDetails.classList.add('fadeIn');
        container.style.height = '600px';



    })
})

f.addEventListener('click', () =>{
    const APIKey = 'c3a2385d9bb94b89c8919622f5377f81';
    const city = document.querySelector('.search-box input').value;

    if (city === '') {
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${APIKey}`).then(response => response.json()).then(json => {

        if(json.cod === '404'){
            container.style.height = '400px';
            weatherBox.style.display = 'none';
            weatherDetails.style.display = 'none';
            error404.style.display = 'block';
            error404.classList.add('fadeIn');
            return;
        }

        error404.style.display = 'none';
        error404.classList.remove('fadeIn');

        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');

        switch (json.weather[0].main) {
            case 'Clear':
                image.src = 'images/clear.png';

                break;

            case 'Clouds':
                image.src = 'images/clouds.png';

                break;

            case 'Rain':
                image.src = 'images/rain.png';

                break;

            case 'Drizzle':
                image.src = 'images/drizzle.png';

                break;

            case 'Thunderstorm':
                image.src = 'images/thunderstorm.png';

                break;

            case 'Snow':
                image.src = 'images/snow.png';

                break;

            case 'Mist':
                image.src = 'images/mist.png';

                break;

            case 'Smoke':
                image.src = 'images/mist.png';
                break;

            case 'Haze':
                image.src = 'images/mist.png';

                break;

            case 'Dust':
                image.src = 'images/mist.png';
                break;

            case 'Fog':
                image.src = 'images/mist.png';
                break;

            case 'Sand':
                image.src = 'images/mist.png';
                break;

            case 'Ash':
                image.src = 'images/mist.png';
                break;

            case 'Squall':
                image.src = 'images/mist.png';
                break;

            case 'Tornado':
                image.src = 'images/mist.png';
                break;

            default:
                image.src = '';
        }

        temperature.innerHTML = `${parseInt(json.main.temp)}<span>°F</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}mph`;

        weatherBox.style.display = '';
        weatherDetails.style.display = '';
        weatherBox.classList.add('fadeIn');
        weatherDetails.classList.add('fadeIn');
        container.style.height = '600px';



    })
})

c.addEventListener('click', () =>{
    const APIKey = 'c3a2385d9bb94b89c8919622f5377f81';
    const city = document.querySelector('.search-box input').value;

    if (city === '') {
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response => response.json()).then(json => {

        if(json.cod === '404'){
            container.style.height = '400px';
            weatherBox.style.display = 'none';
            weatherDetails.style.display = 'none';
            error404.style.display = 'block';
            error404.classList.add('fadeIn');
            return;
        }

        error404.style.display = 'none';
        error404.classList.remove('fadeIn');

        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');

        switch (json.weather[0].main) {
            case 'Clear':
                image.src = 'images/clear.png';

                break;

            case 'Clouds':
                image.src = 'images/clouds.png';

                break;

            case 'Rain':
                image.src = 'images/rain.png';

                break;

            case 'Drizzle':
                image.src = 'images/drizzle.png';

                break;

            case 'Thunderstorm':
                image.src = 'images/thunderstorm.png';

                break;

            case 'Snow':
                image.src = 'images/snow.png';

                break;

            case 'Mist':
                image.src = 'images/mist.png';

                break;

            case 'Smoke':
                image.src = 'images/mist.png';
                break;

            case 'Haze':
                image.src = 'images/mist.png';

                break;

            case 'Dust':
                image.src = 'images/mist.png';
                break;

            case 'Fog':
                image.src = 'images/mist.png';
                break;

            case 'Sand':
                image.src = 'images/mist.png';
                break;

            case 'Ash':
                image.src = 'images/mist.png';
                break;

            case 'Squall':
                image.src = 'images/mist.png';
                break;

            case 'Tornado':
                image.src = 'images/mist.png';
                break;

            default:
                image.src = '';
        }

        temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}km/h`;

        weatherBox.style.display = '';
        weatherDetails.style.display = '';
        weatherBox.classList.add('fadeIn');
        weatherDetails.classList.add('fadeIn');
        container.style.height = '600px';

    })
})