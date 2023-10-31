import { Link } from "react-router-dom";

export default function Home() {

  return (
    <div>

      <h1> This is the home page</h1>
      <div>
        <Link to="/sign-up">Sign Up</Link>
        <Link to="/sign-in">Sign In</Link>
        <Link to="/public">Public Route</Link>
        <Link to="/protected">Protected Route</Link>
      </div>
    </div>
  )
}

