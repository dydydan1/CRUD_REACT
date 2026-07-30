import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Login() {
  return (
    <>
      <h1>This is a Login page</h1>

      <ul>
        <li>
          <Link to="/tasks">Tasks</Link>
        </li>
        <li>
          <Button asChild>
          <Link to="/signup">Signup</Link>
          </Button>
        </li>
      </ul>
    </>
  );
}

export default Login;