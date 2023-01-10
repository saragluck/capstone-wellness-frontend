import moment from "moment";
import "moment-timezone";

export function ProductivityIndex(props) {
  return (
    <div>
      <h1> Productivity</h1>
      {props.productivities.map(
        (productivity) => (
          console.log(props),
          (
            <div key={productivity.id}>
              <h2>
                My productivity measured {productivity.level} at {moment(productivity.time).tz("GMT").format("hh:mm A")} on{" "}
                {moment(productivity.date).format("MMMM Do, YYYY")}.
              </h2>
              <button className="btn btn-outline-dark rounded-pill" onClick={() => props.onShowProductivity(productivity)}>Edit</button>
            </div>
          )
        )
      )}
    </div>
  );
}
