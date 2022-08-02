import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { format } from 'date-fns';

function App() {

  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=887d88a95a3a6638d5096df07a1ad62f`

  const searchLocation = (event) => {
    if(event.key === 'Enter') {
      axios.get(url)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      setLocation('');
    }
  }

  return (
    <div className="App">
      <div className="box">
        <div className="box-2-of-3">
          <div className="weather-preview">
            <a href='/' className="logo-text">Weather App</a>
            <div className="weather-details">
              <h1 className="weather-value">{data.main ? data.main.temp.toFixed() : null}°C</h1>
              <div className="weather-con">
                <h2 className="weather-location">{data.name}</h2>
                <p className="time-date">{ format(new Date(), 'H:m - EEEE, d MMM')}</p>
              </div>
              <div className="weather-con-2">
                <p className="weather-type">{data.weather ? data.weather[0].description : null}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="box-1-of-3">
          <div className="weather-select">
            <input onChange={event => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            type="text" value={location} className="location-field" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
