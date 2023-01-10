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
          Level: <input name="level" type="integer" />
        </div>
        <div>
          Time: <input name="time" type="time" />
        </div>
        <div>
          Date: <input name="date" type="date" />
        </div>
        <button type="submit">Log Productivity</button>
      </form>
    </div>
  );
}
