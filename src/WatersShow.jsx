export function WatersShow(props) {
  return (
    <div>
      <h1>Water Info</h1>
      <h2>Amount: {props.water.amount}</h2>
      <h2>Time: {props.water.time} </h2>
      <h2>Date: {props.water.date}</h2>
      <form>
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
