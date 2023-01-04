import strftime from "strftime";
import { LogSleep } from "./LogSleep";
import axios from "axios";
import { useState, useEffect } from "react";

export function Sleep(props) {
  const [sleeps, setSleeps] = useState([]);

  const handleLogSleep = (params, successCallback) => {
    console.log("handleLogSleep", params);
    axios.post("http://localhost:3000/sleeps.json", params).then((response) => {
      setSleeps([...sleeps, response.data]);
      successCallback();
    });
  };

  return (
    <div>
      <h1>Sleep</h1>
      {props.sleeps.map((sleep) => (
        <div key={sleep.id}>
          <h2>
            I slept from {sleep.asleep} to {sleep.awake} on {sleep.date}.
          </h2>
        </div>
      ))}
      <LogSleep onLogSleep={handleLogSleep} />
    </div>
  );
}
