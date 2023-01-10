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
          Amount: <input className="bg-transparent form-control rounded-pill" name="amount" type="text" />
        </div>
        <div>
          Time: <input className="bg-transparent form-control rounded-pill" name="time" type="time" />
        </div>
        <div>
          Date: <input className="bg-transparent form-control rounded-pill" name="date" type="date" />
        </div>
        <button className="btn btn-outline-dark rounded-pill" type="submit">
          Log Water
        </button>
      </form>
    </div>
  );
}
