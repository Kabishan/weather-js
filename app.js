const weather = new Weather('Boston', 'Massachusetts');

weather.changeLocation('Miami', 'Florida');

document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
  weather
    .getWeather()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
