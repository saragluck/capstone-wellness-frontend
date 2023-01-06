import moment from "moment";

export function SleepIndex(props) {
  return (
    <div>
      <h1>Sleep</h1>
      {props.sleeps.map((sleep) => (
        <div key={sleep.id}>
          <h2>
            I slept from {moment(sleep.asleep).format("hh:mm")} to {moment(sleep.awake).format("hh:mm")} on{" "}
            {moment(sleep.date).format("MMMM Do, YYYY")}.
          </h2>
          <button onClick={() => props.onShowSleep(sleep)}>Edit</button>
        </div>
      ))}
    </div>
  );
}
