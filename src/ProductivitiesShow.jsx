export function ProductivitiesShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateProductivity(props.productivity.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyProductivity(props.productivity);
  };

  return (
    <div>
      <h1>Productivity Info</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Level: <input defaultValue={props.productivity.level} name="level" type="text" />
        </div>
        <div>
          time: <input defaultValue={props.productivity.time} name="time" type="time" />
        </div>
        <div>
          date: <input defaultValue={props.productivity.date} name="date" type="date" />
        </div>
        <button type="submit">Update</button>
        <button onClick={handleClick}>Delete Productivity</button>
      </form>
    </div>
  );
}
