export function LogProductivity(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onLogProductivity(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>Log Productivity</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Level: <input className="bg-transparent form-control rounded-pill" name="level" type="integer" />
        </div>
        <div>
          Time: <input className="bg-transparent form-control rounded-pill" name="time" type="time" />
        </div>
        <div>
          Date: <input className="bg-transparent form-control rounded-pill" name="date" type="date" />
        </div>
        <button className="btn btn-outline-dark rounded-pill" type="submit">
          Log Productivity
        </button>
      </form>
    </div>
  );
}
