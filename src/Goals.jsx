import { SetGoal } from "./SetGoal";
import axios from "axios";
import { useState, useEffect } from "react";
import { GoalIndex } from "./GoalIndex";
import { GoalsModal } from "./GoalsModal";
import { GoalsShow } from "./GoalsShow";

export function Goals(props) {
  const [goals, setGoals] = useState([]);
  const [isGoalsShowVisible, setIsGoalsShowVisible] = useState({});
  const [currentGoal, setCurrentGoal] = useState({});

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

  const handleShowGoal = (goal) => {
    console.log("handleShowGoal", goal);
    setIsGoalsShowVisible(true);
    setCurrentGoal(goal);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsGoalsShowVisible(false);
  };

  return (
    <div>
      <GoalIndex goals={goals} onShowGoal={handleShowGoal} />
      <SetGoal onSetGoal={handleSetGoal} />
      <GoalsModal show={isGoalsShowVisible} onClose={handleClose}>
        <GoalsShow goal={currentGoal} />
      </GoalsModal>
    </div>
  );
}
