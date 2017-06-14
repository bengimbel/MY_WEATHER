import React, { Component } from 'react';
import { connect } from 'react-redux';
import bindActionCreators from 'redux';

class WeatherList extends Component {
  renderWeather(cityData){
    const cityName = cityData.name;
    const temp = cityData.main.temp;
    const minTemp = cityData.main.temp_min;
    const maxTemp = cityData.main.temp_max;
    const status = cityData.weather.map(weather => weather.main);
    const description = cityData.weather.map(weather => weather.description);
    const id = cityData.weather.map(weather => weather.id);
    const { lon, lat } = cityData.coord;


  return(
    <div>
      <div>
        <h1>{cityName}</h1>
      </div>
      <div>
        <h3>{minTemp}</h3>
        <h3>{temp}</h3>
        <h3>{maxTemp}</h3>
      </div>
      <div>
        <h2 key={status}>{status}</h2>
        <h2 key={description}>{description}</h2>
      </div>
    </div>
    );
  }

  render() {
    return (
        <div>
          <h1>City</h1>
            <div>
              {this.props.weather.map(this.renderWeather)}
            </div>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {weather: state.weather}
}
//*ALL THE SAME THING... JUST ES6 SYNTAX*

// function mapStateToProps({weather}) {
//   return { weather: weather }
// }
//
// function mapStateToProps({weather}) {
//   return { weather }
// }

//*ALL THE SAME THING... JUST ES6 SYNTAX*

export default connect(mapStateToProps)(WeatherList);
