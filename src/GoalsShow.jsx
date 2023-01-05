export function GoalsShow(props) {
  return (
    <div>
      <h1>Goal</h1>
      <h2>Goal: {props.goal.goal}</h2>
      <h2>Category: {props.goal.category}</h2>
    </div>
  );
}
