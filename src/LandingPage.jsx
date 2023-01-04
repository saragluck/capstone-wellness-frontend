import "./App.css";
import "./index.css";
import { Signup } from "./Signup.jsx";
import { Login } from "./Login.jsx";

export function LandingPage() {
  return (
    <div>
      <h1>landing page</h1>
      <h2>of my capstone</h2>
      <br />
      <br />
      <br />
      <br />
      <div className="container col sm-3">
        <button type="button" className="btn btn-big btn-outline-dark rounded-pill">
          Sign Up
        </button>
        <button type="button" className="btn btn-big btn-outline-dark rounded-pill">
          Log In
        </button>
      </div>
      <Signup />
      <Login />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
