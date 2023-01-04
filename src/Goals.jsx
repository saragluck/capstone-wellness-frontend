export function Goals(props) {
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
    </div>
  );
}
