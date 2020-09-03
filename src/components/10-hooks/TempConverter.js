import React, { useState } from "react";

export default function TempConverter() {
  const [tempF, setTempF] = useState(0);
  const [tempC, setTempC] = useState(0);

  const handleChangeF = (e) => {
    let val = +e.currentTarget.value;
    setTempF(val);
    let converted = (n) => (((n - 32) * 5) / 9).toFixed(2);
    setTempC(converted(val));
  };
  const handleChangeC = (e) => {
    let val = +e.currentTarget.value;
    setTempC(val);
    let converted = (n) => ((n * 9) / 5 + 32).toFixed(2);
    setTempF(converted(val));
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
            name="F"
            type="text"
            className="form-control"
            value={tempF}
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
