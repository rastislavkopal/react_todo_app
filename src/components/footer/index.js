import React from 'react'
import { IoHome, IoPersonCircle, IoMail } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="footer-distributed">

			<div className="footer-right">
				<a href="/#"><IoHome /></a>
				<a href="/#"><IoPersonCircle/></a>
				<a href="/#"><IoMail/></a>
				{/* <a href="/#"><i className="fa fa-github"></i></a> */}
			</div>

			<div className="footer-left">
				<p className="footer-links">
					<a className="link-1" href="/#">Home</a>
					<a href="/#">About</a>
					<a href="/#">Contact</a>
				</p>

				<p>Rastislav Kopál &copy; 2022</p>
			</div>

		</footer>
  )
}
