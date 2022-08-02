import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { format } from 'date-fns';
import { useEffect } from 'react';


function App() {

  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(url)
    .then((response) => {
      setData(response.data);
      console.log(response.data);
    })
  }

  useEffect(() => {
    console.log('Application has Started!');
  }, [])

  // const searchLocation = (e) => {
  //   if(e.key === 'Enter') {
  //     axios.get(url)
  //     .then((response) => {
  //       setData(response.data);
  //       console.log(response.data);
  //     })
  //     setLocation('');
  //   }
  // }

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
            <div className="select-top">
              <input type="text" value={location} className="location-field" placeholder="Enter city"
                onChange={(e) => setLocation(e.target.value)}
                // onKeyPress={searchLocation}
              />
              <button className="search-box" onClick={handleSubmit}>
                <span>Search</span>
              </button>
            </div>
            <div className="select-middle">
              <ul><li><p>Lagos</p></li></ul>
              <ul><li><p>New York</p></li></ul>
              <ul><li><p>London</p></li></ul>
              <ul><li><p>Dubai</p></li></ul>
            </div>
            <div className="select-bottom">
              <h2 className="details-text">Weather Details</h2>
              <div className="box-2">
                <div className="box-1-of-2">
                  <ul><li>Wind</li></ul>
                  <ul><li>Feels Like</li></ul>
                  <ul><li>Humidity</li></ul>
                  <ul><li>Visibility</li></ul>
                  <ul><li>Pressure</li></ul>
                </div>
                <div className="box-1-of-2 fw-200">
                  <ul><li>{data.wind ? data.wind.speed.toFixed() : null}km/h</li></ul>
                  <ul><li>{data.main ? data.main.feels_like.toFixed() : null}°C</li></ul>
                  <ul><li>{data.main ? data.main.humidity : null}%</li></ul>
                  <ul><li>{data.visibility/1000}km</li></ul>
                  <ul><li>{data.main ? data.main.pressure : null}nHg</li></ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
