import moment from "moment";

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
                My productivity measured {productivity.level} at {moment(productivity.time).format("hh:mm")} on{" "}
                {moment(productivity.date).format("MMMM Do, YYYY")}.
              </h2>
              <button onClick={() => props.onShowProductivity(productivity)}>Edit</button>
            </div>
          )
        )
      )}
    </div>
  );
}