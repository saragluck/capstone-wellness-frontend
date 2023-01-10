import "./App.css";
import "./index.css";
import { Signup } from "./Signup.jsx";
import { Login } from "./Login.jsx";
import { Link } from "react-router-dom";

export function LandingPage() {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <div className="container col sm-3">
        <Link to="/signup">
          <button type="button" className="btn btn-big btn-outline-dark rounded-pill">
            Sign Up
          </button>
        </Link>
        <Link to="/login">
          <button type="button" className="btn btn-big btn-outline-dark rounded-pill">
            Log In
          </button>
        </Link>
      </div>
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
