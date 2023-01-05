export function WatersShow(props) {
  return (
    <div>
      <h1>Water Info</h1>
      <h2>Amount: {props.water.amount}</h2>
      <h2>Time: {props.water.time} </h2>
      <h2>Date: {props.water.date}</h2>
    </div>
  );
}
