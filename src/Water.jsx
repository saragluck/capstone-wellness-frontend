import { LogWater } from "./LogWater";
import axios from "axios";
import { useState, useEffect } from "react";
import { WaterIndex } from "./WaterIndex";

export function Water(props) {
  const [waters, setWaters] = useState([]);

  const handleWaterIndex = () => {
    axios.get("http://localhost:3000/waters.json").then((response) => {
      console.log(response.data);
      setWaters(response.data);
    });
  };

  useEffect(handleWaterIndex, []);

  const handleLogWater = (params, successCallback) => {
    console.log("handleLogWater", params);
    axios.post("http://localhost:3000/waters.json", params).then((response) => {
      setWaters([...waters, response.data]);
      successCallback();
    });
  };

  return (
    <div>
      <WaterIndex waters={waters} />
      <LogWater onLogWater={handleLogWater} />
    </div>
  );
}
