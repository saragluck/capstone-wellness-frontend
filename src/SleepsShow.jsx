export function SleepsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateSleep(props.sleep.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroySleep(props.sleep);
  };

  return (
    <div>
      <h1> Sleep Info </h1>
      <form onSubmit={handleSubmit}>
        <div>
          Asleep: <input className="bg-transparent form-control rounded-pill" defaultValue={props.sleep.asleep} name="asleep" type="time" />
        </div>
        <div>
          awake: <input className="bg-transparent form-control rounded-pill" defaultValue={props.sleep.awake} name="awake" type="time" />
        </div>
        <div>
          date: <input className="bg-transparent form-control rounded-pill" defaultValue={props.sleep.date} name="date" type="date" />
        </div>
        <button className="btn btn-outline-dark rounded-pill" type="submit">Update Info</button>
        <button className="btn btn-outline-dark rounded-pill" onClick={handleClick}>Delete</button>
      </form>
    </div>
  );
}
