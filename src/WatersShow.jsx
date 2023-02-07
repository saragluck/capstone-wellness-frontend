export function WatersShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateWater(props.water.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyWater(props.water);
  };

  return (
    <div>
      <h1>Water Info</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Amount:{" "}
          <input
            className="bg-transparent form-control rounded-pill"
            defaultValue={props.water.amount}
            name="amount"
            type="text"
          />
        </div>
        <div>
          time:{" "}
          <input
            className="bg-transparent form-control rounded-pill"
            defaultValue={props.water.time}
            name="time"
            type="time"
          />
        </div>
        <div>
          date:{" "}
          <input
            className="bg-transparent form-control rounded-pill"
            defaultValue={props.water.date}
            name="date"
            type="date"
          />
        </div>
        <button className="btn btn-outline-dark rounded-pill" type="submit">
          Update
        </button>
        <button className="btn btn-outline-dark rounded-pill" onClick={handleClick}>
          Delete Water
        </button>
      </form>
    </div>
  );
}

// test comment
