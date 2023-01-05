export function SleepIndex(props) {
  return (
    <div>
      <h1>Sleep</h1>
      {props.sleeps.map((sleep) => (
        <div key={sleep.id}>
          <h2>
            I slept from {sleep.asleep} to {sleep.awake} on {sleep.date}.
          </h2>
          <button onClick={() => props.onShowSleep(sleep)}>Edit</button>
        </div>
      ))}
    </div>
  );
}
