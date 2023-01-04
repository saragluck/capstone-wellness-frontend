import { SetGoal } from "./SetGoal";
import axios from "axios";
import { useState, useEffect } from "react";

export function Goals(props) {
  const [goals, setGoals] = useState([]);

  const handleSetGoal = (params, successCallback) => {
    console.log("handleSetGoal", params);
    axios.post("http://localhost:3000/goals.json", params).then((response) => {
      setGoals([...goals, response.data]);
      successCallback();
    });
  };

  return (
    <div>
      <h1>Goals</h1>
      {props.goals.map((goal) => (
        <div key={goal.id}>
          <h2>
            I want to drink {goal.goal} of {goal.category}.
          </h2>
        </div>
      ))}
      <SetGoal onSetGoal={handleSetGoal} />
    </div>
  );
}
