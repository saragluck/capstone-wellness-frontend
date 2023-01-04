// This will include the show, update, and destroy actions for sleep.

export function EditSleep(props) {
  return (
    <div>
      <h2> Asleep: {props.sleep.asleep} </h2>
      <h2> Awake: {props.sleep.awake} </h2>
      <h2> Date: {props.sleep.date} </h2>
    </div>
  );
}
