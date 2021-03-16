import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/Charts";
import GoogleMap from "../components/GoogleMap";

class WeatherList extends Component {
  renderWeather(cityData) {
    const temps = cityData.list.map((weather) => weather.main.temp);
    const pressures = cityData.list.map((weather) => weather.main.pressure);
    const humidities = cityData.list.map((weather) => weather.main.humidity);
    const long = cityData.city.coord.lon;
    const lat = cityData.city.coord.lat;
    return (
      <tr key={cityData.city.name}>
        <td>{<GoogleMap lat={lat} long={long} />}</td>
        <td>
          <Chart color="orange" data={temps} />
        </td>
        <td>
          <Chart color="green" data={pressures} />
        </td>
        <td>
          <Chart color="black" data={humidities} />
        </td>
      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Pressure</th>
            <th>Temperature</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return { weather: state.weather };
};
export default connect(mapStateToProps, null)(WeatherList);
