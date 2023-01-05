import { LogWater } from "./LogWater";
import axios from "axios";
import { useState, useEffect } from "react";
import { WaterIndex } from "./WaterIndex";
import { WaterModal } from "./WaterModal";
import { WatersShow } from "./WatersShow";

export function Water(props) {
  const [waters, setWaters] = useState([]);
  const [isWatersShowVisible, setIsWatersShowVisible] = useState(false);
  const [currentWater, setCurrentWater] = useState({});

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

  const handleShowWater = (water) => {
    console.log("handleShowWater", water);
    setIsWatersShowVisible(true);
    setCurrentWater(water);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsWatersShowVisible(false);
  };

  return (
    <div>
      <WaterIndex waters={waters} onShowWater={handleShowWater} />
      <LogWater onLogWater={handleLogWater} />
      <WaterModal show={isWatersShowVisible} onClose={handleClose}>
        <WatersShow water={currentWater} />
      </WaterModal>
    </div>
  );
}
