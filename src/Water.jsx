import axios from "axios";
import { useState, useEffect } from "react";
import { WaterIndex } from "./WaterIndex";
import { LogWater } from "./LogWater";
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

  const handleUpdateWater = (id, params, successCallback) => {
    console.log("handleUpdateWater", params);
    axios.patch(`http://localhost:3000/waters/${id}.json`, params).then((response) => {
      setWaters(
        waters.map((water) => {
          if (water.id === response.data.id) {
            return response.data;
          } else {
            return water;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleDestroyWater = (water) => {
    console.log("handleDestroy", water);
    axios.delete(`http://localhost:3000/waters/${water.id}.json`).then((response) => {
      setWaters(waters.filter((w) => w.id !== water.id));
      handleClose();
    });
  };

  return (
    <div>
      <WaterIndex waters={waters} onShowWater={handleShowWater} />
      <LogWater onLogWater={handleLogWater} />
      <WaterModal show={isWatersShowVisible} onClose={handleClose}>
        <WatersShow water={currentWater} onUpdateWater={handleUpdateWater} onDestroyWater={handleDestroyWater} />
      </WaterModal>
    </div>
  );
}
