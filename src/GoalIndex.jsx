import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export function GoalIndex(props) {
  
  return (

    <div>
      <h1>Goals</h1>
         <Carousel>
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
      </Carousel>
    </div>
  );
}
