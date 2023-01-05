import { SetGoal } from "./SetGoal";
import axios from "axios";
import { useState, useEffect } from "react";
import { GoalIndex } from "./GoalIndex";

export function Goals(props) {
  const [goals, setGoals] = useState([]);

  const handleGoalIndex = () => {
    axios.get("http://localhost:3000/goals.json").then((response) => {
      console.log(response.data);
      setGoals(response.data);
    });
  };

  useEffect(handleGoalIndex, []);

  const handleSetGoal = (params, successCallback) => {
    console.log("handleSetGoal", params);
    axios.post("http://localhost:3000/goals.json", params).then((response) => {
      setGoals([...goals, response.data]);
      successCallback();
    });
  };

  return (
    <div>
      <GoalIndex goals={goals} />
      <SetGoal onSetGoal={handleSetGoal} />
    </div>
  );
}
