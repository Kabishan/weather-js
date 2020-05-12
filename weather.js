class Weather {
  constructor(city, state) {
    this.apiKey = '1778f811374bc16d65db8178fcb8e0bd';
    this.city = city;
    this.state = state;
  }

  async getWeather() {
    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`
    );

    const data = await res.json();

    return data;
  }

  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
