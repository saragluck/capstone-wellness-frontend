import axios from "axios";
import { useState, useEffect } from "react";
import { SleepIndex } from "./SleepIndex";
import { LogSleep } from "./LogSleep";
import { SleepModal } from "./SleepModal";
import { SleepsShow } from "./SleepsShow";
import SleepGraph from "./SleepGraph";

export function Sleep(props) {
  const [sleeps, setSleeps] = useState([]);
  const [isSleepsShowVisible, setIsSleepsShowVisible] = useState(false);
  const [currentSleep, setCurrentSleep] = useState({});

  const handleSleepIndex = () => {
    axios.get("http://localhost:3000/sleeps.json").then((response) => {
      console.log(response.data);
      setSleeps(response.data);
    });
  };

  const handleSleepGraph = () => {
    axios.get("http://localhost:3000/sleeps.json");
  };
  useEffect(handleSleepIndex, []);

  const handleLogSleep = (params, successCallback) => {
    console.log("handleLogSleep", params);
    axios.post("http://localhost:3000/sleeps.json", params).then((response) => {
      setSleeps([...sleeps, response.data]);
      successCallback();
    });
  };

  const handleShowSleep = (sleep) => {
    console.log("handleShowSleep", sleep);
    setIsSleepsShowVisible(true);
    setCurrentSleep(sleep);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsSleepsShowVisible(false);
  };

  const handleUpdateSleep = (id, params, successCallback) => {
    console.log("handleUpdateSleep", params);
    axios.patch(`http://localhost:3000/sleeps/${id}.json`, params).then((response) => {
      setSleeps(
        sleeps.map((sleep) => {
          if (sleep.id === response.data.id) {
            return response.data;
          } else {
            return sleep;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleDestroySleep = (sleep) => {
    console.log("handleDestroy", sleep);
    axios.delete(`http://localhost:3000/sleeps/${sleep.id}.json`).then((response) => {
      setSleeps(sleeps.filter((s) => s.id !== sleep.id));
      handleClose();
    });
  };

  useEffect(handleSleepIndex, []);

  return (
    <div>
      <h1>TEST DOES IT SHOW UP </h1>
      <SleepIndex sleeps={sleeps} onShowSleep={handleShowSleep} />
      <SleepGraph />
      <LogSleep onLogSleep={handleLogSleep} />
      <SleepModal show={isSleepsShowVisible} onClose={handleClose}>
        <SleepsShow sleep={currentSleep} onUpdateSleep={handleUpdateSleep} onDestroySleep={handleDestroySleep} />
      </SleepModal>
    </div>
  );
}
