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
          Level:{" "}
          <input
            className="bg-transparent form-control rounded-pill"
            defaultValue={props.productivity.level}
            name="level"
            type="text"
          />
        </div>
        <div>
          time:{" "}
          <input
            className="bg-transparent form-control rounded-pill"
            defaultValue={props.productivity.time}
            name="time"
            type="time"
          />
        </div>
        <div>
          date:{" "}
          <input
            className="bg-transparent form-control rounded-pill"
            defaultValue={props.productivity.date}
            name="date"
            type="date"
          />
        </div>
        <button className="btn btn-outline-dark rounded-pill" type="submit">Update</button>
        <button className="btn btn-outline-dark rounded-pill" onClick={handleClick}>
          Delete Productivity
        </button>
      </form>
    </div>
  );
}
