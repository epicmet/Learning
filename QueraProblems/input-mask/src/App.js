import React, { useState } from "react";
import Input from "./Input";
import cities from "./cities.json";
function App() {
  const [hint, setHint] = useState("");

  function handleChange(e) {
    let value = e.target.value;
    if (value === "") {
      setHint("");
      return;
    }
    for (let city of cities) {
      let tempName = "";
      for (let letter of city) {
        tempName += letter;
        if (value === tempName) {
          setHint(city);
          return;
        }
      }
    }
    setHint("");
  }

  return (
    <div>
      <Input hint={hint} handleChange={handleChange} />
    </div>
  );
}

export default App;
