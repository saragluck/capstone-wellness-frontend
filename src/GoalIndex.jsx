import Carousel from "react-bootstrap/Carousel";

export function GoalIndex(props) {
  // const goals = [
  //   {props.goals.map((goal) => (
  //     <div key={goal.id}>
  //       <h2>
  //         I want to drink {goal.goal} of {goal.category}.
  //       </h2>
  //       <button className="btn btn-outline-dark rounded-pill" onClick={() => props.onShowGoal(goal)}>Edit</button>
  //     </div>
  //   ))}
  // ]
  return (
    <div>
      <h1>Goals</h1>
      <div className="card-group">
        <div className="card">
          <div className="card-body">
            {props.goals.map((goal) => (
              <div key={goal.id}>
                <h2>
                  I want to {goal.goal} of {goal.category}.
                </h2>
                <button className="btn btn-outline-dark rounded-pill" onClick={() => props.onShowGoal(goal)}>
                  Edit
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <h1>Goals</h1>
      {props.goals.map((goal) => (
        <div key={goal.id}>
          <h2>
            I want to drink {goal.goal} of {goal.category}.
          </h2>
          <button className="btn btn-outline-dark rounded-pill" onClick={() => props.onShowGoal(goal)}>
            Edit
          </button>
        </div>
      ))}
      <Carousel>
        {/* {props.goals.map((goal) => (
          <div key={goal.id}>
            <h2>
              I want to drink {goal.goal} of {goal.category}.
            </h2>
            <button className="btn btn-outline-dark rounded-pill" onClick={() => props.onShowGoal(goal)}>
              Edit
            </button>
          </div>
        ))} */}
        {props.children}
      </Carousel>
      {/* {props.goals.map((goal) => (
        <div key={goal.id}>
          <h2>
            I want to drink {goal.goal} of {goal.category}.
          </h2>
          <button className="btn btn-outline-dark rounded-pill" onClick={() => props.onShowGoal(goal)}>Edit</button>
        </div>
      ))} */}
    </div>
  );
}
