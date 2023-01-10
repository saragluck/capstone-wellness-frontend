export function SetGoal(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onSetGoal(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>Set Goal</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Goal: <input className="bg-transparent form-control rounded-pill" name="goal" type="text" />
        </div>
        <div>
          Category: <input className="bg-transparent form-control rounded-pill" name="category" type="text" />
        </div>
        <button className="btn btn-outline-dark rounded-pill" type="submit">
          Set Goal
        </button>
      </form>
    </div>
  );
}
