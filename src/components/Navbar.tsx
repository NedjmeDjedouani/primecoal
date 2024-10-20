import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SecondaryColor } from "../constants";

export default function Navbar() {
  return (
    <ul className="flex  w-full justify-between  max-md:hidden ">
      <motion.li whileHover={{ color: SecondaryColor }}>
        <Link to="/">Home</Link>
      </motion.li>
      <motion.li whileHover={{ color: SecondaryColor }}>
        <Link to="/news">News</Link>
      </motion.li>
      <motion.li whileHover={{ color: SecondaryColor }}>
        <Link to="/become-distributor">Become a distributor</Link>
      </motion.li>
      <motion.li whileHover={{ color: SecondaryColor }}>
        <Link to="mailto:primecoal@info.com">Contact Us</Link>
      </motion.li>
      <motion.li whileHover={{ color: SecondaryColor }}>
        <Link to="/about-us">About Us</Link>
      </motion.li>
    </ul>
  );
}
