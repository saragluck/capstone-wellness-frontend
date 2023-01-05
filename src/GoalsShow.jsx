export function GoalsShow(props) {
  return (
    <div>
      <h1>Goal</h1>
      <h2>Goal: {props.goal.goal}</h2>
      <h2>Category: {props.goal.category}</h2>
      <form>
        <div>
          Goal: <input defaultValue={props.goal.goal} name="goal" type="text" />
        </div>
        <div>
          Category: <input defaultValue={props.goal.category} name="category" type="text" />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
