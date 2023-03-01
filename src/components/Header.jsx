import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Header() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="bg-red-400 py-4">
      <Navbar />
    </div>
    // <nav>
    //   <div className="container">
    //     <ul>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  );
}

export default Header;
