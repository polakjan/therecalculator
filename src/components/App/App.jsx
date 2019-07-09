import React, { useState, useEffect } from "react";
import { isUndefined, log, isNull } from "util";

const units = {
  length: {
    m: 1,
    km: 1000,
    mi: 1609.344,
    cm: 0.01,
    ft: 0.3048,
    yd: 0.9144
  },
  weight: {
    g: 1,
    kg: 1000,
    st: 6350.29318,
    lb: 453.59237,
    t: 1000000
  }
};
const App = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const regexI = /(\d*)(\w*)/i;

  useEffect(() => {
    if (isNull(input.match(regexI))) {
      console.log(input.match(regexI));
    } else {
      recalculate();
    }
  }, [input]);

  const handleInput = e => {
    setInput(e.target.value);
  };

  const recalculate = () => {
    let result = input.match(regexI);
    let number = result[1];
    let unit = result[2];

    if (Object.keys(units.weight).includes(unit)) {
      setResults([
        `${(number / units.weight.g) * units.weight[unit]} g`,
        `${(number / units.weight.kg) * units.weight[unit]} kg`,
        `${(number / units.weight.st) * units.weight[unit]} st`,
        `${(number / units.weight.lb) * units.weight[unit]} lb`,
        `${(number / units.weight.t) * units.weight[unit]} t`
      ]);
    } else {
      setResults([
        `${(number / units.length.m) * units.length[unit]} m`,
        `${(number / units.length.km) * units.length[unit]} km`,
        `${(number / units.length.mi) * units.length[unit]} mi`,
        `${(number / units.length.cm) * units.length[unit]} cm`,
        `${(number / units.length.ft) * units.length[unit]} ft`,
        `${(number / units.length.yd) * units.length[unit]} yd`
      ]);
    }
  };

  const outputs = results.map((output, index) => {
    return (
      <div key={index} className="output">
        {output}
      </div>
    );
  });

  return (
    <>
      <input
        type="text"
        placeholder="enter value and an unit"
        onChange={handleInput}
      />

      <div className="placeholder">
        <div className="outputs">{outputs}</div>
      </div>
    </>
  );
};

export default App;
