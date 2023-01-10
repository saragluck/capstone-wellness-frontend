export function GoalIndex(props) {
  return (
    <div>
      <h1>Goals</h1>
      {props.goals.map((goal) => (
        <div key={goal.id}>
          <h2>
            I want to drink {goal.goal} of {goal.category}.
          </h2>
          <button className="btn btn-outline-dark rounded-pill" onClick={() => props.onShowGoal(goal)}>Edit</button>
        </div>
      ))}
    </div>
  );
}
