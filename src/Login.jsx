import axios from "axios";
import { useState } from "react";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}
const name = localStorage.getItem("name");

export function Login() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        localStorage.setItem("name", response.data.name);
        event.target.reset();
        window.location.href = "/dashboard"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div className="centered" id="login">
      <h1>Login</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="bg-transparent form-control form-floating mb-3 mt-3 rounded-pill"
            placeholder="Email"
            name="email"
            type="email"
          />
        </div>
        <div>
          <input
            className="bg-transparent form-control form-floating mb-3 mt-3 rounded-pill"
            name="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <button className="btn btn-outline-dark rounded-pill" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
