import { NavLink } from "react-router-dom";
export default function Nav() {
  return (
    <div>
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/venues">Venues</NavLink>
        <NavLink to="/about">About</NavLink>
      </ul>
    </div>
  );
}
