class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.feelsLike = document.getElementById('w-feels-like');
    this.wind = document.getElementById('w-wind');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.humidity = document.getElementById('w-humidity');
  }

  paint(weather) {
    this.location.textContent = weather.city_name + ', ' + weather.state_code;
    this.desc.textContent = weather.weather.description;
    this.string.innerHTML = `${weather.temp}&#8451`;
    this.icon.setAttribute(
      'src',
      `https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png`
    );
    this.feelsLike.innerHTML = `Feels Like: ${weather.app_temp}&#8451`;
    this.wind.textContent = `Wind: From ${weather.wind_cdir} at ${weather.wind_spd} m/s`;
    this.humidity.textContent = `Relative Humidity: ${weather.rh}%`;
    this.dewpoint.innerHTML = `Dewpoint: ${weather.dewpt}&#8451;`;
  }
}
