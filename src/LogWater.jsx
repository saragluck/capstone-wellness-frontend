export function LogWater(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onLogWater(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>Log Water</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Amount: <input name="amount" type="text" />
        </div>
        <div>
          Time: <input name="time" type="text" />
        </div>
        <div>
          Date: <input name="date" type="text" />
        </div>
        <button type="submit">Log Water</button>
      </form>
    </div>
  );
}