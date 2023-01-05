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
      <h2>Asleep: {props.sleep.asleep} </h2>
      <h2>Awake: {props.sleep.awake}</h2>
      <h2>Date: {props.sleep.date} </h2>
      <form onSubmit={handleSubmit}>
        <div>
          Asleep: <input defaultValue={props.sleep.asleep} name="asleep" type="text" />
        </div>
        <div>
          awake: <input defaultValue={props.sleep.awake} name="awake" type="text" />
        </div>
        <div>
          date: <input defaultValue={props.sleep.date} name="date" type="text" />
        </div>
        <button type="submit">Update Info</button>
        <button onClick={handleClick}>Delete</button>
      </form>
    </div>
  );
}