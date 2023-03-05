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
          Asleep: <input className="bg-transparent form-control rounded-pill" name="asleep" type="time" />
        </div>
        <div>
          Awake: <input className="bg-transparent form-control rounded-pill" name="awake" type="time" />
        </div>
        <div>
          Date: <input className="bg-transparent form-control rounded-pill" name="date" type="date" />
        </div>
        <button className="btn btn-outline-dark rounded-pill" type="submit" >
          Log Sleep
        </button>
      </form>
    </div>
  );
}
