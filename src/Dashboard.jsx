import { Sleep } from "./Sleep";
import { Water } from "./Water";
import { Goals } from "./Goals";
import { Productivity } from "./Productivity";
import axios from "axios";
import { useState, useEffect } from "react";
import { LogoutLink } from "./LogoutLink";
import { Link } from "react-router-dom";
import { LogSleep } from "./LogSleep";

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


  const [goals, setGoals] = useState([]);
  const handleGoals = () => {
    console.log("handleIndexGoals");
    axios.get("http://localhost:3000/goals.json").then((response) => {
      console.log(response.data);
      setGoals(response.data);
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

  // const handleSubmit = (event) => {
  //     event.preventDefault();
  //     const params = new FormData(event.target);
  //     props.onLogSleep(params, () => event.target.reset());
  //   };
 

  // useEffect(handleSubmit, []);

  return (
    <div>
      <LogoutLink />
      <h1>Dashboard</h1>
      <div>
        <button type="button" className="btn btn-outline-dark btn-circle btn-xl" onClick={handleShowLogSleep}>Log Sleep</button>
      {showLogSleep && <LogSleep />}
        <Link to="#setgoal">
          <button type="button" className="btn btn-outline-dark btn-circle btn-xl">
            Set Goal
          </button>
        </Link>
        <button type="button" className="btn btn-outline-dark btn-circle btn-xl">
          Log Sleep
        </button>{" "}
        <button type="button" className="btn btn-outline-dark btn-circle btn-xl">
          Log Water
        </button>{" "}
        <button type="button" className="btn btn-outline-dark btn-circle btn-xl">
          Log Productivity
        </button>
      </div>
      <Goals />
      <Sleep />
      <Productivity />
      <Water />
    </div>
  );
}
