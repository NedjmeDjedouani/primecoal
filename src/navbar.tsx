import { Link } from "react-router-dom"

export default function Navbar() {
    return (
      <ul className="flex  w-full justify-between">
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#News">News</a>
        </li>
        <li>
          <Link to="becomedis">Become a distrubitor</Link>
        </li>
        <li>
          <a href="#Contact">Contact Us</a>
        </li>
        <li>
          <a href="#About">About Us</a>
        </li>
      </ul>
    );
}



