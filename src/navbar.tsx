import { Link } from "react-router-dom"

export default function Navbar() {
    return (
       <ul className="flex  w-full justify-between  max-md:hidden ">
        <li>
         <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
        <li>
          <Link to="/become-distributor">Become a distributor</Link>
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



