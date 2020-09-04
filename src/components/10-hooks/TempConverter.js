import React, { useState } from "react";

let fToCelsius = (n) => (((n - 32) * 5) / 9).toFixed(2);
let cToFahrenheit = (n) => ((n * 9) / 5 + 32).toFixed(2);

export default function TempConverter() {
  const [tempF, setTempF] = useState("32.0");
  const [tempC, setTempC] = useState("0");

  const handleChangeF = (e) => {
    let val = e.currentTarget.value;
    setTempF(val);
    setTempC(fToCelsius(+val));
  };
  const handleChangeC = (e) => {
    let val = e.currentTarget.value;
    setTempC(val);
    setTempF(cToFahrenheit(+val));
  };

  return (
    <div className="card">
      <h1 className="card-title">Temp Converter</h1>
      <div className="card-body">
        <form className="form-group">
          <label className="lead" htmlFor="F">
            Fahrenheit
          </label>
          <input
            onChange={handleChangeF}
            value={tempF}
            name="F"
            type="text"
            className="form-control"
          />
          <label className="lead" htmlFor="C">
            Celsius
          </label>
          <input
            name="C"
            onChange={handleChangeC}
            type="text"
            className="form-control"
            value={tempC}
          />
        </form>
      </div>
    </div>
  );
}
