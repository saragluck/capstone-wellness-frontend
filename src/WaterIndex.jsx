import moment from "moment";

export function WaterIndex(props) {
  return (
    <div>
      <h1> Water</h1>
      {props.waters.map((water) => (
        <div key={water.id}>
          <h2>
            I drank {water.amount} of water at {moment(water.time).format("hh:mm")} on{" "}
            {moment(water.date).format("MMMM Do, YYYY")}.
          </h2>
          <button onClick={() => props.onShowWater(water)}>Edit</button>
        </div>
      ))}
    </div>
  );
}
