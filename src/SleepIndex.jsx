import moment from "moment";
import "moment-timezone";

// an issue here: if you go to sleep in the pm and wake up the next am, you have a negative duration.
// yay, I fixed it! I made it be the absolute value of the duration
export function SleepIndex(props) {
  

  return (
    <div>
      <h1>Sleep</h1>
      {props.sleeps.map((sleep) => (
        <div key={sleep.id}>
          <h2>
            I slept from {sleep.asleep} to{" "}
            {sleep.awake} on {sleep.date}.
          </h2>
          <h3>
            Duration:{" "}
            {(24-Math.abs(
              moment
                .duration(moment(sleep.awake, "YYYY/MM/DD hh:mm").diff(moment(sleep.asleep, "YYYY/MM/DD hh:mm")))
                .asHours()
            )).toFixed(2)} {" "}
          hours

          </h3>
          <button className="btn btn-outline-dark rounded-pill" onClick={() => props.onShowSleep(sleep)}>
            Edit
          </button>
        </div>
      ))}
    </div>
  );
}
