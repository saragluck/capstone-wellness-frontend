import { Sleep } from "./Sleep";
import { Water } from "./Water";
import { Goals } from "./Goals";
import { Productivity } from "./Productivity";
import axios from "axios";
import { useState, useEffect } from "react";
import { LogoutLink } from "./LogoutLink";
import { Link } from "react-router-dom";
import { LogSleep } from "./LogSleep";
import { SleepIndex } from "./SleepIndex";
import { SetGoal } from "./SetGoal";

export function Dashboard() {

  const [showLogSleep, setShowLogSleep] = useState(false);

  const handleShowLogSleep = () => {
    if (showLogSleep === false) {
    setShowLogSleep(true)
    }
    else {
      setShowLogSleep(false)
    }

  }

  const handleLogSleep = (params, successCallback) => {
    console.log("handleLogSleep", params);
    axios.post("http://localhost:3000/sleeps.json", params).then((response) => {
      setSleeps([...sleeps, response.data]);
      successCallback();
    });
  };

  const [showSetGoal, setShowSetGoal] = useState(false);
  
  const handleShowSetGoal = () => {
    if (showSetGoal === false) {
      setShowSetGoal(true)
    }
    else {
      setShowSetGoal(false)
    }
  }

  const [goals, setGoals] = useState([]);
  const handleGoals = () => {
    console.log("handleIndexGoals");
    axios.get("http://localhost:3000/goals.json").then((response) => {
      console.log(response.data);
      setGoals(response.data);
    });
  };

  const handleSetGoal = (params, successCallback) => {
    console.log("handleSetGoal", params);
    axios.post("http://localhost:3000/goals.json", params).then((response) => {
      setGoals([...goals, response.data]);
      successCallback();
    });
  };

  useEffect(handleGoals, []);

  const [waters, setWaters] = useState([]);
  const handleWaters = () => {
    console.log("handleIndexWaters");
    axios.get("http://localhost:3000/waters.json").then((response) => {
      console.log(response.data);
      setWaters(response.data);
    });
  };

  useEffect(handleWaters, []);

  const [sleeps, setSleeps] = useState([]);



  return (
    <div>
      <LogoutLink />
      <h1>Dashboard</h1>
      <div>
        <button type="button" className="btn btn-outline-dark btn-circle btn-xl" onClick={handleShowLogSleep}>Log Sleep</button>
      {showLogSleep && <LogSleep onLogSleep={handleLogSleep} />}
        <button type="button" className="btn btn-outline-dark btn-circle btn-xl" onClick={handleShowSetGoal}>
            Set Goal
          </button>
          {showSetGoal && <SetGoal onSetGoal={handleSetGoal} />}
        <button type="button" className="btn btn-outline-dark btn-circle btn-xl">
          Log Water
        </button>{" "}
        <button type="button" className="btn btn-outline-dark btn-circle btn-xl">
          Log Productivity
        </button>
      </div>
      <Goals goals={goals}/>
      <Sleep />
      <SleepIndex sleeps={sleeps}/>
      <Productivity />
      <Water />
    </div>
  );
}
