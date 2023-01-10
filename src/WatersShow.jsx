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
          Amount: <input defaultValue={props.water.amount} name="amount" type="text" />
        </div>
        <div>
          time: <input defaultValue={props.water.time} name="time" type="time" />
        </div>
        <div>
          date: <input defaultValue={props.water.date} name="date" type="date" />
        </div>
        <button type="submit">Update</button>
        <button onClick={handleClick}>Delete Water</button>
      </form>
    </div>
  );
}
