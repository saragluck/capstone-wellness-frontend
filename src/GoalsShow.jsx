export function GoalsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateGoal(props.goal.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyGoal(props.goal);
  };

  return (
    <div>
      <h1>Goal</h1>
      <h2>Goal: {props.goal.goal}</h2>
      <h2>Category: {props.goal.category}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Goal: <input defaultValue={props.goal.goal} name="goal" type="text" />
        </div>
        <div>
          Category: <input defaultValue={props.goal.category} name="category" type="text" />
        </div>
        <button type="submit">Update</button>
        <button onClick={handleClick}>Destroy Goal</button>
      </form>
    </div>
  );
}
