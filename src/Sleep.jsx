import strftime from "strftime";
import { LogSleep } from "./LogSleep";
import axios from "axios";
import { useState, useEffect } from "react";
import { SleepModal } from "./SleepModal";
import { SleepIndex } from "./SleepIndex";

export function Sleep(props) {
  const [isSleepModalVisible, setIsSleepModalVisible] = useState(false);
  const [currentSleep, setCurrentSleep] = useState({});
  const [sleeps, setSleeps] = useState([]);

  const handleSleepIndex = () => {
    axios.get("http://localhost:3000/sleeps.json").then((response) => {
      console.log(response.data);
      setSleeps(response.data);
    });
  };

  useEffect(handleSleepIndex, []);

  const handleLogSleep = (params, successCallback) => {
    console.log("handleLogSleep", params);
    axios.post("http://localhost:3000/sleeps.json", params).then((response) => {
      setSleeps([...sleeps, response.data]);
      successCallback();
    });

    const handleSleepModal = (sleep) => {
      console.log("handleSleepModal", sleep);
      setIsSleepModalVisible(true);
      setCurrentSleep(sleep);
    };

    const handleClose = () => {
      console.log("handleClose");
      setIsSleepModalVisible(false);
    };
  };

  return (
    <div>
      <SleepIndex sleeps={sleeps} />
      <LogSleep onLogSleep={handleLogSleep} />
      <SleepModal show={true}></SleepModal>
    </div>
  );
}
