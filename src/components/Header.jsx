import React from "react";
import Logo from "../assets/images/Musicati Logo.png"
import "../styles/header.css"

const Header = () => {
	return (
		<header className="header">
					<div className="logo">
						<img className="logo-size" src={Logo}></img>
						<p className="logo-descrip">Hover in a melodic journey!</p>
					</div>
					<nav className="navigation">
						<a href="#">Home</a>
						<a href="#">Blog</a>
						<a href="#">Contact</a>
					</nav>
			</header>

	)

}

export default Header;

