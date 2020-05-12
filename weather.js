class Weather {
  constructor(city, state) {
    this.apiKey = 'cfce7c4634214e01a12c104a25dbc25a';
    this.city = city;
    this.state = state;
  }

  async getWeather() {
    const res = await fetch(
      `https://api.weatherbit.io/v2.0/current?city=${this.city},${this.state}&key=${this.apiKey}`
    );

    const data = await res.json();

    return data.data[0];
  }

  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
