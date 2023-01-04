export function Water(props) {
  return (
    <div>
      <h1> Water</h1>
      {props.waters.map((water) => (
        <div key={water.id}>
          <h2>
            I drank {water.amount} of water at {water.time} on {water.date}.
          </h2>
        </div>
      ))}
    </div>
  );
}
