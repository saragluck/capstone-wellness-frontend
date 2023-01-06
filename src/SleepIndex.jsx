import moment from "moment";

export function SleepIndex(props) 
  return (
    <div>
      <h1>Sleep</h1>
      {props.sleeps.map((sleep) => (
        <div key={sleep.id}>
          <h2>
            I slept from {moment(sleep.asleep).format("HH:mm")} to {moment(sleep.awake).format("HH:mm")} on{" "}
            {moment(sleep.date).format("MMMM Do, YYYY")}. Duration:{" "}
            {moment
              .duration(moment(sleep.awake, "YYYY/MM/DD hh:mm").diff(moment(sleep.asleep, "YYYY/MM/DD hh:mm")))
              .asHours()}{" "}
            hours
          </h2>
          <button onClick={() => props.onShowSleep(sleep)}>Edit</button>
        </div>
      ))}
    </div>
  );
}
