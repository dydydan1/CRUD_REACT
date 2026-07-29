import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <h1>This is a Login page</h1>

      <ul>
        <li>
          <Link to="/tasks">Tasks</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </>
  );
}

export default Login;