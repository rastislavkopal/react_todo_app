import React, { useEffect, useState } from 'react'

import { IoMenuOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Navbar() {
  
  const [isSmall, setIsSmall] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.removeEventListener('scroll', () => setOffset(window.pageYOffset));
    window.addEventListener('scroll', () => setOffset(window.pageYOffset), { passive: true });
    return () => window.removeEventListener('scroll', () => setOffset(window.pageYOffset));
  }, []);

  const toggleActiveNavbar = () => {
    setIsSmall(!isSmall);
  };

  return (
    <nav className={`${(offset !== 0 ) ? "scrolled" : "not_scrolled"} main_nav ${(isSmall) ? "responsive" : ""}`} id="myTopnav">
        <Link className="active" to="/">Home</Link>
        <Link to="/stuff">Stuff</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
        <a href="/#" className="navbar_icon" onClick={ () => toggleActiveNavbar()}>
          <IoMenuOutline />
        </a>
    </nav>
  )
}
