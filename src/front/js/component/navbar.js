import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useHistory } from "react-router-dom";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import Logo from "../../img/LOGO2.jpg";
import "../../styles/navbar.scss";

export const NavBar = () => {
	const { store } = useContext(Context);
	const history = useHistory();

	const handleLogOut = () => {
		localStorage.clear();
		history.push("/");
		location.reload();
	};

	return (
		<Navbar className=" " bg="light" expand="lg">
			<Container>
				<Navbar.Brand>
					<Link to="/">
						<img
							src={Logo}
							width="60"
							height="30"
							className="d-inline-block align-top"
							alt="Lost Pets logo"
						/>
					</Link>
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link href="/amber">Login</Nav.Link>
						<Nav.Link href="/register">Sign up</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
