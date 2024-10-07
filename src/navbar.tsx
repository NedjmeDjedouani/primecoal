import { Link } from "react-router-dom"

export default function Navbar() {
    return (
      <ul className="flex  w-full justify-between">
        <li>
         <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
        <li>
          <Link to="/becomedis">Become a distrubitor</Link>
        </li>
        <li>
          <Link to="mailto:primecoal@info.com">
          Contact Us</Link>
        </li>
        <li>
          <Link to="/About">About Us</Link>
        </li>
      </ul>
    );
}



