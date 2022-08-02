import './App.css';

function App() {
  return (
    <div className="App">
      <div className="box">
        <div className="box-2-of-3">
          <div className="weather-preview">
            <a href='/' className="logo-text">Weather App</a>
            <div className="weather-details">
              <h1 className="weather-value">23°C</h1>
              <div className="weather-con">
                <h2 className="weather-location">Lagos</h2>
                <p className="time-date">18:04 - Friday, 15 Apr</p>
              </div>
              <p className="weather-type">Cloudy</p>
            </div>
          </div>
        </div>
        <div className="box-1-of-3">
          <div className="weather-select">
            <input type="text" className="location-field" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
