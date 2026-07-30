import { Link } from "react-router-dom";

function App() {
  return (
    <div className="flex items-center gap-4">
      <h1>Home</h1>
      <Link to="/login">Go to Login</Link>
    </div>
  );
}

export default App;