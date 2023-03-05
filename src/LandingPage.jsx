import "./App.css";
import "./index.css";
import { Signup } from "./Signup.jsx";
import { Login } from "./Login.jsx";
import { Link } from "react-router-dom";

export function LandingPage() {
  return (
    <div>
    <div className="centered">
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
  
    </div>
  );
}
