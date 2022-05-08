import React from 'react'
import { IoHome, IoPersonCircle, IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer-distributed">

			<div className="footer-right">
				<Link className="active" to="/"><IoHome /></Link>
				<Link to="/about"><IoPersonCircle/></Link>
				<Link to="/contact"><IoMail/></Link>
			</div>

			<div className="footer-left">
				<p className="footer-links">
					<Link className="link-1" to="/">Home</Link>
					<Link to="/about">about</Link>
					<Link to="/contact">contact</Link>
				</p>

				<p>Rastislav Kopál &copy; 2022</p>
			</div>

		</footer>
  )
}
