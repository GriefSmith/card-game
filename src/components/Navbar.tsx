import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <NavLink to="/">Home </NavLink>
      <NavLink to="/GameBoard">GameBoard </NavLink>
      <NavLink to="/Deckbuilder">DeckBuilder </NavLink>
    </div>
  );
}
