import "./App.css";

export default function Weather() {
  return (
    <div class="row">
      <div class="col-6">
        <h1 className="Temp">
          23{" "}
          <span className="units">
            <a href="C" className="Celsius-link">
              {" "}
              °C
            </a>
            |
            <a href="F" className="Fahrenheit-link">
              °F
            </a>
          </span>
        </h1>
      </div>
      <div class="col-6">
        <ul class="Distription">
          <li>Mostly Sunny</li>
          <li id="Date">19 Thurs 2023, 10:30</li>
          <li>Precipitation:4%</li>
          <li>Wind:17KMPH</li>
          <li>Humidity:17%</li>
        </ul>
      </div>
    </div>
  );
}
