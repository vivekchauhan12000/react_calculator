import React, { useState,  useRef } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  //useEffect(() => inputRef.current.focus());

  function handleClick(e) {
    setResult(result.concat(e.target.name));
  }

  function backspace() {
    setResult(result.slice(0, -1));
  }

  function clear() {
    setResult("");
  }

  function calculate() {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  }

  return (
    <div className="back">
    <div className="calc-app">
      <div className="card">

      
      <from>
        <input className="form" type="text" value={result} ref={inputRef} />
      </from>

      <div className="keypad">
        <button id="clear" onClick={clear}>
          Clear
        </button>
        <button id="backspace" onClick={backspace}>
          C
        </button>
        <button  className="button" name="+" onClick={handleClick}>
          +
        </button>
        <button className="buttonum" name="7" onClick={handleClick}>
          7
        </button>
        <button className="buttonum" name="8" onClick={handleClick}>
          8
        </button>
        <button className="buttonum" name="9" onClick={handleClick}>
          9
        </button>
        <button  className="button" name="-" onClick={handleClick}>
          -
        </button>
        <button className="buttonum" name="4" onClick={handleClick}>
          4
        </button>
        <button className="buttonum" name="5" onClick={handleClick}>
          5
        </button>
        <button className="buttonum" name="6" onClick={handleClick}>
          6
        </button>
        <button  className="button" name="*" onClick={handleClick}>
          &times;
        </button>
        <button className="buttonum" name="1" onClick={handleClick}>
          1
        </button>
        <button className="buttonum" name="2" onClick={handleClick}>
          2
        </button>
        <button className="buttonum" name="3" onClick={handleClick}>
          3
        </button>
        <button  className="button" name="/" onClick={handleClick}>
          /
        </button>
        <button className="buttonum" name="0" onClick={handleClick}>
          0
        </button>
        <button className="buttonum" name="." onClick={handleClick}>
          .
        </button>
        <button id="result" onClick={calculate}>
          =
        </button>
      </div>
      </div>
    </div>
    </div>
  );
}

export default App;