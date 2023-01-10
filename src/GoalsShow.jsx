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
      <form onSubmit={handleSubmit}>
        <div>
          Goal:{" "}
          <input
            className="bg-transparent form-control rounded-pill"
            defaultValue={props.goal.goal}
            name="goal"
            type="text"
          />
        </div>
        <div>
          Category:{" "}
          <input
            className="bg-transparent form-control rounded-pill"
            defaultValue={props.goal.category}
            name="category"
            type="text"
          />
        </div>
        <button className="btn btn-outline-dark rounded-pill" type="submit">
          Update
        </button>
        <button className="btn btn-outline-dark rounded-pill" onClick={handleClick}>
          Destroy Goal
        </button>
      </form>
    </div>
  );
}
