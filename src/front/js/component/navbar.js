import React, { Component, useContext } from "react";

import { Link, useHistory } from "react-router-dom";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import Logo from "../../img/LOGO2.jpg";
import "../../styles/navbar.scss";
import { useAuth } from "../pages/register";

export const NavBar = () => {
	const history = useHistory();
	const login = useAuth();
	const handleLogOut = () => {
		localStorage.clear();
		history.push("/");
		location.reload();
	};

	return (
		<Navbar className="navbar" bg="white" expand="lg">
			<Container>
				<Navbar.Brand>
					<Link to="/">
						<img
							src={Logo}
							width="200"
							height="120"
							className="logo d-inline-block align-top"
							alt="Lost Pets logo"
						/>
					</Link>
				</Navbar.Brand>
				<p className="description">
					If you lost your pet, or found one on the streets, help us. Spread your ad to save our Pets.
					<br />
					Alert Now! Its Free!!
				</p>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />

				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						{!login.isLogged() && <Nav.Link href="/amber">Login</Nav.Link>}
						{!login.isLogged() && <Nav.Link href="/register">Sign up</Nav.Link>}
						{login.isLogged() && <Nav.Link href="/userDashboard">My Posts</Nav.Link>}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
//nav.links empty navbar.collapse, inside Navbar.Collaps, return conditional
