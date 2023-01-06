export function LogSleep(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onLogSleep(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>Log Sleep</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Asleep: <input name="asleep" type="time" />
        </div>
        <div>
          Awake: <input name="awake" type="time" />
        </div>
        <div>
          Date: <input name="date" type="date" />
        </div>
        <button type="submit">Log Sleep</button>
      </form>
    </div>
  );
}
