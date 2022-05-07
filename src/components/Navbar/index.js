import React, { useEffect, useState } from 'react'

import { IoMenuOutline } from "react-icons/io5";

export default function Navbar() {
  
  const [isSmall, setIsSmall] = useState(false);
  const [offset, setOffset] = useState(0);

  // const handleScroll = (event) => {
  //   // let scrollTop = event.srcElement.body.scrollTop,
  //   //     itemTranslate = Math.min(0, scrollTop/3 - 60);
  //   setIsScrolled(true);
  // }

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
        <a href="/#" className="active">Tasks</a>
        <a href="/#">Stuff</a>
        <a href="/#">Contact</a>
        <a href="/#">About</a>
        <a href="/#" className="navbar_icon" onClick={ () => toggleActiveNavbar()}>
          <IoMenuOutline />
        </a>
    </nav>
  )
}
