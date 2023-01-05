export function WatersShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateWater(props.water.id, params, () evemt.target.reset());
  };

  return (
    <div>
      <h1>Water Info</h1>
      <h2>Amount: {props.water.amount}</h2>
      <h2>Time: {props.water.time} </h2>
      <h2>Date: {props.water.date}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Amount: <input defaultValue={props.water.amount} name="amount" type="text" />
        </div>
        <div>
          time: <input defaultValue={props.water.time} name="time" type="text" />
        </div>
        <div>
          date: <input defaultValue={props.water.date} name="date" type="text" />
        </div>
      </form>
    </div>
  );
}
