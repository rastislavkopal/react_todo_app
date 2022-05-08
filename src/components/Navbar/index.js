import React, { useEffect, useState } from 'react'

import { IoMenuOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";


export default function Navbar() {
  
  const [isSmall, setIsSmall] = useState(false);
  const [offset, setOffset] = useState(0);
  const loc = useLocation();

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
        <Link className={ (loc.pathname === "/") ? "active" : "" } to="/">Home</Link>
        <Link className={ (loc.pathname === "/stuff") ? "active" : "" } to="/stuff">Stuff</Link>
        <Link className={ (loc.pathname === "/about") ? "active" : "" } to="/about">About</Link>
        <Link className={ (loc.pathname === "/contact") ? "active" : "" } to="/contact">Contact</Link>
        <a href="/#" className="navbar_icon" onClick={ () => toggleActiveNavbar()}>
          <IoMenuOutline />
        </a>
    </nav>
  )
}
