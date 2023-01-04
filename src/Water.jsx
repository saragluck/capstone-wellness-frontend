import { LogWater } from "./LogWater";
import axios from "axios";
import { useState, useEffect } from "react";

export function Water(props) {
  const [waters, setWaters] = useState([]);

  const handleLogWater = (params, successCallback) => {
    console.log("handleLogWater", params);
    axios.post("http://localhost:3000/waters.json", params).then((response) => {
      setWaters([...waters, response.data]);
      successCallback();
    });
  };

  return (
    <div>
      <h1> Water</h1>
      {props.waters.map((water) => (
        <div key={water.id}>
          <h2>
            I drank {water.amount} of water at {water.time} on {water.date}.
          </h2>
        </div>
      ))}
      <LogWater onLogWater={handleLogWater} />
    </div>
  );
}
