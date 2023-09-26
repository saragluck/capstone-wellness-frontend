import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export function GoalIndex(props) {
  
  return (

    <div>
      <h1>Goals</h1>
      
        {/* <Carousel infiniteLoop useKeyboardArrows autoPlay>
      {props.goals.map((goal) => (
        <div key={goal.id}>
          <h2 style={{ background: 'rgba(0, 0, 0, 0.7)', borderRadius: '5px', padding: '10px', color: '#fff' }}>
            I want to {goal.goal} of {goal.category}.
          </h2>
          <button className="btn btn-outline-dark rounded-pill" onClick={() => props.onShowGoal(goal)}>
            Edit
          </button>
        </div>
      ))}
      </Carousel> */}
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <Carousel infiniteLoop axis = 'horizontal' useKeyboardArrows autoPlay>
    {props.goals.map((goal) => (
      <div key={goal.id} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'rgba(211, 211, 211, 0.2)', borderRadius: '10px', padding: '20px', color: '#fff', width: 'fit-content', margin: '0 auto' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>
          I want to {goal.goal} of {goal.category}.
        </h2>
        <button
          className="btn btn-outline-dark rounded-pill"
          onClick={() => props.onShowGoal(goal)}
          style={{ fontSize: '18px' }}
        >
          Edit
        </button>
      </div>
    ))}
  </Carousel>
</div>


    </div>
  );
}
