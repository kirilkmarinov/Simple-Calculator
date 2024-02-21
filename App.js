import React, { useState } from "react";
import "./style.css";

function App() {
  const [value, setValue] = useState("");

  const handleSetValue = (e) => {
    setValue(value + e.target.value);
  };

  const handleDelete = (e) => {
    setValue("");
  };

  const handleClearEntry = (e) => {
    setValue(value.slice(0, -1));
  };

  const math = require("mathjs");

  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <div className="display">
            <input type="text" value={value} />
          </div>
          <div>
            <input type="button" value="C" onClick={handleDelete} />
            <input type="button" value="CE" onClick={handleClearEntry} />
            <input type="button" value="/" onClick={handleSetValue} />
          </div>
          <div>
            <input type="button" value="7" onClick={handleSetValue} />
            <input type="button" value="8" onClick={handleSetValue} />
            <input type="button" value="9" onClick={handleSetValue} />
            <input type="button" value="*" onClick={handleSetValue} />
          </div>
          <div>
            <input type="button" value="4" onClick={handleSetValue} />
            <input type="button" value="5" onClick={handleSetValue} />
            <input type="button" value="6" onClick={handleSetValue} />
            <input type="button" value="-" onClick={handleSetValue} />
          </div>
          <div>
            <input type="button" value="1" onClick={handleSetValue} />
            <input type="button" value="2" onClick={handleSetValue} />
            <input type="button" value="3" onClick={handleSetValue} />
            <input type="button" value="+" onClick={handleSetValue} />
          </div>
          <div>
            <input type="button" value="+/-" onClick={handleSetValue} />
            <input type="button" value="0" onClick={handleSetValue} />
            <input type="button" value="." onClick={handleSetValue} />
            <input
              type="button"
              value="="
              className="result"
              onClick={(e) => setValue(math.evaluate(value))}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
