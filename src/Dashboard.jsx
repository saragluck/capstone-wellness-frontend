import { Sleep } from "./Sleep";
import { Water } from "./Water";
import { Goals } from "./Goals";
import axios from "axios";
import { useState, useEffect } from "react";

export function Dashboard() {
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
  const handleSleeps = () => {
    console.log("handleIndexSleeps");
    axios.get("http://localhost:3000/sleeps.json").then((response) => {
      console.log(response.data);
      setSleeps(response.data);
    });
  };

  useEffect(handleSleeps, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <Goals />
      <h1>words</h1>
      <Sleep />
      <Water />
    </div>
  );
}
